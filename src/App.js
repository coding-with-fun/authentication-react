import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { SignInForm, SignUpForm, Dashboard, Navbar } from "./components";
import { UserProvider, UserContext } from "./contexts/UserContext";
import LandingPage from "./LandingPage";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <LandingPage />
      </UserProvider>
    </div>
  );
}

export default App;
