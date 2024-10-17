import fetch from 'node-fetch';

export const spotifyAuth = (req, res) => {
    const redirectUri = encodeURIComponent(process.env.SPOTIFY_REDIRECT_URI);
    const scopes = 'user-library-read playlist-read-private playlist-read-collaborative user-top-read';
    
    const url = `https://accounts.spotify.com/authorize?client_id=${process.env.SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes}`;
    
    res.redirect(url);
};
//code till user authentication step has been covered
//now rest of the code implementation wrt oauth needs to be coded. 

export const appleAuth = (req, res) => {
    const redirectUri = encodeURIComponent('http://localhost:3000/auth/apple/callback');
    
    const url = `https://appleid.apple.com/auth/authorize?client_id=${process.env.APPLE_CLIENT_ID}&response_type=code&scope=music&redirect_uri=${redirectUri}`;
    
    res.redirect(url);
};


// Add callback handlers here to process the received authorization codes.