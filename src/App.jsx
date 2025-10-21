// App.jsx
import React, { useState, useEffect } from "react";
import Transition from "./components/Transition/Transition";
import AboutApp from "../src/components/aboutApp/AboutApp";
import Login from "../src/components/Login";
// import InProcess from "./pages/InProcess";

const App = () => {
  const [step, setStep] = useState(0); // 0 = splash, 1 = login, 2 = main app

  const handleNextFromSplash = () => setStep(1);  // move to Login immediately
  const handleLogin = () => setStep(2);           // move to Main App

  return (
    <div className="w-screen h-screen overflow-hidden select-none">
      {step === 0 && <AboutApp letStart={handleNextFromSplash} />}
      {step === 1 && <Login later={handleLogin} />}
      {step === 2 && <Transition />} {/* main app */}
    </div>
  );
};

export default App;
