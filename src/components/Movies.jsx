import React from "react";
import { useGlobalContext } from "../store/context";
import { Link } from "react-router-dom";
import classes from "./Movies.module.css";

/* prettier-ignore */
const url = "https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg"

const Movies = () => {
  const { movies, isLoading } = useGlobalContext();

  if (isLoading) return <div className="loading"></div>;

  return (
    <section className={classes.movies}>
      {movies.map((movie) => {
        const {
          imdbID: id,
          Poster: poster,
          Title: title,
          Type: type,
          Year: year,
        } = movie;
        return (
          <Link to={`movies/${id}`} className={classes.movie} key={id}>
            <article>
              <img
                src={poster === "N/A" ? url : poster}
                alt={`${title} release poster`}
              />
              <div className={classes["movie-info"]}>
                <h4 className={classes.title}>{title}</h4>
                <h5>{type}</h5>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
