import React from "react";
import "./App.css";
import { UserProvider } from "./contexts/UserContext";
import LandingPage from "./components/dashboard/LandingPage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <LandingPage />
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
