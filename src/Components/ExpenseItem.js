import './ExpenseItem.css'; // import the css file to be used in this component
//then import the class name using className in the div tag and add the
//class name to the css file and add the style you want to the class name
function ExpenseItem (){
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;
    return (
        <div className={"expense-item"}>
            <div>{expenseDate.toISOString()}</div>
    <div className={"expense-item__description"}>
        <h2>{expenseTitle}</h2>
        <div className={"expense-item__price"}>{expenseAmount}</div>
    </div>

    </div>
    );

}

export default ExpenseItem; // export the component to be used in other files