import React, { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';
import './FinancialSummary.css'; // Import the CSS file

const FinancialSummary = () => {
  const { budget, expenses } = useContext(BudgetContext);
  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const remainingBudget = budget - totalExpenses;

  return (
    <div className="financial-summary">
      <h2>Financial Summary</h2>
      <div className="summary">
        <p>Total Budget: ${budget}</p>
        <p>Total Expenses: ${totalExpenses}</p>
        <p>Remaining Budget: ${remainingBudget}</p>
      </div>
    </div>
  );
};

export default FinancialSummary;
