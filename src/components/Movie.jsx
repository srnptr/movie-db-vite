import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/use-fetch";
import classes from "./Movie.module.css";

const Movie = () => {
  const { id } = useParams();
  const url = `&i=${id}&plot=full`;
  const noPoster =
    "https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg";

  const { isLoading, error, data: movie } = useFetch(url);

  if (isLoading) return <div className="loading"></div>;
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          Back to Movies
        </Link>
      </div>
    );
  }

  const {
    Poster: poster,
    Title: title,
    Year: year,
    Runtime: runtime,
    Genre: genre,
    Director: director,
    Writer: writer,
    Actors: actors,
    Plot: plot,
  } = movie;

  return (
    <section className={classes["single-movie"]}>
      <img src={poster ? poster : noPoster} alt={`${title} poster`} />
      <div className={classes["single-movie-info"]}>
        <h2>{title}</h2>
        <h4>
          {year} - {runtime}
        </h4>
        <h5>{genre}</h5>
        <h6>Director: {director}</h6>
        <h6> Writers: {writer}</h6>
        <h6>Actors: {actors}</h6>
        <p>{plot}</p>
        <Link to="/" className="btn">
          Back to Movies
        </Link>
      </div>
    </section>
  );
};

export default Movie;
