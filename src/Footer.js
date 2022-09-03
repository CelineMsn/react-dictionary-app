import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <section className="footer">
      <div className="row-fluid d-flex">
        <div className="col-5 footer-links text-start ps-2">
          <span>
            <i className="fa-solid fa-star"></i>{" "}
          </span>
          <a
            href="https://z-vizion.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
            title="View website /portfolio"
          >
            Portfolio
          </a>{" "}
        </div>
        <div className="col-2 react-logo-container text-center">
          <i className="fa-brands fa-react react-logo"></i>
        </div>
        <div className="col-5 footer-links text-end pe-2">
          <span>
            <i className="fa-brands fa-github"></i>{" "}
          </span>
          <a
            href="https://github.com/CelineMsn"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
            title="View the source code on GitHub"
          >
            OS code
          </a>{" "}
          by CM
        </div>
      </div>
    </section>
  );
}
