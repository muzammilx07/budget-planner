import './App.css'
import React from 'react';
import BudgetForm from './components/BudgetForm';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import FinancialSummary from './components/FinancialSummary';
import { BudgetProvider } from './context/BudgetContext';

function App() {
  return (
    <div className="container">
      <BudgetProvider>
        <div>
          <h1>Budget Planner</h1>
          <BudgetForm />
          <ExpenseForm />
          <FinancialSummary />
          <ExpenseList />
          
        </div>
      </BudgetProvider>
    </div>
  );
}

export default App;
