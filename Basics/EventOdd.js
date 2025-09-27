import React, { useState } from "react";
import "./styles.css";

function EvenOrOddChecker() {
  const [input, setInput] = useState('');
  const [commit, setCommit] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleCheck = () => {
    setLoading(true);
    setCommit(""); // clear previous message

    setTimeout(() => {
      const num = parseInt(input, 10);

      if (isNaN(num) || input.trim() === "") {
        setCommit("Please enter a valid number.");
      } else if (num % 2 === 0) {
        setCommit(`The number ${num} is even.`);
      } else {
        setCommit(`The number ${num} is odd.`);
      }

      setLoading(false);
    }, 500);
  };

  return (
    <div className="even-odd-container">
      <h1 className="title">Even or Odd Checker</h1>

      <input
        type="text"
        placeholder="Enter a number"
        value={input}
        onChange={handleChange}
        data-testid="number-input"
        className="number-input"
      />

      <button
        onClick={handleCheck}
        data-testid="check-button"
        className="check-button"
      >
        Check
      </button>

      <div className="result-area" data-testid="result">
        <div className="result">
          {loading ? "Checking...." : (commit || "Results appear here")}
        </div>
      </div>
    </div>
  );
}

export default EvenOrOddChecker;
