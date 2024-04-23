import React from 'react'
import ExpenseForm from './ExpenseForm'
import "./NewExpense.css"


export default function NewExpense(props) {
  const saveExpenseDataHandler = (ExpenseData) =>{
    props.onAddExpense(ExpenseData);
    // console.log(ExpenseData);
  }
  return (
    <div className='new-expense'>
       <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/> 
    </div>
  )
}
