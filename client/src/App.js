import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {
  const [movieName, setMovieName] = useState('');  
  const [movieReview, setMovieReview] = useState('');
  const [movieList, setMovieList] = useState('');

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setMovieList(response.data);
    });
  });

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", 
      {
        movieName: movieName,
        movieReview: movieReview
      }).then(() => {
        alert('Enviado');
      });
  };
  return (
    <div className="App">
      <h1>CRUD</h1>
      <form method="POST">
        <div className="p-5">
          <div className="form-group mb-3">
            <label for="movie" className="col-sm-2 col-form-label">Movie Name:</label>
            <input
              type="text"
              className="form-control"
              id="movie"
              onChange={(e) => {
                setMovieName(e.target.value);
              }}>
            </input>
          </div>
          <div className="form-group mb-3">
            <label for="review">Review:</label>
            <textarea
              type="text"
              className="form-control"
              id="review"
              cols="20"
              rows="10"
              onChange={(e) => {
                setMovieReview(e.target.value);
              }}>
            </textarea>
          </div>
        </div>
        <button className="btn btn-outline-success align-center" onClick={submitReview}>Enviar</button>
      </form>
    </div>
  );
}

export default App;
