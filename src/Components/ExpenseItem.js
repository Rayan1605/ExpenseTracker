import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
function ExpenseItem (prop) {

    return (
        <div className={"expense-item"}>
       <ExpenseDate date = {prop.date}/>
    <div className={"expense-item__description"}>
        <h2>{prop.title}</h2>
        <div className={"expense-item__price"}>{prop.amount}</div>
    </div>

    </div>
    );

}

export default ExpenseItem; // export the component to be used in other files