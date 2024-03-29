import React, { useContext, useState } from 'react';
import { BudgetContext } from '../context/BudgetContext';
import './BudgetForm.css';

const BudgetForm = () => {
  const { setBudget } = useContext(BudgetContext);
  const [budget, setLocalBudget] = useState('');

  const handleBudgetChange = (e) => {
    setLocalBudget(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBudget(parseFloat(budget));
  };

  return (
    <form onSubmit={handleSubmit} className="budget-form">
      <h2>Set Your Budget</h2>
      <div className="input-group">
        <input
          type="number"
          placeholder="Enter budget amount"
          value={budget}
          onChange={handleBudgetChange}
          className="budget-input"
        />
        <button type="submit" className="submit-button">Set Budget</button>
      </div>
    </form>
  );
};

export default BudgetForm;
