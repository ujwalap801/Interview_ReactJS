import React, { useState } from 'react';

function AgeCalculator() {
  const [date, setDate] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');

  const handleDate = () => {
    if (!date) {
      setError("Please select a date");
      setAge('');
      return;
    }

    const [year, month, day] = date.split('-').map(Number);
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    if (birthDate > today) {
      setError('Birthdate cannot be in the future');
      setAge('');
      return;
    }

    setError('');

    // Calculate age
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge(`${years} years, ${months} months, ${days} days`);
  };

  return (
    <div className="container">
      <h2 className="title">Age Calculator</h2>

      <label className="label" htmlFor="birthdate" data-testid="label-birthdate">
        Enter/Select a birthdate:
      </label>

      <input
        id="birthdate"
        data-testid="input-birthdate"
        type="date"
        className="input-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button className="btn-calc" data-testid="btn-calculate" onClick={handleDate}>
        Calculate Age
      </button>

      {error && <p className="error-msg" data-testid="error-msg">{error}</p>}
      {age && <p className="age-result" data-testid="age-result">{age}</p>}
    </div>
  );
}

export default AgeCalculator;
