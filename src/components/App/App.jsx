import "./App.css";
import allCountryScores from "./scores.js";

function App() {
  return (
    <>
      <div>{allCountryScores[0].name}</div>
    </>
  );
}

export default App;
