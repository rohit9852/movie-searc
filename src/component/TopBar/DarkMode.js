import React from "react";
import useDarkMode from "use-dark-mode";
import Toggle from "./Toggles";
import './DarkMode.css';

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className="dark-mode-toggle">
      <Toggle onChange={darkMode.toggle} />
    </div>
  );
};

export default DarkModeToggle;
