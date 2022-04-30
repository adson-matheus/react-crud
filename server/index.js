const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'movies_db',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/get', (req, res) => {
    const selectAllMovies = "SELECT * FROM movie_review";
    db.query(selectAllMovies, (err, result) => {res.send(result);})
})

app.post('/api/insert', (req, res) => {
    const movieName = req.body.movieName
    const movieReview = req.body.movieReview
    const insertMovie = "INSERT INTO movie_review (movie, review) VALUES (?,?);";
    db.query(insertMovie, [movieName, movieReview], (err, result) => {console.log(result)})
})


app.listen(3001, () => {});