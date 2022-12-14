import React from "react";
import "./Results.css";
import Phonetics from "./Phonetics";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="results">
        <section className="section-box-table">
          <div className="button-container text-center">
            <a href="./#phonetics" className="btn jump-link">
              Phonetics
            </a>
            <a href="./#definitions" className="btn jump-link">
              Definitions
            </a>
            <a href="./#images" className="btn jump-link">
              Images
            </a>
          </div>
        </section>
        <section className="section-box">
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
        <div id="definitions" className="section-box">
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
    return (
      <div className="wordplay">
        <lottie-player
          src="https://assets5.lottiefiles.com/packages/lf20_my8voqwy.json"
          speed="0.5"
          id="animation"
          loop
          autoplay
        ></lottie-player>
      </div>
    );
  }
}
