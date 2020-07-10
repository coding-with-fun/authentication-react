import React, { useContext } from "react";
import "./Form.css";
import { UserContext } from "../../contexts/UserContext";

export default function SignUpForm() {
  const {
    saveValues,
    setName,
    setUserName,
    setInputEmail,
    setPassword,
    setConfirmPassword,
  } = useContext(UserContext);

  return (
    <div className="text-center container">
      <form action="/" className="form-auth" onSubmit={saveValues}>
        <img
          className="mb-4"
          src="https://image.flaticon.com/icons/png/512/61/61457.png"
          alt=""
          width="72"
          height="72"
        />
        <h1 className="h3 mb-3 font-weight-normal">Sign up</h1>
        <input
          type="text"
          id="name"
          className="form-control"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required
          autoFocus
        />
        <input
          type="text"
          id="username"
          className="form-control"
          placeholder="User Name"
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          onChange={(e) => setInputEmail(e.target.value)}
          required
        />
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          id="confirmPassword"
          className="form-control"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
}
