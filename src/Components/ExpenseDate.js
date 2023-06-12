import "./ExpenseDate.css";
function Expense (prop){
    const month = prop.date.toLocaleString('en-US', { month: 'long' });
    const day = prop.date.toLocaleString('en-US', { day: '2-digit' });
    const year = prop.date.getFullYear();

    return (
        <div className={"expense-date"}>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>

        </div>
        );
}
export default Expense;