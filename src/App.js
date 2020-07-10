import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Navbar, SignInForm, SignUpForm } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <div className="content-body">
          <Switch>
            <Route path="/signin" component={SignInForm} />
            <Route path="/signup" component={SignUpForm} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
