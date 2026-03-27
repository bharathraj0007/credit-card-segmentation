const ResultCard = ({ result }) => {
  const labels = {
    0: "Low User",
    1: "Average User",
    2: "High Spender 🔥",
    3: "Risky User ⚠️",
  };

  return (
    <div>
      <h2>Predicted Cluster:</h2>

      {result === null ? (
        <p className="placeholder">No prediction yet</p>
      ) : (
        <>
          <h3>{result}</h3>   {/* ✅ THIS LINE IMPORTANT */}
          <p className="highlight">{labels[result]}</p>
        </>
      )}
    </div>
  );
};

export default ResultCard;  