'use strict';

import { dbQuery, db } from './connection.mjs'
import express from 'express';
import { uploadImg } from '../file_upload.mjs';
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
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    next();
});

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
    const selectOneReaderQuery = `SELECT * FROM Readers WHERE Username=` + db.escape(username);
    const result = await dbQuery(selectOneReaderQuery);
    return result;
};

/* Retrieve all readers */
const selectAllReaders = async () => {
    const selectAllReadersQuery = `SELECT * FROM Readers ORDER BY DateJoined DESC`;
    const result = await dbQuery(selectAllReadersQuery);
    return result;
};

/* Update a reader 
NOTE: NEED TO SEND ALL VALUES TO SERVER FROM UI EVEN IF ONLY UPDATING ONE */
const updateReader = async (_id, values) => {
    const updateReaderQuery = `UPDATE Readers SET Username=?, Email=?, Photo=?, DateJoined=? WHERE Id=` + db.escape(_id);
    const result = await dbQuery(updateReaderQuery, values);
    return result;
};

/* Delete a reader by Id*/
const deleteReader = async (_id) => {
    const deleteReaderQuery = `DELETE FROM Readers WHERE id=` + db.escape(_id);
    const result = await dbQuery(deleteReaderQuery);
    return result;
};

/* Readers Routes

Adapted from 'Example of Writing GET route using async/await promises:
https://darifnemma.medium.com/how-to-interact-with-mysql-database-using-async-await-promises-in-node-js-9e6c81b683da  */

/* Get all readers */
router.get('/readers', async (req, res) => {
    try {
        const data = await selectAllReaders();
        // Send json response
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ Error: err.message });
    }
});

/* Get a reader by username */
router.get('/readers/:username', async (req, res) => {
    try {
        const result = await selectOneReader(req.params.username);
        if (result.length == 0) {
            res.status(404).json({ Error: "User not found" });
        } else {
            res.status(200).json(result);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ Error: err.message });
    }
});

/* Create reader */
router.post('/readers', upload.single('readerPhoto'), async (req, res) => {
    try {
        let image = req.file
        let imageKey = null;
        if (image === undefined) {
            console.log("no image")
        } else {
            const uploadImg = await uploadFile(req.file);
            image = uploadImg;
            imageKey = image.key;
            await unlinkFile(req.file.path);
            console.log("S3 response:", uploadImg);
        }

        const values = [req.body.username, req.body.email, imageKey, req.body.datejoined];
        const result = await createReader(values);
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({ Error: err.message });
    }
});

/* Update reader by id */
router.put('/readers/:_id', upload.single("updateReaderPhoto"), async (req, res) => {
    try {
        let image = req.file;
        let imageKey = null;
        if (image === undefined) {
            console.log("no image");
            imageKey = req.body.photo;
        } else {
            const uploadImg = await uploadFile(req.file);
            image = uploadImg;
            imageKey = image.key;
            console.log("S3 response:", uploadImg);
            await unlinkFile(req.file.path);
        }
        const values = [req.body.username, req.body.email, imageKey, req.body.datejoined];
        const result = await updateReader(req.params._id, values);
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({ Error: err.message });
    }
});

/* Delete a reader by id */
router.delete('/readers/:_id', async (req, res) => {
    try {
        const result = await deleteReader(req.params._id);
        if (result.affectedRows == 0) {
            res.status(404).json({ Error: "User not found" });
        } else {
            res.status(204).json(result);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ Error: err.message });
    }
});

export default router;