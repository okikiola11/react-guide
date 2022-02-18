import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  { id: 'el1', title: 'Car Insurance', amount: 235.5, date: new Date(2020, 4, 13) },
  { id: 'el2', title: 'Loan Charges', amount: 55.5, date: new Date(2019, 4, 13) },
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
    
  }

  return (
    <div className="">
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
    </div>
  );
};

export default App;
