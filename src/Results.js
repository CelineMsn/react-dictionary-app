import React from "react";
import "./Results.css";
import Phonetics from "./Phonetics";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="results">
        <section>
          <div className="button-container text-center">
            <a href="./#phonetics" className="btn jump-link">
              <i className="small">Jump to </i>
              <br /> Phonetics
            </a>
            <a href="./#definitions" className="btn jump-link">
              <i className="small">Jump to </i>
              <br />
              Definitions
            </a>
            <a href="./#images" className="btn jump-link">
              <i className="small">Jump to </i>
              <br />
              Images
            </a>
          </div>
        </section>
        <section>
          <h2 className="result-word" id="phonetics">
            {props.data.word}{" "}
          </h2>
          {props.data.phonetics.map(function (phonetic, index) {
            return (
              <div key={index} className="d-flex">
                <Phonetics data={phonetic} />
              </div>
            );
          })}
        </section>
        <div id="definitions">
          {props.data.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning data={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
