// Cannot GET / error in Node.js and Express.js

import express from 'express';

// 👇️ If you use CommonJS
// const express = require('express')

const app = express();

app.get('/', (req, res) => {
  res.send('bobbyhadz.com');
});

app.get('/books', (req, res) => {
  res.send([
    {id: 1, title: 'book 1'},
    {id: 2, title: 'book 2'},
  ]);
});

// 👇️ this route must come last
app.get('*', (req, res) => {
  res.send('404 Page Not Found');
});

const port = 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
