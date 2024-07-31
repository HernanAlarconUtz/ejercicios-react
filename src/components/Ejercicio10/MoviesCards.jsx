import PropTypes from "prop-types";

const MoviesCards = (props) => {
  const { movies } = props;

  return (
    <div className="mt-3">
      {movies.length === 0 ? (
        <div className="alert alert-info">No hay citas</div>
      ) : (
        <div className="row">
          {movies.map((movie, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card shadow">
                <div className="card-body">
                  <p className="card-text">
                    Titulo de la pelicula: {movie.moviename}
                  </p>
                  <p className="card-text">
                    Descripcion: {movie.moviedescription}
                  </p>
                  <p className="card-text">
                    Genero: {movie.genre}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default MoviesCards;

MoviesCards.propTypes = {
  movies: PropTypes.array.isRequired,
};
