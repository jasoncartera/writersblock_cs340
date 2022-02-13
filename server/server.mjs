'use strict';

import express from 'express';
import writers  from './db/writers_methods.mjs'
//import { selectAllWrtiers } from './db/writers_methods.mjs';

const app = express();
const PORT = 3000;


app.use(writers);


app.get("/*", (req, res) => {
  res.send("Hello World!");
});




app.listen(process.env.PORT || PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});