import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../store/actions/alert";
import { register } from "../../store/actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmedPassword: ""
  });

  const { name, email, password, confirmedPassword } = formData;

  const changeHandler = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const registerHandler = event => {
    event.preventDefault();
    if (password !== confirmedPassword) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create Your Account
      </p>
      <form className="form" onSubmit={registerHandler}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={changeHandler}
            value={name}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            value={email}
            onChange={changeHandler}
            placeholder="Email Address"
            name="email"
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={changeHandler}
            name="password"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmedPassword}
            onChange={changeHandler}
            name="confirmedPassword"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);
