import React, { useState, useEffect } from "react";
import Transition from "./components/Transition/Transition";
import AboutApp from "../src/components/aboutApp/AboutApp";
import Login from "../src/components/Login";
// import InProcess from "./pages/InProcess";

const App = () => {
  const [step, setStep] = useState(0)

  const letStart = () => setStep(1)
  const login = () => setStep(2)

  return (
    <div className="w-screen h-screen overflow-hidden select-none">
      {step === 0 && <AboutApp letStart={letStart} />}
      {step === 1 && <Login later={login} />}
      {step === 2 && <Transition />}
    </div>
  );
};

export default App;
