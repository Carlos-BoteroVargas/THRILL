import express from 'express';

const router = express.Router();

import { signin, signup } from '../controllers/user.js';

// ! Step 2 to create users. Off to controllers.user

router.post('/signin', signin);
router.post('/signup', signup);


export default router;