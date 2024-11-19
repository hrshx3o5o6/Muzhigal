document.addEventListener('DOMContentLoaded', function() {
    console.log('Spotify Client ID:', process.env.SPOTIFY_CLIENT_ID);
    console.log('YouTube Client ID:', process.env.YOUTUBE_API_CLIENT_ID);
    // Auth elements
    const spotifyAuthBtn = document.getElementById('spotify-auth');
    const youtubeAuthBtn = document.getElementById('youtube-auth');
    const spotifyStatus = document.getElementById('spotify-status');
    const youtubeStatus = document.getElementById('youtube-status');
    const authContainer = document.getElementById('auth-container');
    const converterContainer = document.getElementById('converter-container');

    // Converter elements
    const songLinkInput = document.getElementById('song-link');
    const convertBtn = document.getElementById('convert-link');
    const copyBtn = document.getElementById('copy-link');
    const resultContainer = document.getElementById('result-container');
    const convertedLinkDiv = document.getElementById('converted-link');

    // Check existing auth status
    checkAuthStatus();

    // Event listeners
    spotifyAuthBtn.addEventListener('click', initiateSpotifyAuth);
    youtubeAuthBtn.addEventListener('click', initiateYoutubeAuth);
    convertBtn.addEventListener('click', handleConversion);
    copyBtn.addEventListener('click', copyToClipboard);

    async function checkAuthStatus() {
        const tokens = await chrome.storage.local.get(['spotifyToken', 'youtubeToken']);
        updateAuthStatus(tokens);
    }

    function updateAuthStatus(tokens) {
        if (tokens.spotifyToken) {
            spotifyStatus.textContent = 'Connected';
            spotifyStatus.classList.add('connected');
            spotifyAuthBtn.style.display = 'none';
        }

        if (tokens.youtubeToken) {
            youtubeStatus.textContent = 'Connected';
            youtubeStatus.classList.add('connected');
            youtubeAuthBtn.style.display = 'none';
        }

        if (tokens.spotifyToken && tokens.youtubeToken) {
            authContainer.style.display = 'none';
            converterContainer.style.display = 'flex';
        }
    }

    async function initiateSpotifyAuth() {
        try {
            console.log('Starting Spotify auth...');
            const clientId = process.env.SPOTIFY_CLIENT_ID;
            const redirectUri = chrome.identity.getRedirectURL();
            console.log('Redirect URI:', redirectUri);
            
            console.log('Client ID:', clientId);
            console.log('Redirect URI:', redirectUri);

            const authUrl = new URL('https://accounts.spotify.com/authorize');
            authUrl.searchParams.append('client_id', clientId);
            authUrl.searchParams.append('response_type', 'token');
            authUrl.searchParams.append('redirect_uri', redirectUri);
            authUrl.searchParams.append('scope', 'user-library-read playlist-read-private');

            console.log('Auth URL:', authUrl.toString());

            const responseUrl = await chrome.identity.launchWebAuthFlow({
                url: authUrl.toString(),
                interactive: true
            });

            console.log('Response URL:', responseUrl);

            if (responseUrl) {
                const hashParams = new URLSearchParams(new URL(responseUrl).hash.substr(1));
                const accessToken = hashParams.get('access_token');
                
                if (accessToken) {
                    await chrome.storage.local.set({ spotifyToken: accessToken });
                    spotifyStatus.textContent = 'Connected';
                    spotifyStatus.classList.add('connected');
                    spotifyAuthBtn.style.display = 'none';
                    console.log('Successfully authenticated with Spotify');
                } else {
                    throw new Error('No access token received');
                }
            }
        } catch (error) {
            console.error('Detailed auth error:', error);
            console.error('Error stack:', error.stack);
            spotifyStatus.textContent = 'Authentication failed';
            spotifyStatus.style.color = 'red';
        }
    }

    function updateSpotifyStatus(isConnected) {
        spotifyStatus.textContent = isConnected ? 'Connected' : 'Not Connected';
        spotifyStatus.classList.toggle('connected', isConnected);
        spotifyAuthBtn.style.display = isConnected ? 'none' : 'block';
    }

    async function initiateYoutubeAuth() {
        try {
            console.log('Starting YouTube auth...');
            const clientId = process.env.YOUTUBE_API_CLIENT_ID;
            const redirectUri = chrome.identity.getRedirectURL();
            
            console.log('Debug Info:', {
                clientId: clientId,
                redirectUri: redirectUri,
                extensionId: chrome.runtime.id
            });

            const YOUTUBE_SCOPES = [
                'https://www.googleapis.com/auth/youtube.readonly'
            ].join(' ');

            const authUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
            authUrl.searchParams.append('client_id', clientId);
            authUrl.searchParams.append('response_type', 'token');
            authUrl.searchParams.append('redirect_uri', redirectUri);
            authUrl.searchParams.append('scope', YOUTUBE_SCOPES);

            console.log('Full Auth URL:', authUrl.toString());

            const responseUrl = await chrome.identity.launchWebAuthFlow({
                url: authUrl.toString(),
                interactive: true
            });

            console.log('Response URL:', responseUrl);

            if (responseUrl) {
                const hashParams = new URLSearchParams(new URL(responseUrl).hash.substr(1));
                const accessToken = hashParams.get('access_token');
                
                if (accessToken) {
                    await chrome.storage.local.set({ youtubeToken: accessToken });
                    youtubeStatus.textContent = 'Connected';
                    youtubeStatus.classList.add('connected');
                    youtubeAuthBtn.style.display = 'none';
                    console.log('Successfully authenticated with YouTube');
                } else {
                    throw new Error('No access token received');
                }
            }
        } catch (error) {
            console.error('YouTube auth error:', error);
            console.error('Error stack:', error.stack);
            youtubeStatus.textContent = 'Authentication failed';
            youtubeStatus.style.color = 'red';
        }
    }

    async function handleConversion() {
        const url = songLinkInput.value.trim();
        if (!url) return;

        try {
            const response = await chrome.runtime.sendMessage({ 
                action: 'convertLink', 
                url 
            });
            
            if (response.success) {
                convertedLinkDiv.textContent = response.url;
                resultContainer.style.display = 'block';
            } else {
                alert('Conversion failed: ' + response.error);
            }
        } catch (error) {
            alert('Error converting link: ' + error.message);
        }
    }

    async function copyToClipboard() {
        const textToCopy = convertedLinkDiv.textContent;
        try {
            await navigator.clipboard.writeText(textToCopy);
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'Copied!';
            setTimeout(() => {
                copyBtn.textContent = originalText;
            }, 2000);
        } catch (err) {
            alert('Failed to copy text: ' + err.message);
        }
    }
});