import React from "react";

import "./ExpenseForm.css";
import { useState } from "react";

export default function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  //  const [userInput, setUserInput] = useState({
  //     title: " ",
  //     amount: null,
  //     date : " ",
  //  });
  //  console.log();

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
    // setUserInput((prevState)=>{
    //     return{  ...prevState, title : e.target.value }
    // });
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
    //  setUserInput((prevState) => {
    //    return { ...prevState, amount: e.target.value };
    //  });
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
    //  setUserInput((prevState) => {
    //    return { ...prevState, date: e.target.value };
    //  });
  };

  const handleChange = (field, value) => {
    if (field == "title") {
      setTitle(value);
    } else if (field == "amount") {
      setAmount(value);
    } else {
      setDate(value);
    }
    
  };

  const handleSubmit =(event)=>{
   event.preventDefault();
   const expenseData = {
     title: title,
     amount: amount,
     date : new Date(date),
     id: Math.random().toString()
   };
  
   props.onSaveExpenseData(expenseData);
   setTitle("");
   setAmount("");
   setDate("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>

          <input
            type="text"
            value={title}
            onChange={(e) => {
              handleChange("title", e.target.value);
            }}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>

          <input
            type="text"
            value={amount}
            onChange={(e) => {
              handleChange("amount", e.target.value);
            }}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>

          <input
            type="date"
            value={date}
            onChange={(e) => {
              handleChange("date", e.target.value);
            }}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button>Add Expense</button>
      </div>
    </form>
  );
}
