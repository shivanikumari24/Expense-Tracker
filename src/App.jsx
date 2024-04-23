import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const Dummy_Expenses= [
    {
      id: "e1",
      title: "Home Rent",
      amount: 3000,
      date: new Date(2021, 7, 14),
    },
    {
      id: "e2",
      title: "Food cost",
      amount: 4000,
      date: new Date(2022, 4, 12),
    },
    {
      id: "e3",
      title: "Bike Fuel",
      amount: 1000,
      date: new Date(2023, 5, 8),
    },
    {
      id: "e4",
      title: "Others",
      amount: 2000,
      date: new Date(2021, 6, 24),
    },
  ];

  const [expenses, setExpense] = useState(Dummy_Expenses);
  const savedExpenseHandler = (expense) => {
    
    setExpense((prevState)=>{
      return [...prevState, expense]
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={savedExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
