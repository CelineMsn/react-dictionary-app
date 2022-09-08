import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

//https://api.dictionaryapi.dev/api/v2/entries/en/<word>

export default function Dictionary() {
  const [searchTerm, setSearchTerm] = useState(null); // ("")
  const [results, setResults] = useState(null); // ({})
  const [photos, setPhotos] = useState(null);

  //documentation https://api.dictionaryapi.dev;
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`;
  //console.log(apiUrl);

  function handleSearchTerm(event) {
    setSearchTerm(event.target.value);
    //alert(`Searching for ${searchTerm} definition`)
  }

  function searchDefinitions(event) {
    event.preventDefault();
    axios.get(apiUrl).then(handleDictionaryResponse).catch(errorFunction);
  }

  function errorFunction() {
    alert(
      "Sorry but it seems that thee word entered is not recognised. Please check the spelling and try again."
    );
  }

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
    searchImages();
    //console.log(response.data[0]);
    //console.log(response.data[0].meanings[0].definitions[0].definition);
  }

  function searchImages() {
    const pexelsApiKey =
      "563492ad6f917000010000014473ccdcb0a04c2b8fd9d0a62da00e8c";
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${searchTerm}&per_page=6`;
    axios.get(pexelsApiUrl, { headers }).then(handlePexelsResponse);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  return (
    <div className="dictionary mb-3 mt-5 pt-5">
      <section className="text-center">
        <h1 className="text-center mt-5 mb-5">What are you looking for?</h1>
        <form onSubmit={searchDefinitions} className="form mb-5">
          <input
            className="search-field"
            type="search"
            autoFocus={true}
            placeholder="Enter a word to search"
            onChange={handleSearchTerm}
          />
          <br />
          <button className="mt-4 btn button search-button" type="submit">
            <i className="fa-solid fa-magnifying-glass"></i> Search
          </button>
        </form>
      </section>

      <Results data={results} />
      <Photos data={photos} />
    </div>
  );
}
