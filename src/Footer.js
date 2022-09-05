import React from "react";
import "./Footer.css";
import portfolio from "./img/portfolio.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="row-fluid d-flex">
        <div className="portfolio col-5 footer-links text-start mt-3">
          <span>
            <i className="fa-solid fa-book"></i>
          </span>{" "}
          <a
            href="https://z-vizion.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
            title="View website /portfolio"
          >
            Portfolio
          </a>
        </div>
        <div className="col-2 react-logo">
          <i className="fa-brands fa-react react-logo"></i>
        </div>
        <div className="oscode col-5 footer-links text-end mt-3">
          <a
            href="https://github.com/CelineMsn"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
            title="View the source code on GitHub"
          >
            OS code
          </a>{" "}

          <span>
            <i className="fa-brands fa-github"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
