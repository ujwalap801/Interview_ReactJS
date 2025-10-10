import React, { useState } from 'react';
import './styles.css'

function MortgageCalculator() {
  const [amount, setAmount] = useState('');
  const [interest, setInterest] = useState('');
  const [term, setTerm] = useState('');

  const [result, setResult] = useState('');
  const [error, setError] = useState('');


  const handleCal = () => {
    const p = parseFloat(amount);
    const r = parseFloat(interest);
    const nYear = parseFloat(term);

    if (isNaN(p) || isNaN(r) || isNaN(nYear) || p < 0 || r <= 0 || nYear <= 0) {
      setError("Invalid input");
      return;


    }

    setError('');


    // Convert annual interest to monthly interest rate
    const monthlyRate = r / 12 / 100;
    const nMonths = nYear * 12;

    // Monthly payment formula
    const M = p * (monthlyRate * Math.pow(1 + monthlyRate, nMonths)) /
      (Math.pow(1 + monthlyRate, nMonths) - 1);


// .toFixed(n) converts a number to a string, rounded to n decimal places.

    // Here 2 means round to 2 decimal places(cents / paisa).
    setResult(M.toFixed(2));



  }
  return (
    <div>
      {/* Implement Mortgage Calculator logic here */}
      <h1>Mortgage Calculator</h1>
      <label htmlFor="amount">Loan Amount(INR): </label>
      <input id="amount" type='number' min="0" value={amount} onChange={(e)=>setAmount(e.target.value)}></input>


<div>
       <label htmlFor="interest" >Annual Interest Rate(%): </label>
      <input id="interest" value={interest} min="0" typer="number" onChange={(e)=>setInterest(e.target.value)}></input>

      </div>

      <div>

       <label htmlFor="Loan Term">Loan Term(Years): </label>
      <input id="Loan Term" min="0" typer="number" value={term} onChange={(e)=>setTerm(e.target.value)}></input>
</div>
      <button onClick={handleCal}>Calculate</button>
      {error && <p>{error}</p>}
      {result && <p aria-label="result">Monthly Payment: {result}</p>}
    </div>
  );
}

export default MortgageCalculator;