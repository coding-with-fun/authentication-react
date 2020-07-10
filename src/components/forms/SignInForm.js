import React, { useContext } from "react";
import "./Form.css";
import { UserContext } from "../../contexts/UserContext";

export default function SignInForm() {
  const { setUserEmail, setUserPassword, validate } = useContext(UserContext);

  return (
    <div className="text-center container">
      <form action="/" className="form-auth" onSubmit={validate}>
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
          onChange={(e) => setUserEmail(e.target.value)}
          required
          autoFocus
        />
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          onChange={(e) => setUserPassword(e.target.value)}
          required
        />
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
}
