import React, { useState } from "react";
import Form from "./components/Form";
import ResultCard from "./components/ResultCard";
import SegmentInfo from "./components/SegmentInfo";
import Chart from "./components/Chart";
import "./index.css";

function App() {
  const [result, setResult] = useState(null);
  const [inputData, setInputData] = useState(null);

  return (
    <div className="container">
      <h1>Credit Card Segmentation</h1>

      <div className="layout">
        
        {/* LEFT SIDE */}
        <div className="left">
          <Form setResult={setResult} setInputData={setInputData} />
          <SegmentInfo result={result} /> {/* ✅ MOVED HERE */}
        </div>

        {/* RIGHT SIDE */}
        <div className="right">
          <div className="big-card-wrapper">

            <div className="inner-card">
              <ResultCard result={result} />
            </div>

            <div className="inner-card">
              <Chart data={inputData} />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default App;