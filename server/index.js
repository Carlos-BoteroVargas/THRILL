import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRouter from './routes/users.js';

const app = express();
dotenv.config();

// ? Why is this deprecated?
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRouter);
// ! Step 1 to create users. Off to routes/user

// const CONNECTION_URL = 'mongodb+srv://CarlosBotero-Vargas:CarlosBotero-VargasFTRI1@cluster0.nn8vt.mongodb.net/THRILL?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// ! Watch out for the IF statement not to break the server
// ? 
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
