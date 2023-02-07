import React from "react";
import { Link } from "react-router-dom";
import classes from "./Error.module.css";

const Error = () => {
  return (
    <section className={`section ${classes["error-page"]}`}>
      <div className={classes["error-container"]}>
        <h2>Oops! It's A Dead End.</h2>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
