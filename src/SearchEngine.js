import React, { useState } from "react";
import Weather from "./Weather";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [textCity, setTextCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setTextCity(<Weather city={city} />);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      {textCity}
    </div>
  );
}