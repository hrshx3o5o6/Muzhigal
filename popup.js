document.getElementById("spotifyToApple").addEventListener('click', () => {
    //Redirecting to the express server for Spotify Authorization
    window.open('http://localhost:3000/auth/spotify', '_blank')
});

document.getElementById("appleToSpotify").addEventListener('click', () => {
    //Redirecting to the express server for Apple Music Authorization
    window.open('http://localhost:3000/auth/apple', '_blank')
});