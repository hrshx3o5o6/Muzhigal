const SPOTIFY_API_BASE = 'https://api.spotify.com/v1';
const YOUTUBE_API_BASE = 'https://www.googleapis.com/youtube/v3';

async function convertSpotifyToYouTube(spotifyUrl) {
    try {
        const tokens = await chrome.storage.local.get(['spotifyToken', 'youtubeToken']);
        if (!tokens.spotifyToken || !tokens.youtubeToken) {
            throw new Error('Please connect both Spotify and YouTube first');
        }

        const trackId = spotifyUrl.split('/track/')[1].split('?')[0];
        
        // Get track info from Spotify
        const trackInfo = await fetch(`${SPOTIFY_API_BASE}/tracks/${trackId}`, {
            headers: {
                'Authorization': `Bearer ${tokens.spotifyToken}`
            }
        }).then(res => {
            if (!res.ok) throw new Error('Failed to fetch from Spotify');
            return res.json();
        });

        // Search on YouTube
        const searchQuery = `${trackInfo.name} ${trackInfo.artists[0].name}`;
        const youtubeSearch = await fetch(
            `${YOUTUBE_API_BASE}/search?part=snippet&q=${encodeURIComponent(searchQuery)}&type=video&key=${process.env.YOUTUBE_API_KEY}`
        ).then(res => {
            if (!res.ok) throw new Error('Failed to fetch from YouTube');
            return res.json();
        });

        if (youtubeSearch.items?.length > 0) {
            return `https://music.youtube.com/watch?v=${youtubeSearch.items[0].id.videoId}`;
        }
        throw new Error('No matching YouTube video found');
    } catch (error) {
        console.error('Conversion error:', error);
        throw error;
    }
}

async function convertYouTubeToSpotify(youtubeUrl) {
    try {
        const tokens = await chrome.storage.local.get(['spotifyToken', 'youtubeToken']);
        if (!tokens.spotifyToken || !tokens.youtubeToken) {
            throw new Error('Please connect both Spotify and YouTube first');
        }

        const videoId = youtubeUrl.split('v=')[1].split('&')[0];
        
        // Get video info from YouTube
        const videoInfo = await fetch(
            `${YOUTUBE_API_BASE}/videos?part=snippet&id=${videoId}&key=${process.env.YOUTUBE_API_KEY}`
        ).then(res => {
            if (!res.ok) throw new Error('Failed to fetch from YouTube');
            return res.json();
        });

        if (!videoInfo.items?.[0]?.snippet?.title) {
            throw new Error('Could not fetch video info from YouTube');
        }

        // Search on Spotify
        const searchQuery = videoInfo.items[0].snippet.title;
        const spotifySearch = await fetch(
            `${SPOTIFY_API_BASE}/search?q=${encodeURIComponent(searchQuery)}&type=track&limit=1`,
            {
                headers: {
                    'Authorization': `Bearer ${tokens.spotifyToken}`
                }
            }
        ).then(res => {
            if (!res.ok) throw new Error('Failed to fetch from Spotify');
            return res.json();
        });

        if (spotifySearch.tracks?.items.length > 0) {
            return spotifySearch.tracks.items[0].external_urls.spotify;
        }
        throw new Error('No matching Spotify track found');
    } catch (error) {
        console.error('Conversion error:', error);
        throw error;
    }
}

// Message listener
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'convertLink') {
        const url = request.url.toLowerCase();
        
        (async () => {
            try {
                let convertedUrl;
                if (url.includes('spotify.com')) {
                    convertedUrl = await convertSpotifyToYouTube(url);
                } else if (url.includes('youtube.com') || url.includes('youtu.be')) {
                    convertedUrl = await convertYouTubeToSpotify(url);
                } else {
                    throw new Error('Invalid URL. Please provide a Spotify or YouTube Music link.');
                }
                sendResponse({ success: true, url: convertedUrl });
            } catch (error) {
                sendResponse({ success: false, error: error.message });
            }
        })();
        return true; // Required for async sendResponse
    }
});

