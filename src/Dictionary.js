import React from "react";
import "./Dictionary.css";

export default function Dictionary() {

function searchword(event){
    event.preventDefault();
    alert("Searching...");
}




  return (
  <div className="Dictionary">
    <form onSubmit={searchword}>
        <input type="search" autoFocus={true} />


    </form>
  </div> 
  );
}
