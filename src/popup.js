// DOM Elements
const converterSection = document.getElementById('converter-section');
const errorSection = document.getElementById('error-section');
const errorMessage = document.getElementById('error-message');

const songLinkInput = document.getElementById('song-link');
const convertButton = document.getElementById('convert-button');
const resultSection = document.getElementById('result-section');
const convertedLink = document.getElementById('converted-link');
const copyButton = document.getElementById('copy-button');

// Helper Functions
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.color = '#dc3545';
    errorSection.style.display = 'block';
    setTimeout(() => {
        errorSection.style.display = 'none';
    }, 5000);
}

function validateUrl(url) {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

// Event Listeners
convertButton.addEventListener('click', async () => {
    const url = songLinkInput.value.trim();

    if (!validateUrl(url)) {
        showError('Please enter a valid URL');
        return;
    }

    try {
        convertButton.disabled = true;
        convertButton.textContent = 'Converting...';

        const response = await chrome.runtime.sendMessage({
            action: 'convertLink',
            url: url
        });

        if (response.success) {
            convertedLink.textContent = response.url;
            convertedLink.classList.remove('placeholder');
            resultSection.style.display = 'block';
        } else {
            showError(response.error || 'Conversion failed');
        }
    } catch (error) {
        showError('Failed to convert link');
    } finally {
        convertButton.disabled = false;
        convertButton.textContent = 'Convert';
    }
});

copyButton.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(convertedLink.textContent);
        const originalTitle = copyButton.title;
        copyButton.title = 'Copied!';

        // Visual feedback
        const icon = copyButton.querySelector('svg');
        icon.style.fill = '#1db954';

        setTimeout(() => {
            copyButton.title = originalTitle;
            icon.style.fill = 'none';
        }, 2000);
    } catch (error) {
        showError('Failed to copy to clipboard');
    }
});
