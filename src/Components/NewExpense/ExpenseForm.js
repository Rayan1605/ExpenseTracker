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

    }
    return (
        <form  onSubmit={SubmitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={TitleChangeHandler}/>  {/*Adding and onchange so if anything changes then it will run the function */}
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={AmountChange}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2020-01-01" step="2025-12-31" onChange={DateChanged}/>
            </div>
        </div>
<div className="new-expense__actions">
<button type = "submit">Add Expense</button>
</div>

    </form>
    );
}

export default ExpenseForm;