import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItems";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";

function Expenses(props) {
  /**STATE VARIABLES */
  const [selectedYear, setYear] = useState("2021");
  /**STATE VARIABLES */

  /** CHILDREN STATES */
  const getfilteredYear = (year) => {
    console.log(year + "In Expense");
    setYear(year);
  };
  /** CHILDREN STATES */
  return (
    <div>
      <ExpenseFilter
        seletcedYear={selectedYear}
        onFilteredYear={getfilteredYear}
      ></ExpenseFilter>

      <Card className="expense-section">
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;
