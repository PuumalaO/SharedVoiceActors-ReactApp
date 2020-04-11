import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import PropagateLoader from "react-spinners/PropagateLoader";
import "../styles/search.css";

const Search = (props) => {
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Enter") handleSubmit();
    });
    return () => {
      window.removeEventListener("keydown");
    };
  }, []);

  const handleSubmit = (event) => {
    setSearching(true);
    if (event) event.preventDefault();
    fetch("https://api.jikan.moe/v3/search/anime?q=" + search)
      .then((res) => res.json())
      .then((result) => {
        setSearching(false);
        props.callback(result.results);
      });
  };

  const handleChange = (event) => {
    event.persist();
    setSearch(event.target.value);
  };

  return (
    <div className={"searchContainer"}>
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <div className="rowContainer">
            <input
              id={"search"}
              type="search"
              placeholder="Search for a title"
              value={search}
              onChange={handleChange}
            />
            {props.disable ? (
              <Button id="searchButton" disabled type="submit">
                Search
              </Button>
            ) : (
              <Button type="submit">Search</Button>
            )}
          </div>
        </Form.Row>
      </Form>

      {searching ? (
        <div>
          <div className="loading">
            <PropagateLoader color={"black"} />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Search;
