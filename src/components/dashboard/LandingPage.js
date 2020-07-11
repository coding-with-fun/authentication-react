import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { SignUpForm, Dashboard, SignInForm, Navigation } from "..";
import PageNotFound from "./404";

export default function LandingPage() {
  const user = sessionStorage.getItem("userEmail");
  let userData = localStorage.getItem(user);

  if (userData) {
    userData = JSON.parse(userData);
  } else {
    userData = { isValid: false };
  }

  return (
    <div>
      <Navigation isValid={userData.isValid} />

      <Switch>
        <div className="content-body">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Dashboard
                  userName={userData.name}
                  isValid={userData.isValid}
                />
              )}
            />

            <Route
              path="/signup"
              render={() =>
                !userData.isValid ? <SignUpForm /> : <Redirect to="/" />
              }
            />

            <Route
              path="/signin"
              render={() =>
                !userData.isValid ? <SignInForm /> : <Redirect to="/" />
              }
            />

            <Route path="/:string" component={PageNotFound} />
          </Switch>
        </div>
      </Switch>
    </div>
  );
}
