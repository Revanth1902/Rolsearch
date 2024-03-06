import React, { useState } from "react";
import "./GoogleSearch.css";

const GoogleSearch = () => {
  return (
    <div className="custom-search-container">
      <div className="custom-header">
        <img
          src="https://rolmusic.vercel.app/ROLLOGO.png"
          alt="ROL Logo"
          className="custom-logo"
        />
        <p className="custom-paragraph">Search now for whatever you need!</p>
      </div>
      <div className="gcse-search"></div>
    </div>
  );
};

export default GoogleSearch;
