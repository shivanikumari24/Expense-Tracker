import React from "react";
import "./ExpenseFilter.css";

export default function ExpenseFilter(props) {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter By Year</label>
        <select
          onChange={(event) => {
            props.onFilterExpense(event.target.value);
          }}
        >
          <option value="2023">2025</option>
          <option value="2023">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
}
