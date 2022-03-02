'use strict';

import { dbQuery, db } from './connection.mjs'
import express from 'express';
import {uploadImg} from '../file_upload.mjs';
import { uploadFile } from '../s3.mjs';
import fs from 'fs';
import util from 'util';

const unlinkFile = util.promisify(fs.unlink);

const upload = uploadImg;
const router = express.Router();

router.use(express.json());

/*
    Citation for the following middleware:
    Date: 2/27/2022

    Adapted from: CORS on ExpressJS
    Source URL: https://enable-cors.org/server_expressjs.html

    Adapted from: Mithun Satheesh answer on Stack Overflow
    Sourece URL: https://stackoverflow.com/questions/18642828/origin-origin-is-not-allowed-by-access-control-allow-origin
*/
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    next();
});

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
                                 INNER JOIN Posts ON Writers.Id = Posts.WriterId
                                 ORDER BY Posted DESC`;

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
router.post('/posts', upload.single('postPhoto'), async (req, res) => {
    try {
        let image = req.file;
        let imageKey = null;
        if (image === undefined) {
            console.log("no photo");
        } else {
            const uploadImg = await uploadFile(req.file);
            image = uploadImg;
            imageKey = image.key;
            await unlinkFile(req.file.path);
            console.log("S3 response:", uploadImg);
        }
        
        const values = [req.body.writerId, req.body.content, imageKey, req.body.posted];
        const result = await createPost(values);
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({Error: err.message});
    }
});

/* Update post by id */
router.put('/posts/:_id', async (req, res) => {
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
    try {
        const result = await deletePost(req.params._id);
        if (result.affectedRows == 0) {
            res.status(404).json({Error: "Post not found"});
        } else {
            res.status(204).json(result);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({Error: err.message});
    }
});

export default router;