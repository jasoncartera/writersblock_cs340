'use strict';

import express from 'express';

const app = express();
const PORT = 3000;

app.get("/*", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});