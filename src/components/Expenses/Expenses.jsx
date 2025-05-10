import { useState } from "react";
import "./Expenses.css";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

//stateless component
export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2025");
  const filterExpenseHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

 

  return (
    <Card className="expenses">
      <ExpenseFilter onFilterExpense={filterExpenseHandler} />
      <ExpensesChart expenses= {filteredExpenses}/>
      <ExpensesList items = {filteredExpenses}/>
      
    </Card>
  );
}
