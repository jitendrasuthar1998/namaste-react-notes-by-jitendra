import React, { useState } from 'react';

const ExpenseTracker = () => {
  // store expenses in an array

  const [expenses, setExpenses] = useState([
    { name: 'Stationary', amount: 1000 },
    { name: 'Library', amount: 1400 },
    { name: 'Mobile', amount: 1500 },
    { name: 'Bus', amount: 1050 },
    { name: 'Bus', amount: 1050 },
  ]);

  const [expense, setExpense] = useState({ name: '', amount: 0 });

  const handleOnChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };
  /*
    1. take input from user like expense name and value
2. on clicking on submit button, value will come into a table, table will have headers like expense name and value
    */

  const handleSubmit = (e) => {
    e.preventDefault();
    let newExpense = {name: expense.name, amount: expense.amount}
    setExpenses([...expenses, newExpense])
    setExpense({name:"",amount:0})
  };

  const totalExpense = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Expense Tracker</h1>

      <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column"}}>
        <label>
          Expense Name :{' '}
          <input
            type='text'
            name='name'
            value={expense.name}
            onChange={handleOnChange}
          />
        </label>
        <label>
          Expense Amount :{' '}
          <input
            type='number'
            name='amount'
            value={expense.amount}
            onChange={handleOnChange}
          />
        </label>
        <button type='submit'>Submit</button>
      </form>

      <table>
        <tr>
          <th>Expense Name</th>
          <th>Amount</th>
        </tr>
        {expenses.map((exp, i) => (
          <tr key={i + exp.name}>
            <td>{exp.name}</td>
            <td>{exp.amount}</td>
          </tr>
        ))}
      </table>

      <h1>Total Expense : {totalExpense}</h1>
    </div>
  );
};

export default ExpenseTracker;
