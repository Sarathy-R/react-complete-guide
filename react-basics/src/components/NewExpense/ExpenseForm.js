import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  /**STATES */
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   const [UserInput, UpdateInput] = useState({
  //     setEnteredTitle: "",
  //     setEnteredAmount: "",
  //     setEnteredDate: "",
  //   });
  /**STATES */

  /**PRIVATE METHODS */
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // UpdateInput((prevState) => {
    //   return { ...prevState, setEnteredTitle: "New Title" };
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const submitHandler = (event) => {
    //To prevent page reload
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    //Emitting value to parent component
    props.onSaveExpenseData(expenseData);
    //Clearing the inputs
    setEnteredDate("");
    setEnteredAmount("");
    setEnteredTitle("");
  };
  /**PRIVATE METHODS */

  return (
    <form onSubmit={submitHandler}>
      <div className="expense-form">
        <div className="expense-form__control">
          <label>Title :</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="expense-form__control">
          <label>Amount :</label>
          <input
            type="number"
            min="1"
            step="1"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="expense-form__control">
          <label>Date :</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="expense-form__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
