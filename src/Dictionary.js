import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null); // ("")
  let [results, setResults] = useState(null); // ({})

  function handleResponse(response) {
    //console.log(response.data[0]);
    setResults(response.data[0]);
    //console.log(response.data[0].meanings[0].definitions[0].definition);
  }

  function searchword(event) {
    event.preventDefault();
    //alert(`Searching for ${keyword} definition`);

    //documentation https://api.dictionaryapi.dev;
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    //console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    //console.log(event.target.value);
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={searchword}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
      </form>
      <Results results={results} />
    </div>
  );
}

//https://api.dictionaryapi.dev/api/v2/entries/en/<word>
