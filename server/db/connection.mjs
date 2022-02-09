'use strict';

import { createConnection } from 'mysql';

const db = createConnection(process.env.CLEARDB_DATABASE_URL);

/* 
Citation for the following connect function's use of create table:
Date: 2/8/2022
Adapted from: Nodes.js MySQL Create Table on w3school
Source URL: https://www.w3schools.com/nodejs/nodejs_mysql_create_table.asp
*/
 
/* Connect to database and create necessary tables if they do not exist. */
db.connect(function(error) {
  if (error) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  /* Display connection id. */
  console.log('db id: ' + connection.threadId);

  //TODO: Possibly need to create table on heroku?
  /* Creating the Writers table. */
  const writersTableCreate = `create table if not exists Writers(
    Id: INT auto_increment NOT NULL primary key,
    Username: NVARCHAR(15) unique NOT NULL,
    Email: NVARCHAR(255) unique NOT NULL,
    Photo: NVARCHAR(max) NULL,
    DateJoined: DATETIME NOT NULL
  )`;

  db.query(writersTableCreate, function (error, results, fields) {
    if (error){
      console.log("Cannot create Writers table.");
      throw error;
    } else {
      console.log("Writers table created");
    };
  });
 
});

export { db }


// close connection?
// db_connect.end();