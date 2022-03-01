'use strict';

import { dbQuery, db } from './connection.mjs'
import express from 'express';
import multer from 'multer';

const upload = multer({ dest: './uploads/' });

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
    Writers table methods.
*/

/* Create a new writer. */
const createWriter = async (values) => {
    const createWriterQuery = `INSERT INTO Writers (Username, Email, Photo, DateJoined) VALUES (?, ?, ?, ?)`
    const result = await dbQuery(createWriterQuery, values);
    return result;
};

/* Retrieve a writer
NOTE: NEED TO DECIDE ON PARAM TO SEARCH BY*/
const selectOneWriter = async (username) => {
    const selectOneWriterQuery = `SELECT * FROM Writers WHERE Username=` + db.escape(username);
    const result = await dbQuery(selectOneWriterQuery);
    return result;
};

/* Retrieve all writers */
const selectAllWriters = async () => {
    const selectAllWritersQuery = `SELECT * FROM Writers ORDER BY Id`;
    const result = await dbQuery(selectAllWritersQuery);
    return result;
};

/* Update a writer. 
NOTE: NEED TO SEND ALL VALUES TO SERVER FROM UI EVEN IF ONLY UPDATING ONE */
const updateWriter = async (_id, values) => {
    const updateWriterQuery = `UPDATE Writers SET Username=?, Email=?, Photo=?, DateJoined=? WHERE Id=` + db.escape(_id);
    const result = await dbQuery(updateWriterQuery, values);
    return result;
};

/* Delete a writer by Id*/
const deleteWriter = async (_id) => {
    const deleteWriterQuery = `DELETE FROM Writers WHERE id=` + db.escape(_id);
    const result = await dbQuery(deleteWriterQuery);
    return result;
};

/* Writers Routes

Adapted from 'Example of Writing GET route using async/await promises:
https://darifnemma.medium.com/how-to-interact-with-mysql-database-using-async-await-promises-in-node-js-9e6c81b683da  */

/* Get all writers */
router.get('/writers', async (req, res) => {
    try {
        const data = await selectAllWriters();
        // Send json response
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ Error: err.message });
    }
});

/* Get a writer by username */
router.get('/writers/:username', async (req, res) => {
    try {
        const result = await selectOneWriter(req.params.username);
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

/* Create Writer */
router.post('/writers', upload.single('writerPhoto'), async (req, res) => {
    try {
        let image = req.file;
        if (image === undefined) {
            image = null;
        } else {
            image = image.path;
        }
        const values = [req.body.username, req.body.email, image, req.body.datejoined];
        const result = await createWriter(values);
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({ Error: err.message });
    }
});

/* Update Writer */
router.put('/writers/:_id', async (req, res) => {
    try {
        const values = [req.body.username, req.body.email, req.body.photo, req.body.datejoined];
        const result = await updateWriter(req.params._id, values);
        console.log(result);
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({ Error: err.message });
    }
});

/* Delete a writer */
router.delete('/writers/:_id', async (req, res) => {
    try {
        const result = await deleteWriter(req.params._id);
        if (result.affectedRows == 0) {
            res.status(404).json({ Error: "User not found" });
        } else {
            res.status(200).json(result);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ Error: err.message });
    }
});

export default router;
