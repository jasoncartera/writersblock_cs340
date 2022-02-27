'use strict';

import { dbQuery, db } from './connection.mjs'
import express from 'express';
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
    Comments table methods
*/

/* Create a new comment 
TODO: Need to insert PostId and ReaderId based on dropdowns? */
const createComment = async (values) => {
    const createCommentQuery = `INSERT INTO Comments (ReaderId, PostId, Content, Posted) VALUES (?, ?, ?, ?)`
    const result = await dbQuery(createCommentQuery, values);
    return result;
};

/* Retrieve all comments by username
Update to select from (SUBQUEREY like post method) */
const selectCommentsByUsername = async (username) => {
    const selectCommentsByUsernameQuery = `SELECT Comments.Id, PostId, Username, Content, Posted 
                                           FROM Readers 
                                           INNER JOIN Comments ON Readers.Id = Comments.ReaderId 
                                           WHERE Username=`+db.escape(username);

    const result = await dbQuery(selectCommentsByUsernameQuery);
    return result;
};

/* Retrieve all by PostId */
const selectAllCommentsByPostId = async (postId) => {
    const selectAllCommentsByPostIdQuery = `SELECT Comments.Id, PostId, Username, Content, Posted 
                                            FROM Readers 
                                            INNER JOIN Comments ON Readers.Id = Comments.ReaderId
                                            WHERE PostId=`+db.escape(postId) 

    const result = await dbQuery(selectAllCommentsByPostIdQuery);
    return result;
};

/* Retrieve all comments */
const selectAllComments = async () => {
    const selectAllCommentsQuery = `SELECT Comments.Id, PostId, Username, Content, Posted 
                                    FROM Readers 
                                    INNER JOIN Comments ON Readers.Id = Comments.ReaderId
                                    ORDER BY Posted DESC` 

    const result = await dbQuery(selectAllCommentsQuery);
    return result;
};

/* Update a comment
NOTE: NEED TO SEND ALL VALUES TO SERVER FROM UI EVEN IF ONLY UPDATING ONE */
const updateComment = async (_id, values) => {
    const updateCommentQuery = `UPDATE Comments SET ReaderId=?, PostId=?, Content=?, Posted=? WHERE Id=` +db.escape(_id);
    const result = await dbQuery(updateCommentQuery, values);
    return result;
};

/* Delete a post by CommentId*/
const deleteComment = async (_id) => {
    const deleteCommentQuery = `DELETE FROM Comments WHERE id=`+db.escape(_id);
    const result = await dbQuery(deleteCommentQuery);
    return result;
};

/* Comments Routes

Adapted from 'Example of Writing GET route using async/await promises:
https://darifnemma.medium.com/how-to-interact-with-mysql-database-using-async-await-promises-in-node-js-9e6c81b683da  */

/* Get all comments */
router.get('/comments', async (req, res) => {
    try {
        const data = await selectAllComments();
        // Send json response
        res.status(200).json(data);
      } catch (err) {
        console.log(err);
        res.status(500).json({Error: err.message});
      }
});

/* Get all comments by username */
router.get('/comments/:username', async (req, res) => {
    try {
        const result = await selectCommentsByUsername(req.params.username);
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

/* Get all comments by PostId */
router.get('/comments/byPost/:postId', async (req, res) => {
    try {
        const result = await selectAllCommentsByPostId(req.params.postId);
        if (result.length == 0) {
            res.status(404).json({Error: "Post not found"});
        } else {
            res.status(200).json(result);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({Error: err.message});
    }
});

/* Create a post */
router.post('/comments', async (req, res) => {
    try {
        const values = [req.body.readerId, req.body.postId, req.body.content, req.body.posted];
        const result = await createComment(values);
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({Error: err.message});
    }
});

/* Update post by id */
router.put('/comments/:_id', async (req, res) => {
    try {
        const values = [req.body.readerId, req.body.postId, req.body.content, req.body.posted];
        const result = await updateComment(req.params._id, values);
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({Error: err.message});
    }
});

/* Delete a post by id */
router.delete('/comments/:_id', async (req, res) => {
    try {
        const result = await deleteComment(req.params._id);
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