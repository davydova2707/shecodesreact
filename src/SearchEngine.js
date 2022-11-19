import React from "react";
import Weather from "./Weather";

export default function SearchEngine() {
  return (
    <div>
      <Weather defaultCity="Kyiv" />
      <br />
      <span className="footer">
        <a href="https://github.com/davydova2707/shecodesreact" target="_blank" rel="noreferrer">Open-source code</a> by Olena
      </span>
    </div>
  );
}