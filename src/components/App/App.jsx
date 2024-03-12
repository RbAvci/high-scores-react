import HighScore from "../HighScore/HighScore.jsx";
import SortButton from "../SortButton/SortButton.jsx";
import "./App.css";
import allCountryScores from "./scores.js";
import React, { useState } from "react";

function App() {
  allCountryScores.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

  const [isAscending, setAscending] = useState(false);
  const handleToggleSort = () => {
    setAscending(!isAscending);
  };

  return (
    <>
      <div>
        <SortButton toggleSort={handleToggleSort} />
        <h1>High Scores per Country </h1>
        {allCountryScores.map((country, i) => {
          return <HighScore key={i} countryName={country.name} scores={country.scores} isAscending={isAscending} />;
        })}
      </div>
    </>
  );
}

export default App;
