import React from 'react';
import './newExpenses.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
        const saveExpenseDataHandler = (enteredExpenseData) => {
            const expenseData = {
            ...enteredExpenseData,// this is a spread operator which is used to add all the properties of the
                // object
            id: Math.random().toString()

        };
        props.onAddExpense(expenseData);
    }




    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/> {/* this is to communicate from the child node to the parent node*/}
            {/* First you create a function and go to the child node and add the data you wish to send  */}
            {/* Like this props.onSaveExpenseData(expenseData); in the Child node this is currently the parent so we are retrieving data*/}
           {/* Once you do that then say = and create another function and decide what you want to do with that data the enteredExpenseData*/}
            {/* is the data that is being sent from the child node to the parent node and you can keep doing the same thing to pass it down */}
        </div>

    )
}

export default NewExpense;