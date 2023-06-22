import React, {useState} from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/newExpense";
import expenses from "./Components/Expenses/Expenses";

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
    const [Dummy_Expense, SetExpense] = useState(Dummy_Expense,);

    function addExpenseHandler(expense) {
        //This is the best way to update the state when it depends on the previous state

            SetExpense((prevExpense) => {
                return [expense, ...prevExpense];
            });

        return (
            <div>
                <NewExpense onAddExpense={addExpenseHandler}/>
                <Expenses items={expenses}/>
            </div>
        );
    }
}

export default App;
