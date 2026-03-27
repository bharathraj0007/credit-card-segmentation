const SegmentInfo = ({ result }) => {
  const descriptions = {
    0: "Low activity customer with minimal usage.",
    1: "Moderate usage with balanced spending.",
    2: "High purchases and payments, frequent usage.",
    3: "Potential risk due to high credit usage.",
  };

  return (
    <div className="card">
      <h3>🚀 Segment Details</h3>

      {result === null ? (
        <p className="placeholder">
          Enter customer data to see segment details
        </p>
      ) : (
        <p>{descriptions[result]}</p>   
      )}
    </div>
  );
};

export default SegmentInfo;