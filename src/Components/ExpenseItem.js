import './ExpenseItem.css'; // import the css file to be used in this component
//then import the class name using className in the div tag and add the
//class name to the css file and add the style you want to the class name
function ExpenseItem (){
    return (
        <div className={"expense-item"}>
            <div>March 28th 2021</div>
    <div className={"expense-item__description"}>
        <h2>Car Insurance</h2>
        <div className={"expense-item__price"}>$294.67</div>
    </div>

    </div>
    );

}

export default ExpenseItem; // export the component to be used in other files