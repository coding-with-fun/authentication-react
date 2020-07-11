import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { SignUpForm, Dashboard, SignInForm, Navigation } from "..";
import PageNotFound from "./404";
import { UserContext } from "../../contexts/UserContext";

export default function LandingPage() {
  const user = sessionStorage.getItem("userEmail");
  let userData = localStorage.getItem(user);
  // eslint-disable-next-line
  const { isValid } = useContext(UserContext);

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

            <Route path="/:string" render={() => <PageNotFound />} />
          </Switch>
        </div>
      </Switch>
    </div>
  );
}
