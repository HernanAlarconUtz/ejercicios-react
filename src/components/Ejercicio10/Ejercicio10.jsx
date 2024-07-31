import { useEffect, useState } from "react";
import FormExercise10 from "./FormExercise10";
import MoviesCards from "./MoviesCards";

const Ejercicio10 = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem("movies")) || [];
    setMovies(storedMovies);
  }, []);

  const addMovies = (newMovies) => {
    const updateMovies = [...movies, newMovies];
    setMovies(updateMovies);
    localStorage.setItem("movies", JSON.stringify(updateMovies));
  };

  return (
    <>
      <section className="container">
        <FormExercise10 addMovies={addMovies} />
        <MoviesCards movies={movies} />
      </section>
    </>
  );
};
export default Ejercicio10;
