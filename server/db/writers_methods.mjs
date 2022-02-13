import { dbQuery } from './connection.mjs'
import express from 'express';
const router = express.Router();
/* 
    Writers table methods.
*/


/* Create a new writer. */

/* Retrieve a writer. */

/* Retrieve all writer. */
const selectAllWrtiers = async () => {
    const selectAllWriters = `SELECT * FROM Writers`
    const result = await dbQuery(selectAllWriters);
    return result;
}

/* Update a writer. */

/* Update a writer. */

/* Delete a writer */

/* Routes */

/* Adapted from 'Example of Writing GET route using async/await promises:
https://darifnemma.medium.com/how-to-interact-with-mysql-database-using-async-await-promises-in-node-js-9e6c81b683da  */
router.get('/writers', async (req, res) => {
    try {
        const data = await selectAllWrtiers();
        // Send json response
        res.status(200).json({ writers: data });
      } catch (err) {
        console.log(err);
        res.status(500);
      }
});

export default router;
