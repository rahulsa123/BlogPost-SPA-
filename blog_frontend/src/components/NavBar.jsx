import React from "react";
import { Link, NavLink } from "react-router-dom";
import auth from "../services/authservices";
function NavBar(props) {
  return (
    <nav className="navbar  navbar-expand-lg navbar-dark bg-dark ">
      <Link className="navbar-brand ml-5" to="/">
        <strong>
          <i>BlogPost</i>
        </strong>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto ">
          {auth.getCurrentUserId() && (
            <>
              <li className="nav-item ">
                <NavLink className="nav-link" to="/profile">
                  profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/create/post">
                  New Post
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link" to="/logout">
                  logout
                </NavLink>
              </li>

              <li className="nav-item active">
                <div className="nav-link">
                  <b>{"@" + auth.getCurrentUserName()}</b>
                </div>
              </li>
            </>
          )}
          {!auth.getCurrentUserId() && (
            <>
              <li className="nav-item ">
                <NavLink className="nav-link" to="/login">
                  login
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
