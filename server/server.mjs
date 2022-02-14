'use strict';

import express from 'express';
import writers  from './db/writers_methods.mjs'
import readers  from './db/readers_methods.mjs'
import posts  from './db/posts_methods.mjs'
import comments  from './db/comments_methods.mjs'

const app = express();
const PORT = 3000;

/* Middleware */
app.use(express.urlencoded({extended:false}));

app.use(writers);
app.use(readers);
app.use(posts);
app.use(comments);

// TODO: other routs
// app.use(writersReaders)

app.get("/*", (req, res) => {
  res.send("Hello World!");
});


app.listen(process.env.PORT || PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});