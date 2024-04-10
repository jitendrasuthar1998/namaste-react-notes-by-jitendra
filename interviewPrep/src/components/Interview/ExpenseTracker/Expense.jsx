import React, { useState } from 'react';

const ExpenseTracker = () => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseValue, setExpenseValue] = useState(0);
  const [expenses, setExpenses] = useState([]);

  const handleExpenseNameChange = (event) => {
    setExpenseName(event.target.value);
  };

  const handleExpenseValueChange = (event) => {
    setExpenseValue(parseFloat(event.target.value)); // Validate and parse value
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!expenseName || !expenseValue) {
      alert('Please enter both expense name and value.');
      return;
    }

    const newExpense = {
      name: expenseName,
      value: expenseValue,
    };

    setExpenses([...expenses, newExpense]);
    setExpenseName('');
    setExpenseValue(0);
  };

  const totalExpense = expenses.reduce((acc, expense) => acc + expense.value, 0);

  return (
    <div>
      <h1>Expense Tracker</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="expenseName">Expense Name: </label>
        <input
          type="text"
          id="expenseName"
          value={expenseName}
          onChange={handleExpenseNameChange}
        />
        <br />
        <label htmlFor="expenseValue">Expense Value: </label>
        <input
          type="number"
          id="expenseValue"
          value={expenseValue}
          onChange={handleExpenseValueChange}
        />
        <br />
        <button type="submit">Add Expense</button>
      </form>

      <h2>Expenses</h2>
      <table>
        <thead>
          <tr>
            <th>Expense Name</th>
            <th>Expense Value</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.name}</td>
              <td>${expense.value.toFixed(2)}</td> {/* Format to 2 decimal places */}
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Total Expense: ${totalExpense.toFixed(2)}</h2> {/* Format total expense */}
      <p>{expenses.length > 0 ? totalExpense.toFixed(2) : 0}</p>
    </div>
  );
};

export default ExpenseTracker;
