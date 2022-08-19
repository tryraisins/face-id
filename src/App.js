import React from "react";
import ParticlesBackground from "./Components/Particles/Particles";
import "./App.css";
import Logo from "./Components/Logo/Logo";
import Camera from "./Components/Camera/Camera";
import "tachyons";
import Navigation from "./Components/Navigation/Navigation";
import SignIn from "./Components/Sign In/SignIn";
import Register from "./Components/Register/Register";
import { useState } from "react";
import { loadModels } from "./helpers/faceApi";
import { createFaLibrary } from "./helpers/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

createFaLibrary();
loadModels();
const App = () => {
  const [state, setState] = useState("signin");

  const stateUpdate = (newState) => {
    setState(newState);
  };

  return (
    <div className='App'>
      <Navigation changeState={stateUpdate} currentState={state} />
      <Logo />
      {state === "signin" ? (
        <>
          <ParticlesBackground />
          <SignIn changeState={stateUpdate} />
        </>
      ) : state === "signedin" ? (
        <div>
          <Camera />
        </div>
      ) : state === "register" ? (
        <>
          <ParticlesBackground />
          <Register changeState={stateUpdate} />
        </>
      ) : (
        `Unknown Error`
      )}
    </div>
  );
};

export default App;
