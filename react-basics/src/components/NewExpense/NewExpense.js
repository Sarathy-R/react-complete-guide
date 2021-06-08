import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";

const NewExpense = (props) => {
  /**PRIVATE METHODS */

  const saveDataHandler = (enteredExpenses) => {
    const expenses = {
      ...enteredExpenses,
      id: Math.random().toString(),
    };
    props.onNewExpense(expenses);
  };
  /**PRIVATE METHODS */
  return (
    <Card className="new-expense">
      <ExpenseForm onSaveExpenseData={saveDataHandler} />
    </Card>
  );
};
export default NewExpense;
