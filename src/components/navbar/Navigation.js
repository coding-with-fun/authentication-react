import React, { useContext } from "react";
import "./Navigation.css";
import { UserContext } from "../../contexts/UserContext";
import { useHistory } from "react-router-dom";

export default function Navbar({ isValid }) {
  const { logOut } = useContext(UserContext);

  const history = useHistory();

  const GoTo = (path) => {
    history.push(path)
  }

  return (
    <div className="navigation">
      {/* Fixed navbar */}
      <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
        <div className="navbar-brand nav-logo" onClick={() => GoTo(`/`)}>
          SoftVan
        </div>
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
                <div className="btn btn-outline-light" onClick={() => GoTo(`signin`)}>
                  Sign In
                </div>
                <div className="btn btn-outline-light" onClick={() => GoTo(`signup`)}>
                  Sign Up
                </div>
              </>
            ) : (
              <a
                className="btn btn-outline-light"
                href="/"
                onClick={(e) => logOut(e)}
              >
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
            <a
              href="https://github.com/harsh2124/authentication-react"
              target="blank"
            >
              <b> Harsh Patel</b>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
