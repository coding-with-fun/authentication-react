import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { SignUpForm, Dashboard, SignInForm, Navigation } from "./components";
import { UserContext } from "./contexts/UserContext";

export default function LandingPage() {
  const { inputEmail } = useContext(UserContext);

  let userData = localStorage.getItem(inputEmail);
  if (userData) {
    userData = JSON.parse(userData);
  } else {
    userData = { isValid: true };
  }

  return (
    <div>
      <Navigation isValid={userData.isValid} />

      <BrowserRouter>
        <div className="content-body">
          <Route
            exact
            path="/"
            render={(props) => (
              <Dashboard userName="Harsh" isValid={userData.isValid} />
            )}
          />
          <Switch>
            <Route path="/signup" component={SignUpForm} />
            <Route path="/signin" component={SignInForm} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
