import React from "react";
import "./App.css";
import { UserProvider } from "./contexts/UserContext";
import LandingPage from "./components/dashboard/LandingPage";

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
