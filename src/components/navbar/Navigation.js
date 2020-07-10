import React from "react";
import "./Navigation.css";

export default function Navbar({ isValid }) {
  return (
    <div className="navigation">
      {/* Fixed navbar */}
      <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand nav-logo" href="/">
          Unspoken Words
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-row-reverse nav-links"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            {!isValid ? (
              <>
                <a className="btn btn-outline-light" href="/signin">
                  Sign In
                </a>
                <a className="btn btn-outline-light" href="/signup">
                  Sign Up
                </a>
              </>
            ) : (
              <a className="btn btn-outline-light" href="/">
                Logout
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* Begin page content */}
      <div className="content-body">
        <div className="container"></div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <span className="text-muted">
            © 2020 Copyright:
            <a href="https://github.com/harsh2124/blog-app" target="blank">
              <b> Harsh Patel</b>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
