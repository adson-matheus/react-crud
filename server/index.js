const express = require('express');
const mysql = require('mysql');
const app = express();

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'movies_db',
})

app.get('/', (req, res) => {
    res.send('hello, br');
    // const insertMovie = "INSERT INTO movie_review (movie, review) VALUES ('Mad Max', '5 Oscars!');";
    // db.query(insertMovie, (err, result)=> {
    // })
});

app.listen(3001, () => {});