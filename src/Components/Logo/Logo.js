import React from "react";

import logo from "./face-id.png";
import "./Logo.css";
const Logo = () => {
  return (
    <div className=' ma2 mb4-l'>
      <img className='imageSize' src={logo} alt='Logo' />{" "}
    </div>
  );
};

export default Logo;
