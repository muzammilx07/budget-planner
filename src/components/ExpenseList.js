import React, { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';
import './ExpenseList.css'; // Import the CSS file

const ExpenseList = () => {
  const { expenses } = useContext(BudgetContext);

  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      <ul className="list">
        {expenses.map((expense, index) => (
          <li key={index} className="list-item">
            <div className="card">
            {expense.name}: ${expense.amount}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
