// import PropTypes from 'prop-types'
import React from "react";
import ".//NavBar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [currPage, setcurrPage] = useState("Home");

  return (
    // <div className="m-0 navbar">

    <nav
      className="navbar navbar-static-top p-0 user-select-none
                navbar-expand-lg bg-dark "
    >
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav w-100 d-flex justify-content-around">
          <li className="nav-item">
            <button data-text="Awesome" id="button" className={currPage !== "Home" ? "nav-link " : "nav-link text-primary"}
              to="/"
              onClick={() => setcurrPage("Home")}>
              <span className="actual-text">&nbsp;Home&nbsp;</span>
              <Link className="nav-link" to="/home">
                <span className="hover-text" aria-hidden="true">
                  &nbsp;Home&nbsp;
                </span>
              </Link>
            </button>
          </li>
          <li className="nav-item">
            <button
              data-text="Awesome"
              id="button"
              className={
                currPage !== "Teams"
                  ? "nav-link "
                  : "nav-link text-primary"
              }
              to="/teams"
              onClick={() => setcurrPage("Teams")}
            >
              <span className="actual-text">&nbsp;Teams&nbsp;</span>
              <Link className="nav-link" to="/teams">
                <span className="hover-text" aria-hidden="true">
                  &nbsp;Teams&nbsp;
                </span>
              </Link>
            </button>
          </li>
          <li className="nav-item">
            <button
              data-text="Awesome"
              id="button"
              className={
                currPage !== "Players" ? "nav-link " : "nav-link text-primary"
              }
              to="/"
              onClick={() => setcurrPage("Players")}
            >
              <span className="actual-text">&nbsp;Players&nbsp;</span>
              <Link className="nav-link" to="/players">
                <span className="hover-text" aria-hidden="true">
                  &nbsp;Players&nbsp;
                </span>
              </Link>
            </button>
          </li>
          <li className="nav-item">
            <button
              data-text="Awesome"
              id="button"
              className={
                currPage !== "Management" ? "nav-link " : "nav-link text-primary"
              }
              to="/management"
              onClick={() => setcurrPage("Management")}
            >
              <span className="actual-text">&nbsp;Management&nbsp;</span>
              <Link className="nav-link" to="/management">
                <span className="hover-text" aria-hidden="true">
                  &nbsp;Management&nbsp;
                </span>
              </Link>
            </button>
          </li>
          <li className="nav-item">
            <button
              data-text="Awesome"
              id="button"
              className={
                currPage !== "Venue" ? "nav-link " : "nav-link text-primary"
              }
              to="/venue"
              onClick={() => setcurrPage("Venue")}
            >
              <span className="actual-text">&nbsp;Venue&nbsp;</span>
              <Link className="nav-link" to="/venue">
                <span className="hover-text" aria-hidden="true">
                  &nbsp;Venue&nbsp;
                </span>
              </Link>
            </button>
          </li>
          <li className="nav-item">
            <button
              data-text="Awesome"
              id="button"
              className={
                currPage !== "Matches" ? "nav-link " : "nav-link text-primary"
              }
              to="/matches"
              onClick={() => setcurrPage("Matches")}
            >
              <span className="actual-text">&nbsp;Matches&nbsp;</span>
              <Link className="nav-link" to="Matches">
                <span className="hover-text" aria-hidden="true">
                  &nbsp;Matches&nbsp;
                </span>
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </nav>
    // </div>
  );
};

export default NavBar;
