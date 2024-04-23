import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";


export default function ExpensesList(props) {
  if (props.items.length == 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses !!</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expenseItem) => {
        return (
          <ExpenseItem
            key={expenseItem.id}
            title={expenseItem.title}
            amount={expenseItem.amount}
            date={expenseItem.date}
          />
        );
      })}
    </ul>
  );
}
