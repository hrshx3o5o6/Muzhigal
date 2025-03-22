const SPOTIFY_API_BASE = 'https://api.spotify.com/v1';
const YOUTUBE_API_BASE = 'https://www.googleapis.com/youtube/v3';

// Auth token management
class TokenManager {
    static async getSpotifyToken() {
        const data = await chrome.storage.local.get('spotifyToken');
        if (!data.spotifyToken) {
            throw new Error('Spotify authentication required');
        }
        return data.spotifyToken;
    }

    static async getYoutubeApiKey() {
        const data = await chrome.storage.local.get('youtubeApiKey');
        if (!data.youtubeApiKey) {
            throw new Error('YouTube API key required');
        }
        return data.youtubeApiKey;
    }

    static async setSpotifyToken(token) {
        await chrome.storage.local.set({ spotifyToken: token });
    }

    static async setYoutubeApiKey(apiKey) {
        await chrome.storage.local.set({ youtubeApiKey: apiKey });
    }
}

// Music service APIs
class SpotifyAPI {
    static async getTrackInfo(trackId) {
        try {
            const token = await TokenManager.getSpotifyToken();
            console.log('Making Spotify API request for track:', trackId);
            
            const response = await fetch(`${SPOTIFY_API_BASE}/tracks/${trackId}`, {
                headers: { 
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                console.error('Spotify API error:', {
                    status: response.status,
                    statusText: response.statusText,
                    error: errorData
                });
                throw new Error(`Spotify API error: ${response.status} ${response.statusText}`);
            }
            
            const data = await response.json();
            console.log('Spotify track data:', data);
            return data;
        } catch (error) {
            console.error('Failed to fetch track from Spotify:', error);
            throw new Error('Failed to fetch track from Spotify: ' + error.message);
        }
    }

    static async searchTrack(query) {
        const token = await TokenManager.getSpotifyToken();
        const response = await fetch(
            `${SPOTIFY_API_BASE}/search?q=${encodeURIComponent(query)}&type=track&limit=1`,
            { headers: { 'Authorization': `Bearer ${token}` } }
        );

        if (!response.ok) {
            throw new Error('Failed to search on Spotify');
        }

        const data = await response.json();
        if (!data.tracks?.items?.length) {
            throw new Error('No matching track found on Spotify');
        }

        return data.tracks.items[0];
    }
}

class YouTubeAPI {
    static async searchVideo(query) {
        const apiKey = await TokenManager.getYoutubeApiKey();
        const response = await fetch(
            `${YOUTUBE_API_BASE}/search?part=snippet&q=${encodeURIComponent(query)}&type=video&key=${apiKey}`
        );

        if (!response.ok) {
            throw new Error('Failed to search on YouTube');
        }

        const data = await response.json();
        if (!data.items?.length) {
            throw new Error('No matching video found on YouTube');
        }

        return data.items[0];
    }

    static async getVideoInfo(videoId) {
        const apiKey = await TokenManager.getYoutubeApiKey();
        const response = await fetch(
            `${YOUTUBE_API_BASE}/videos?part=snippet&id=${videoId}&key=${apiKey}`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch video info from YouTube');
        }

        const data = await response.json();
        if (!data.items?.[0]) {
            throw new Error('Video not found on YouTube');
        }

        return data.items[0];
    }
}

// Link conversion logic
class MusicLinkConverter {
    static extractSpotifyTrackId(spotifyUrl) {
        try {
            const url = new URL(spotifyUrl);
            const path = url.pathname;
            
            // Handle different Spotify URL formats
            if (path.includes('/track/')) {
                const matches = path.match(/\/track\/([a-zA-Z0-9]+)/);
                if (matches && matches[1]) {
                    return matches[1];
                }
            }
            
            throw new Error('Invalid Spotify track URL');
        } catch (error) {
            console.error('Failed to parse Spotify URL:', error);
            throw new Error('Please provide a valid Spotify track URL');
        }
    }

    static async spotifyToYoutube(spotifyUrl) {
        try {
            console.log('Converting Spotify URL:', spotifyUrl);
            const trackId = this.extractSpotifyTrackId(spotifyUrl);
            console.log('Extracted track ID:', trackId);

            const trackInfo = await SpotifyAPI.getTrackInfo(trackId);
            const searchQuery = `${trackInfo.name} ${trackInfo.artists[0].name}`;
            console.log('Searching YouTube for:', searchQuery);
            
            const video = await YouTubeAPI.searchVideo(searchQuery);
            return `https://music.youtube.com/watch?v=${video.id.videoId}`;
        } catch (error) {
            console.error('Spotify to YouTube conversion error:', error);
            throw error;
        }
    }

    static async youtubeToSpotify(youtubeUrl) {
        try {
            const videoId = new URL(youtubeUrl).searchParams.get('v');
            if (!videoId) {
                throw new Error('Invalid YouTube URL');
            }

            const videoInfo = await YouTubeAPI.getVideoInfo(videoId);
            const track = await SpotifyAPI.searchTrack(videoInfo.snippet.title);

            return track.external_urls.spotify;
        } catch (error) {
            console.error('YouTube to Spotify conversion error:', error);
            throw error;
        }
    }
}

// Message handling
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'convertLink') {
        (async () => {
            try {
                // Don't convert URL to lowercase
                const url = request.url;
                let convertedUrl;

                if (url.toLowerCase().includes('spotify.com')) {
                    convertedUrl = await MusicLinkConverter.spotifyToYoutube(url);
                } else if (url.toLowerCase().includes('youtube.com') || url.toLowerCase().includes('youtu.be')) {
                    convertedUrl = await MusicLinkConverter.youtubeToSpotify(url);
                } else {
                    throw new Error('Invalid URL. Please provide a Spotify or YouTube Music link.');
                }

                sendResponse({ success: true, url: convertedUrl });
            } catch (error) {
                sendResponse({ success: false, error: error.message });
            }
        })();
        return true;
    }

    if (request.action === 'setApiKey') {
        (async () => {
            try {
                if (request.service === 'spotify') {
                    await TokenManager.setSpotifyToken(request.token);
                } else if (request.service === 'youtube') {
                    await TokenManager.setYoutubeApiKey(request.token);
                }
                sendResponse({ success: true });
            } catch (error) {
                sendResponse({ success: false, error: error.message });
            }
        })();
        return true;
    }
});
