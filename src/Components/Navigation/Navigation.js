import React from "react";

const Navigation = ({ changeState, currentState }) => {
  return (
    <header className='fixed-l w-100 '>
      <nav className='db dt w-100 border-box pa3 '>
        <div className='db dtc v-mid w-100  tr'>
          {currentState === "signin" ? (
            <p
              className='link dim dark-gray f3 lh-copy fw7 dib pointer grow'
              onClick={() => changeState("register")}
            >
              Register
            </p>
          ) : currentState === "register" ? (
            <p
              className='link dim dark-gray f3 lh-copy fw7 dib pointer grow'
              onClick={() => changeState("signin")}
            >
              Sign In
            </p>
          ) : currentState === "signedin" ? (
            <p
              className='link dim dark-gray f3 lh-copy fw7 dib pointer grow'
              onClick={() => changeState("signin")}
            >
              Sign Out
            </p>
          ) : (
            `Unknown Error`
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
