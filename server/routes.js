// to handle oauth callbacks

import express from 'express';
import { spotifyAuth, appleAuth } from './oauth.js';

const router = express.Router(); 

router.get('/auth/spotify', spotifyAuth)
router.get('/auth/apple', appleAuth)

export default router; 
