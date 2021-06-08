import logo from "./logo.svg";
import "./App.css";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { id: 1, title: "Breakfast", amount: 450, date: new Date(2021, 4, 23) },
    { id: 2, title: "Transport", amount: 50, date: new Date(2021, 1, 3) },
    { id: 3, title: "Lunch", amount: 44, date: new Date(2021, 2, 23) },
    { id: 4, title: "Books", amount: 780, date: new Date(2021, 5, 23) },
  ];

  /***PRIVATE METHODS */
  const newExpenseHandler = (newExpenseData) => {
    console.log("In app.js");
    console.log(newExpenseData);
  };
  /***PRIVATE METHODS */

  return (
    <div>
      <NewExpense onNewExpense={newExpenseHandler} />
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
