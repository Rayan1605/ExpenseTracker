import React, {useState} from "react";

import "./newExpenses.css";



const ExpenseForm = () => {
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');
    const TitleChangeHandler = (event) => {

        setEnteredTitle(event.target.value); // for saving user information

    }

    function AmountChange(event) {
        setEnteredAmount(event.target.value); // for saving user information
    }
    function DateChanged(event) {
        setEnteredDate(event.target.value); // for saving user information
    }

    function SubmitHandler(event){
   event.preventDefault(); // this will prevent the page from reloading which is the default
        // behaviour of the form
            const expenseData = {
                title: enteredTitle,
                amount: enteredAmount,
                date: new Date(enteredDate)
            };
            console.log(expenseData);
            setEnteredTitle('');
            setEnteredAmount('');
            setEnteredDate(''); //this is called two way binding
        // two way binding is when you update the state and you also update the value of the input
        //so here we are updating the state and also updating the value of the input
        // so we are clearing the input fields after the user submits the form
        //that why it equals to an empty string
        //to do this in the jsx we need to add a value attribute to the input tag and enter
        //the variable
    }
    return (
        <form  onSubmit={SubmitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value = {enteredTitle} onChange={TitleChangeHandler}/>  {/*Adding and onchange so if anything changes then it will run the function */}
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number"  value={enteredAmount} min="0.01" step="0.01" onChange={AmountChange}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date"value={enteredDate} min="2020-01-01" step="2025-12-31" onChange={DateChanged}/>
            </div>
        </div>
<div className="new-expense__actions">
<button type = "submit">Add Expense</button>
</div>

    </form>
    );
}

export default ExpenseForm;