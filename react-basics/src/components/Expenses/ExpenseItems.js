import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  /***STATE VARIABLES */
  // const [title, setTitle] = useState(props.title);
  // const [state,updateFunction] = useState(initialState)
  /***STATE VARIABLES */

  /***PRIVATE METHODS */
  // const clickHandler = () => {
  //   setTitle("uupdate!");
  // };

  /***PRIVATE METHODS */

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h1>{props.title}</h1>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
}
export default ExpenseItem;
