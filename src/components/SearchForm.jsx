import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../store/context";
import classes from "./SearchForm.module.css";

const SearchForm = () => {
  const { error, setQuery } = useGlobalContext();
  const [localQuery, setLocalQuery] = useState("batman");

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(localQuery);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setQuery(localQuery);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [localQuery, setQuery]);

  return (
    <form className={classes["search-form"]} onSubmit={handleSubmit}>
      <h2>Search Movies</h2>
      <input
        className={classes["form-input"]}
        type="text"
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
      />
      {error.show && <div className={classes.error}>{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
