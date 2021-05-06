import express from 'express';

import { getPosts, getPost, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';

// ! Step 5 to create users. coming from middleware, we're are all set!
const router = express.Router();
import auth from '../middleware/auth.js';


// ! The entire operation to change/add functionalities starts here:
// ? Now off to the controllers

// * Setting up the main router.
// -> localhost:500/posts //Somehow it isn't working? // ? Got it
router.get('/', getPosts);

// -> to create Posts
router.post('/', auth, createPost);

// -> to update Posts
router.patch('/:id', auth, updatePost);

// -> to delete Posts
router.delete('/:id', auth, deletePost);

// -> to patch Posts
router.patch('/:id/likePost', auth, likePost);

export default router;