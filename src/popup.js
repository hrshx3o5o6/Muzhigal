// DOM Elements
const setupSection = document.getElementById('setup-section');
const converterSection = document.getElementById('converter-section');
const errorSection = document.getElementById('error-section');
const errorMessage = document.getElementById('error-message');

const spotifyConnectButton = document.getElementById('spotify-connect');
const youtubeConnectButton = document.getElementById('youtube-connect');
const spotifyStatus = document.getElementById('spotify-status');
const youtubeStatus = document.getElementById('youtube-status');

const songLinkInput = document.getElementById('song-link');
const convertButton = document.getElementById('convert-button');
const resultSection = document.getElementById('result-section');
const convertedLink = document.getElementById('converted-link');
const copyButton = document.getElementById('copy-button');

// State Management
let isSpotifyConnected = false;
let isYoutubeConnected = false;

// YouTube Auth
async function authenticateYouTube() {
    try {
        const redirectUri = chrome.identity.getRedirectURL();
        console.log('Your redirect URI:', redirectUri);
        
        const clientId = '294309007388-poqnpffdamrndbl85kkbhegrnti3ohci.apps.googleusercontent.com';
        const scopes = [
            'https://www.googleapis.com/auth/youtube.readonly'
        ];
        
        const authUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
        authUrl.searchParams.append('client_id', clientId);
        authUrl.searchParams.append('response_type', 'token');
        authUrl.searchParams.append('redirect_uri', redirectUri);
        authUrl.searchParams.append('scope', scopes.join(' '));
        
        const responseUrl = await chrome.identity.launchWebAuthFlow({
            url: authUrl.toString(),
            interactive: true
        });
        
        if (responseUrl) {
            const hashParams = new URLSearchParams(new URL(responseUrl).hash.substr(1));
            const accessToken = hashParams.get('access_token');
            
            if (accessToken) {
                await chrome.storage.local.set({ youtubeToken: accessToken });
                isYoutubeConnected = true;
                updateConnectionStatus();
                showSuccess('Successfully connected to YouTube');
            } else {
                throw new Error('No access token received');
            }
        }
    } catch (error) {
        console.error('YouTube auth error:', error);
        showError('Failed to authenticate with YouTube');
    }
}

// Spotify Auth
async function authenticateSpotify() {
    try {
        const clientId = '67dab6c61a8740fab3d446243cd3b8b5';
        const redirectUri = chrome.identity.getRedirectURL();
        
        const scopes = [
            'playlist-read-private',
            'user-library-read'
        ];
        
        const authUrl = new URL('https://accounts.spotify.com/authorize');
        authUrl.searchParams.append('client_id', clientId);
        authUrl.searchParams.append('response_type', 'token');
        authUrl.searchParams.append('redirect_uri', redirectUri);
        authUrl.searchParams.append('scope', scopes.join(' '));
        
        const responseUrl = await chrome.identity.launchWebAuthFlow({
            url: authUrl.toString(),
            interactive: true
        });
        
        if (responseUrl) {
            const hashParams = new URLSearchParams(new URL(responseUrl).hash.substr(1));
            const accessToken = hashParams.get('access_token');
            
            if (accessToken) {
                await chrome.storage.local.set({ spotifyToken: accessToken });
                isSpotifyConnected = true;
                updateConnectionStatus();
                showSuccess('Successfully connected to Spotify');
            } else {
                throw new Error('No access token received');
            }
        }
    } catch (error) {
        console.error('Spotify auth error:', error);
        showError('Failed to authenticate with Spotify');
    }
}

// Helper Functions
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.color = '#dc3545';
    errorSection.style.display = 'block';
    setTimeout(() => {
        errorSection.style.display = 'none';
    }, 5000);
}

function showSuccess(message) {
    errorMessage.textContent = message;
    errorMessage.style.color = '#1db954';
    errorSection.style.display = 'block';
    setTimeout(() => {
        errorSection.style.display = 'none';
    }, 5000);
}

function updateConnectionStatus() {
    spotifyStatus.className = `status-indicator ${isSpotifyConnected ? 'connected' : 'disconnected'}`;
    youtubeStatus.className = `status-indicator ${isYoutubeConnected ? 'connected' : 'disconnected'}`;
    
    if (isSpotifyConnected && isYoutubeConnected) {
        setupSection.style.display = 'none';
        converterSection.style.display = 'block';
    } else {
        setupSection.style.display = 'block';
        converterSection.style.display = 'none';
    }
}

function validateUrl(url) {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

// Initialize Extension
async function initializeExtension() {
    const storage = await chrome.storage.local.get(['spotifyToken', 'youtubeToken']);
    
    if (storage.spotifyToken) {
        isSpotifyConnected = true;
    }
    
    if (storage.youtubeToken) {
        isYoutubeConnected = true;
    }
    
    updateConnectionStatus();
}

// Event Listeners
spotifyConnectButton.addEventListener('click', authenticateSpotify);
youtubeConnectButton.addEventListener('click', authenticateYouTube);

convertButton.addEventListener('click', async () => {
    const url = songLinkInput.value.trim();
    
    if (!validateUrl(url)) {
        showError('Please enter a valid URL');
        return;
    }
    
    try {
        convertButton.disabled = true;
        const response = await chrome.runtime.sendMessage({
            action: 'convertLink',
            url: url
        });
        
        if (response.success) {
            convertedLink.textContent = response.url;
            resultSection.style.display = 'block';
        } else {
            showError(response.error || 'Conversion failed');
        }
    } catch (error) {
        showError('Failed to convert link');
    } finally {
        convertButton.disabled = false;
    }
});

copyButton.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(convertedLink.textContent);
        copyButton.title = 'Copied!';
        setTimeout(() => {
            copyButton.title = 'Copy to clipboard';
        }, 2000);
    } catch (error) {
        showError('Failed to copy to clipboard');
    }
});

// Initialize
initializeExtension();