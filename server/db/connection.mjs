'use strict';

import { createPool } from 'mysql';
import 'dotenv/config'

const db = createPool(process.env.CLEARDB_DATABASE_URL);

/* Connect to database and create necessary tables if they do not exist. */
db.getConnection(function (error, connection) {
  if (error) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  /* Display connection id. */
  console.log('db id: ' + connection.threadId);
});

/* Citation: Student from CS340 in Discord channel */
const dbQuery = (query, values) => {
  if (values === undefined) {
    return new Promise((resolve, reject) => {
      db.query(query, (error, data) => {
        if (error) {
          return reject(error)
        }
        return resolve(data);
      });
    });
  }
  return new Promise((resolve, reject) => {
    db.query(query, values, (error, data) => {
      if (error) {
        return reject(error)
      }
      return resolve(data);
    });
  });
};

export { db, dbQuery }


// close connection?
// db_connect.end();