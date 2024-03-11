import HighScore from "../HighScore/HighScore.jsx";
import "./App.css";
import allCountryScores from "./scores.js";

function App() {
  return (
    <>
      <div>
        <h1>High Scores per Country </h1>
        {allCountryScores.map((country, i) => {
          return (
            <HighScore key={i} countryName ={country.name} scores={country.scores} />
          );
        })}
      </div>
    </>
  );
}

export default App;
