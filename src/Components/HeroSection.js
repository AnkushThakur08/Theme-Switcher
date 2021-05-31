import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Color";

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <div
      style={{
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <h1 >ThemeToggler using Context API</h1>
      <p >This is a Nice Paragraph</p>
      <button
        style={{
          backgroundColor: "#26ae60",
          padding: "10px 150px",
          fontSize: "20px",
          color: "#FFF",
          border: `${currentTheme.border}`,
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default HeroSection;
