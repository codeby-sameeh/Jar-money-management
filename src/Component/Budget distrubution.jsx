import React, { useState } from 'react';

function BudgetDistribution() {
  // State to store the input value
  const [amount, setAmount] = useState(0);

  // Function to handle the input change
  const handleInputChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div>
        <div className="jar-box-first">
      <h2>Budget Distribution</h2>
      <div className="jar-box-first-inner">

      <label>Enter your total amount: </label>
      <br />
      <input 
        type="number" 
        value={amount} 
        onChange={handleInputChange} 
        placeholder="Enter amount" 
      />
      </div>
        </div>

      <div className='jar-box'>
        <div className='items'>
          <h3>Necessities (50%):</h3>
          <p>{(amount * 0.50).toFixed(2)} </p>
        </div>
        <div className='items'>
          <h3>Financial Freedom Account (10%):</h3>
          <p>{(amount * 0.10).toFixed(2)} </p>
        </div>
        <div className='items'>
          <h3>Long Term Savings (10%):</h3>
          <p>{(amount * 0.10).toFixed(2)} </p>
        </div>
        <div className='items'>
          <h3>Education (10%):</h3>
          <p>{(amount * 0.10).toFixed(2)} </p>
        </div>
        <div className='items'>
          <h3>Play (10%):</h3>
          <p>{(amount * 0.10).toFixed(2)} </p>
        </div>
        <div className='items'>
          <h3>Give (10%):</h3>
          <p>{(amount * 0.10).toFixed(2)} </p>
        </div>
      </div>
    </div>
  );
}

export default BudgetDistribution;
