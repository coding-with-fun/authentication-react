import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { SignInForm, SignUpForm, Dashboard, Navbar } from "./components";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Navbar />
        <BrowserRouter>
          <div className="content-body">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/signin" component={SignInForm} />
              <Route path="/signup" component={SignUpForm} />
            </Switch>
          </div>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
