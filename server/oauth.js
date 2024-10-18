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

export const spotifyCallback = async (req, res) => {
    const { code } = req.query; // Get the authorization code from the query parameters

    // Prepare the request to exchange the code for an access token
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64'),
        },
        body: querystring.stringify({
            grant_type: 'authorization_code',
            code,
            redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
        }),
    });

    const tokenData = await tokenResponse.json();

    if (tokenResponse.ok) {
        // Successfully received access token
        const accessToken = tokenData.access_token;
        const refreshToken = tokenData.refresh_token;

        // Store tokens securely (e.g., in session or database)
        // For demonstration, we'll just send them back in the response
        res.send(`Access Token: ${accessToken}<br>Refresh Token: ${refreshToken}`);
    } else {
        // Handle errors (e.g., invalid code)
        res.status(400).send(`Error retrieving access token: ${tokenData.error}`);
    }
};


// Add callback handlers here to process the received authorization codes.