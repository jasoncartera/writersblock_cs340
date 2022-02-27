'use strict';

import { dbQuery, db } from './connection.mjs'
import express from 'express';
const router = express.Router();

router.use(express.json());

/* 
    Readers table methods.
*/

/* Create a new reader */
const createReader = async (values) => {
    const createReaderQuery = `INSERT INTO Readers (Username, Email, Photo, DateJoined) VALUES (?, ?, ?, ?)`
    const result = await dbQuery(createReaderQuery, values);
    return result;
};

/* Retrieve a reader
NOTE: NEED TO DECIDE ON PARAM TO SEARCH BY*/
const selectOneReader = async (username) => {
    const selectOneReaderQuery = `SELECT * FROM Readers WHERE Username=`+db.escape(username);
    const result = await dbQuery(selectOneReaderQuery);
    return result;
};

/* Retrieve all readers */
const selectAllReaders = async () => {
    const selectAllReadersQuery = `SELECT * FROM Readers`;
    const result = await dbQuery(selectAllReadersQuery);
    return result;
};

/* Update a reader 
NOTE: NEED TO SEND ALL VALUES TO SERVER FROM UI EVEN IF ONLY UPDATING ONE */
const updateReader = async (_id, values) => {
    const updateReaderQuery = `UPDATE Readers SET Username=?, Email=?, Photo=?, DateJoined=? WHERE Id=` +db.escape(_id);
    const result = await dbQuery(updateReaderQuery, values);
    return result;
};

/* Delete a reader by Id*/
const deleteReader = async (_id) => {
    const deleteReaderQuery = `DELETE FROM Readers WHERE id=`+db.escape(_id);
    const result = await dbQuery(deleteReaderQuery);
    return result;
};

/* Readers Routes

Adapted from 'Example of Writing GET route using async/await promises:
https://darifnemma.medium.com/how-to-interact-with-mysql-database-using-async-await-promises-in-node-js-9e6c81b683da  */

/* Get all readers */
router.get('/readers', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    try {
        const data = await selectAllReaders();
        // Send json response
        res.status(200).json(data);
      } catch (err) {
        console.log(err);
        res.status(500).json({Error: err.message});
      }
});

/* Get a reader by username */
router.get('/readers/:username', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    try {
        const result = await selectOneReader(req.params.username);
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

/* Create reader */
router.post('/readers', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    try {
        const values = [req.body.username, req.body.email, req.body.photo, req.body.datejoined];
        const result = await createReader(values);
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({Error: err.message});
    }
});

/* Update reader by id */
router.put('/readers/:_id', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    try {
        const values = [req.body.username, req.body.email, req.body.photo, req.body.datejoined];
        const result = await updateReader(req.params._id, values);
        console.log(result);
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({Error: err.message});
    }
});

/* Delete a reader by id */
router.delete('/readers/:_id', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    try {
        const result = await deleteReader(req.params._id);
        if (result.affectedRows == 0) {
            res.status(404).json({Error: "User not found"});
        } else {
            res.status(200).json(result);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({Error: err.message});
    }
});

export default router;