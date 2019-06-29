import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../store/actions/auth";

const Navbar = ({ logout, auth: { isAuthenticated, loading } }) => {
  const authLinks = (
    <ul>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />
          {"  "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <a href="#!">Developers</a>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <NavLink to="/">
          <i className="fas fa-code" /> DevConnector
        </NavLink>
      </h1>
      {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
    </nav>
  );
};
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
