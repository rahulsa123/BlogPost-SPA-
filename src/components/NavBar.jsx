import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar(props) {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark ">
      <Link className="navbar-brand ml-5" to="/">
        BlogPost
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
          <li className="nav-item active">
            <NavLink className="nav-link" to="">
              profile
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="">
              New Post
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="">
              logout
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="">
              login
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="">
              Register
            </NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search Post"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
