const ODESLI_API_BASE = 'https://api.song.link/v1-alpha.1/links';

class MusicLinkConverter {
    static async convertLink(url) {
        try {
            console.log('Converting URL:', url);

            // 1. Fetch data from Odesli
            const response = await fetch(`${ODESLI_API_BASE}?url=${encodeURIComponent(url)}`);

            if (!response.ok) {
                throw new Error('Failed to fetch music data');
            }

            const data = await response.json();

            // 2. Determine target platform based on input URL
            const isSpotify = url.includes('spotify.com');
            const targetPlatform = isSpotify ? 'youtubeMusic' : 'spotify';

            // 3. Extract target link
            const linksByPlatform = data.linksByPlatform;
            if (!linksByPlatform || !linksByPlatform[targetPlatform]) {
                throw new Error(`Could not find a match on ${isSpotify ? 'YouTube Music' : 'Spotify'}`);
            }

            return linksByPlatform[targetPlatform].url;
        } catch (error) {
            console.error('Conversion error:', error);
            throw error;
        }
    }
}

// Message handling
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'convertLink') {
        (async () => {
            try {
                const convertedUrl = await MusicLinkConverter.convertLink(request.url);
                sendResponse({ success: true, url: convertedUrl });
            } catch (error) {
                sendResponse({ success: false, error: error.message });
            }
        })();
        return true;
    }
});
