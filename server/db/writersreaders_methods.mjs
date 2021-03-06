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

/* WritersReaders methods */

/* Create a new relationship 
TODO: Insert WriterId and ReaderId by drop down of users? */
const createRelationship = async (values) => {
    const createRelationshipQuery = `INSERT INTO WritersReaders (ReaderId, WriterId) VALUES (?, ?)`;
    const result = await dbQuery(createRelationshipQuery, values);
    return result;
};

/* Delete a relationship by id */ 
const deleteRelationshipById = async (_id) => {
    const deleteRelationshipByIdQuery = `DELETE FROM WritersReaders WHERE id=`+db.escape(_id);
    const result = await dbQuery(deleteRelationshipByIdQuery);
    return result;
};

/* Delete by Reader Username and Writer Username combo */
const deleteRelationshipByReaderWriter = async (reader, writer) => {
    const deleteRelationshipByReaderWriterQuery = `DELETE FROM WritersReaders
                                                   WHERE WriterId = (SELECT Id FROM Writers WHERE Username=`+db.escape(writer)+`)
                                                   AND ReaderId = (SELECT id FROM Readers WHERE Username=`+db.escape(reader)+`)`;
    
    const result = await dbQuery(deleteRelationshipByReaderWriterQuery);
    return result;
};

/* Select all relationships */
const selectAllRelationships = async () => {
    const selectAllRelationshipsQuery = `SELECT WritersReaders.Id, Readers.Username as Reader, Writers.Username as Writer
                                         FROM WritersReaders
                                         INNER JOIN Readers ON Readers.Id = WritersReaders.ReaderId
                                         INNER JOIN Writers ON WritersReaders.WriterId = Writers.Id`;

    const result = await dbQuery(selectAllRelationshipsQuery);
    return result;
};

/* Select all relationships by Writer Username */
const selectAllRelationshipsWriter = async (writer) => {
    const selectAllRelationshipsWriterQuery = `SELECT WritersReaders.Id, Readers.Username as Reader, Writers.Username as Writer
                                               FROM WritersReaders
                                               INNER JOIN Readers ON Readers.Id = WritersReaders.ReaderId 
                                               INNER JOIN Writers ON WritersReaders.WriterId = Writers.Id AND Writers.Username=`+db.escape(writer);

    const result = await dbQuery(selectAllRelationshipsWriterQuery);
    return result;
};

/* Select all relationships by Reader Username */
const selectAllRelationshipsReader = async (reader) => {
    const selectAllRelationshipsReaderQuery = `SELECT WritersReaders.Id, Readers.Username as Reader, Writers.Username as Writer
                                               FROM WritersReaders
                                               INNER JOIN Readers ON Readers.Id = WritersReaders.ReaderId
                                               AND Readers.Username=`+db.escape(reader)+
                                               `INNER JOIN Writers ON WritersReaders.WriterId = Writers.Id`;

    const result = await dbQuery(selectAllRelationshipsReaderQuery);
    return result;
};

/* WritersReaders Routs

Adapted from 'Example of Writing GET route using async/await promises:
https://darifnemma.medium.com/how-to-interact-with-mysql-database-using-async-await-promises-in-node-js-9e6c81b683da  */

/* Get all Relationships */

router.get('/writersreaders', async (req, res) => {
    try {
        const data = await selectAllRelationships();
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({Error: err.message});
    }
});

/* Get relationships by writer */
router.get('/writersreaders/writer/:writer', async (req, res) => {
    try {
        const result = await selectAllRelationshipsWriter(req.params.writer);
        if (result.length == 0) {
            res.status(404).json({Error: "Writer not found"})
        } else {
            res.status(200).json(result);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({Error: err.message});
    }
});

/* Get relationships by reader */
router.get('/writersreaders/reader/:reader', async (req, res) => {
    try {
        const result = await selectAllRelationshipsReader(req.params.reader);
        if (result.length == 0) {
            res.status(404).json({Error: "Reader not found"})
        } else {
            res.status(200).json(result);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({Error: err.message});
    }
});

/* Add a new relationship */
router.post('/writersreaders', async (req, res) => {
    try {
        const values = [req.body.readerId, req.body.writerId];
        const result = await createRelationship(values);
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({Error: err.message});
    }
});

/* Delete a relationship by WritersReaders Id */
router.delete('/writersreaders/:_id', async (req, res) => {
    try {
        const result = await deleteRelationshipById(req.params._id);
        if (result.affectedRows == 0) {
            res.status(404).json({Error: "Relationship not found"});
        } else {
            res.status(204).json(result);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({Error: err.message});
    }
});

/* Delete a relationship by Writer and Reader Usernames */
router.delete('/writersreaders/', async (req, res) => {
    try {
        const result = await deleteRelationshipByReaderWriter(req.query.reader, req.query.writer);
        if (result.affectedRows == 0) {
            res.status(404).json({Error: "Relationship not found"});
        } else {
            res.status(204).json(result);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({Error: err.message});
    }
});

export default router;