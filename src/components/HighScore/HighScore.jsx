import "./HighScore.css";

const HighScore = ({ countryName, scores }) => {
  return (
    <>
      <div>
        <h2>High Scores: {countryName}</h2>
        <div>
          <table>
            <tbody>
              {scores.map((score, i) => {
                return (
                  <tr key={i}>
                    <td>{score.n}</td>
                    <td>{score.s}</td>
                  </tr>
                );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default HighScore;