'use strict';

import { dbQuery, db } from './connection.mjs'
import express from 'express';
const router = express.Router();


/* 
    Posts table methods
*/

/* Create a new post 
TODO: Need to insert WriterId based on Username? */
const createPost = async (values) => {
    const createPostQuery = `INSERT INTO Posts (WriterId, Content, Photo, Posted) VALUES (?, ?, ?, ?)`
    const result = await dbQuery(createPostQuery, values);
    return result;
};

/* Retrieve all posts by username 
Update to select from (Subquery where username = :username) As PostUser */
const selectPostsByUsername = async (username) => {
    const selectPostByUsernameQuery = `SELECT Posts.Id, Username, Content, Posts.Photo, Posted 
                                       FROM Writers 
                                       INNER JOIN Posts ON Writers.Id = Posts.WriterId 
                                       WHERE Username=`+db.escape(username);

    const result = await dbQuery(selectPostByUsernameQuery);
    return result;
};

/* Retrieve all posts */
const selectAllPosts = async () => {
    const selectAllPostsQuery = `SELECT Posts.Id, Username, Content, Posts.Photo, Posted 
                                 FROM Writers
                                 INNER JOIN Posts ON Writers.Id = Posts.WriterId`;

    const result = await dbQuery(selectAllPostsQuery);
    return result;
};

/* Update a post
NOTE: NEED TO SEND ALL VALUES TO SERVER FROM UI EVEN IF ONLY UPDATING ONE */
const updatePost = async (_id, values) => {
    const updatePostQuery = `UPDATE Posts SET WriterId=?, Content=?, Photo=?, Posted=? WHERE Id=` +db.escape(_id);
    const result = await dbQuery(updatePostQuery, values);
    return result;
};

/* Delete a post by PostId*/
const deletePost = async (_id) => {
    const deletePostQuery = `DELETE FROM Posts WHERE id=`+db.escape(_id);
    const result = await dbQuery(deletePostQuery);
    return result;
};

/* Posts Routes

Adapted from 'Example of Writing GET route using async/await promises:
https://darifnemma.medium.com/how-to-interact-with-mysql-database-using-async-await-promises-in-node-js-9e6c81b683da  */

/* Get all posts */
router.get('/posts', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    try {
        const data = await selectAllPosts();
        // Send json response
        res.status(200).json(data);
      } catch (err) {
        console.log(err);
        res.status(500).json({Error: err.message});
      }
});

/* Get all posts by username */
router.get('/posts/:username', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    try {
        const result = await selectPostsByUsername(req.params.username);
        if (result.length == 0) {
            res.status(404).json({Error: "User not found"});
        } else {
            res.status(200).json(result);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({Error: err.message});
    }
});

/* Create a post */
router.post('/posts', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    try {
        const values = [req.body.writerId, req.body.content, req.body.photo, req.body.posted];
        const result = await createPost(values);
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({Error: err.message});
    }
});

/* Update post by id */
router.put('/posts/:_id', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    try {
        const values = [req.body.writerId, req.body.content, req.body.photo, req.body.posted];
        const result = await updatePost(req.params._id, values);
        console.log(result);
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({Error: err.message});
    }
});

/* Delete a post by id */
router.delete('/posts/:_id', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    try {
        const result = await deletePost(req.params._id);
        if (result.affectedRows == 0) {
            res.status(404).json({Error: "Post not found"});
        } else {
            res.status(200).json(result);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({Error: err.message});
    }
});

export default router;