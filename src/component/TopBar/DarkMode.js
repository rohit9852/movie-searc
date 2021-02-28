import React from "react";
import useDarkMode from "use-dark-mode";
import Toggle from "./Toggles";
import './DarkMode.css';

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <span className="dark-mode-toggle">
      <Toggle onChange={darkMode.toggle} />
    </span>
  );
};

export default DarkModeToggle;
