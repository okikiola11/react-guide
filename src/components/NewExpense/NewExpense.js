import React from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpense = (enteredExpenseData) => {
    const saveExpense = {
        ...enteredExpenseData,
        id: Math.random().toString(),
    }

    props.onAddExpense(saveExpense);
  }

  return (
      <div className='new-expense'>
          <ExpenseForm onSaveExpenseData={saveExpense}/>
      </div>
  );
};

export default NewExpense;
