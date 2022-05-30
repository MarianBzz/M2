import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("");
    }}>
    <div className="search-box">
      <input
        className="search-text"
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <a className="search-btn" href="#">
        <i class="fa-solid fa-magnifying-glass"></i>
      </a>
    </div>
    </form>
  );
}
 