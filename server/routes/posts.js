import express from 'express';

import { getPosts, createPosts, updatePost, deletePost, likePost } from '../controllers/posts.js';

const router = express.Router();

// ! The entire operation to change/add functionalities starts here:
// ? Now off to the controllers

// * Setting up the main router.
// -> localhost:500/posts //Somehow it isn't working? // ? Got it
router.get('/', getPosts);

// -> to create Posts
router.post('/', createPosts);

// -> to update Posts
router.patch('/:id', updatePost);

// -> to delete Posts
router.delete('/:id', deletePost);

// -> to patch Posts
router.patch('/:id/likePost', likePost);

export default router;