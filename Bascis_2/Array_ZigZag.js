import React, { useState } from "react";

const ZigzagString = () => {

    const [input, setInput] = useState("");

  const [result, setResult] = useState("");

  const zigJoin = (arr) => {
    return arr.map((str, i) => (i % 2 == 0 ? str : str.split("").reverse().join(""))).join("");

  }

  const handleSubmit = () =>
  {
    if (!input.trim()) return;
    const arr = input.split(',').map((s) => s.trim());
    setResult(zigJoin(arr));
  }
  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Enter strings like one,two,three"
        data-testid="input-box"
        onChange ={(e)=>setInput(e.target.value)}
      />
      <button  data-testid="submit-button" onClick={handleSubmit}>
        Submit
      </button>
      <p data-testid="output-result">Output: {result}</p>
    </div>
  );
};

export default ZigzagString;
