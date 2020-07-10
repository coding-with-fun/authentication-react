import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { SignUpForm, Dashboard, SignInForm, Navigation } from "..";

export default function LandingPage() {
  let userData = localStorage.getItem("userData");

  if (userData) {
    userData = JSON.parse(userData);
  } else {
    userData = { isValid: false };
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
              <Dashboard
                userName={userData.name}
                isValid={userData.isValid}
              />
            )}
          />
          {userData.isValid ? null : (
            <Switch>
              <Route path="/signup" component={SignUpForm} />
              <Route path="/signin" component={SignInForm} />
            </Switch>
          )}
        </div>
      </BrowserRouter>
    </div>
  );
}
