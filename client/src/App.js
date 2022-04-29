import './App.css';

function App() {
  return (
    <div className="App">
      <h1>CRUD</h1>
      <form method="POST">
        <div className="p-5">
          <div className="form-group mb-3">
            <label for="movie" className="col-sm-2 col-form-label">Movie Name:</label>
            <input type="text" className="form-control" id="movie"></input>
          </div>
          <div className="form-group mb-3">
            <label for="review">Review:</label>
            <textarea type="text" className="form-control" id="review" cols='20' rows="10"></textarea>
          </div>
        </div>
        <button className="btn btn-outline-success align-center">Enviar</button>
      </form>
    </div>
  );
}

export default App;
