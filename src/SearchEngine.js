import React from "react";
import Weather from "./Weather";

export default function SearchEngine() {
  return (
    <div>
      <Weather defaultCity="Kyiv" />
      <br />
      <span className="footer">
        This project was coded by <a href="https://www.linkedin.com/in/davydovaolena" target="_blank" rel="noreferrer">Olena Davydova</a> and is <a href="https://github.com/shecodesio/dictionary" target="_blank" rel="noreferrer">open-sourced</a> on <a href="https://davydovaweather.netlify.app/" target="_blank" rel="noreferrer">Netlify</a>
      </span>
    </div>
  );
}