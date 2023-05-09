import express from 'express';
// import { checkAuth } from '../middleware/checkAuth.js';
import { createUser, updateScores, getHighScores, signInUser } from '../controllers/userController';
import { checkAuth } from '../middleware/checkAuth';

const authRouter = express.Router();

authRouter.post('/signup', createUser);
authRouter.post('/login', signInUser);

authRouter.use(checkAuth)

authRouter.get('/updatescore', updateScores);

// authRouter.get('/', getAllUsers);

authRouter.get('/highest', getHighScores);



export { authRouter }