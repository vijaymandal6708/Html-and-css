import React, { useState } from "react";

const ExpenseTracker = () => {
  const [balance, setBalance] = useState(0);
  const [total, setTotal] = useState(0);
  const [expenses, setExpenses] = useState([]);

  const handleAddBalance = (e) => {
    e.preventDefault();
    const amount = Number(e.target.balance.value) || 0;
    setBalance(balance + amount);
    e.target.reset();
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    const date = e.target.date.value;
    const desc = e.target.desc.value.trim();
    const amount = Number(e.target.amount.value) || 0;

    if (amount <= 0) return;

    const newExpense = { id: Date.now(), date, desc, amount };
    setExpenses([...expenses, newExpense]);
    setTotal(total + amount);
    e.target.reset();
  };

  const handleDelete = (id, amount) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
    setTotal(total - amount);
  };

  return (
    <div>
      <form onSubmit={handleAddBalance}>
        <input type="number" name="balance" placeholder="Enter amount here" required />
        <button type="submit">Add Balance</button>
      </form>

      <hr />

      <form onSubmit={handleAddExpense}>
        <input type="date" name="date" required />
        <input type="text" name="desc" placeholder="Description" required />
        <input type="number" name="amount" placeholder="Amount" required />
        <button type="submit">Add Expense</button>
      </form>

      <div>
        <h3>Total Expense: {total}</h3>
        <h3>Balance Left: {balance - total}</h3>
      </div>

      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp) => (
            <tr key={exp.id}>
              <td>{exp.date}</td>
              <td>{exp.desc}</td>
              <td>{exp.amount}</td>
              <td>
                <button onClick={() => handleDelete(exp.id, exp.amount)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTracker;
