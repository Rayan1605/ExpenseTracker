import React, {useState} from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/newExpense";

 const Dummy_Expense = [ //so here we are creating an array of objects
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ];
function App() {
    //Calling the useState hook
    const [expenses, SetExpense] = useState(Dummy_Expense);

    function addExpenseHandler(expense) {
        //This will receive the expense data from the child component
        //This is the best way to update the state when it depends on the previous state

        SetExpense((prevExpense) => { // so it getting the
            // previous state and then adding the
            // new expense
            return [expense, ...prevExpense]; // so we are adding the new expense to the array
        });
    }

        return (
            <div>
                <NewExpense onAddExpense={addExpenseHandler}/>
                <Expenses items={expenses}/>
            </div>
        );

}

export default App;
