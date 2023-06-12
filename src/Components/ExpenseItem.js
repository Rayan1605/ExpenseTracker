import './ExpenseItem.css';
function ExpenseItem (prop) {
    const month = prop.date.toLocaleString('en-US', { month: 'long' });
    const day = prop.date.toLocaleString('en-US', { day: '2-digit' });
    const year = prop.date.getFullYear();
    return (
        <div className={"expense-item"}>
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>

            </div>
    <div className={"expense-item__description"}>
        <h2>{prop.title}</h2>
        <div className={"expense-item__price"}>{prop.amount}</div>
    </div>

    </div>
    );

}

export default ExpenseItem; // export the component to be used in other files