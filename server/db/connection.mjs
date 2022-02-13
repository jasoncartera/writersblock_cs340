'use strict';

import { createPool } from 'mysql';
import 'dotenv/config'

const db = createPool(process.env.CLEARDB_DATABASE_URL);

/* 
Citation for the following connect function's use of create table:
Date: 2/8/2022
Adapted from: Nodes.js MySQL Create Table on w3school
Source URL: https://www.w3schools.com/nodejs/nodejs_mysql_create_table.asp
*/

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
const dbQuery = (query) =>
    new Promise((resolve, reject) =>
    db.query(query, (error, data) => error ? reject(error): resolve(data)));

/* Creating the Writers table. */
// Wrtiers table created in MySQL Workbench
// const writersTableCreate = `CREATE TABLE IF NOT EXISTS Writers (
//   Id INT(11) NOT NULL AUTO_INCREMENT,
//   Username VARCHAR(255) UNIQUE NOT NULL,
//   Email VARCHAR(255) UNIQUE NOT NULL,
//   Photo VARCHAR(255) NULL,
//   DateJoined DATETIME NOT NULL,
//   PRIMARY KEY (Id)
//   )`;

// db.query(writersTableCreate, function (error, results, fields) {
//   if (error) {
//     console.log("Cannot create Writers table.");
//     throw error;
//   } else {
//     console.log("Writers table created");
//   };
// });

export { db, dbQuery }


// close connection?
// db_connect.end();