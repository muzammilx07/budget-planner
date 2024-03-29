import React, { useContext, useState } from 'react';
import { BudgetContext } from '../context/BudgetContext';
import './ExpenseForm.css'; // Import the CSS file

const ExpenseForm = () => {
  const { addExpense } = useContext(BudgetContext);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ name, amount: parseFloat(amount) });
    setName('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <h2>Add an Expense</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Expense name"
          value={name}
          onChange={handleNameChange}
          className="name-input"
        />
        <input
          type="number"
          placeholder="Expense amount"
          value={amount}
          onChange={handleAmountChange}
          className="amount-input"
        />
        <button type="submit" className="submit-button">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
