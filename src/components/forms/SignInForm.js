import React from "react";
import "./Form.css";

export default function SignInForm() {
  return (
    <div className="text-center container">
      <form className="form-auth">
        <img
          className="mb-4"
          src="https://image.flaticon.com/icons/png/512/61/61457.png"
          alt=""
          width="72"
          height="72"
        />
        <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
          autofocus
        />
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
        />
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
}
