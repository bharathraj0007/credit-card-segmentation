import React, { useState } from "react";
import axios from "axios";

const Form = ({ setResult, setInputData }) => {
  const [data, setData] = useState({
    balance: "",
    purchases: "",
    cash: "",
    limit: "",
    payments: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };


const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    balance: Number(data.balance),
    purchases: Number(data.purchases),
    cash: Number(data.cash),
    limit: Number(data.limit),
    payments: Number(data.payments),
  };

  try {
    const res = await axios.post("http://127.0.0.1:5000/predict", payload);

    console.log("API RESPONSE:", res.data); // 👈 DEBUG

    setResult(res.data.cluster);  // ✅ IMPORTANT

    setInputData([
      { name: "Balance", value: payload.balance },
      { name: "Purchases", value: payload.purchases },
      { name: "Cash", value: payload.cash },
      { name: "Limit", value: payload.limit },
      { name: "Payments", value: payload.payments },
    ]);

  } catch (error) {
    console.error("Error:", error);
  }
};

  return (
    <div className="card">
      <input name="balance" placeholder="Balance" onChange={handleChange} />
      <input name="purchases" placeholder="Purchases" onChange={handleChange} />
      <input name="cash" placeholder="Cash Advance" onChange={handleChange} />
      <input name="limit" placeholder="Credit Limit" onChange={handleChange} />
      <input name="payments" placeholder="Payments" onChange={handleChange} />

      <button onClick={handleSubmit}>Predict</button>
    </div>
  );
};

export default Form;