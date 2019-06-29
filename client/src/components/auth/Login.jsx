import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const changeHandler = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const loginHandler = event => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user" /> Sign Into Your Account
      </p>
      <form className="form" onSubmit={loginHandler}>
        <div className="form-group">
          <input
            type="email"
            value={email}
            onChange={changeHandler}
            placeholder="Email Address"
            name="email"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={changeHandler}
            name="password"
            minLength="6"
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </>
  );
};

export default Login;
