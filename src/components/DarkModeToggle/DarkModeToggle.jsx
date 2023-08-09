"use client";
import React, { useContext } from "react";
import DarkModeCss from "./DarkModeToggle.module.css";
import { ThemeContext } from "../../../context/ThemeContext";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className={DarkModeCss.container} onClick={toggle}>
      <div className={DarkModeCss.icon}>🌙</div>
      <div className={DarkModeCss.icon}>🔆</div>
      <div className={DarkModeCss.ball} />
      <div
        className={DarkModeCss.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;
