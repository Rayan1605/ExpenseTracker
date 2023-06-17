import React from "react";
import "./newExpense.css";

const ExpenseForm = () => {
    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
            <label>Title</label>
            <input type="text" />
            </div>
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" />
            </div>
        </div>


    </form>
}

export default ExpenseForm;