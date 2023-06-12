import './ExpenseItem.css'; // import the css file to be used in this component
//then import the class name using className in the div tag and add the
//class name to the css file and add the style you want to the class name
function ExpenseItem (prop) // React will ensure that we get one parameter for each component
//it will be an object and it will contain all the data that we pass to the component and you can name
//whatever you want -> so you say prop then whatever you name your thing you put the same and it will give the data
{  // so we named our thing amount -> so we acess the prop object and then the amount property and it will give us the data
    return (
        <div className={"expense-item"}>
            <div>{prop.date.toISOString()}</div>
    <div className={"expense-item__description"}>
        <h2>{prop.title}</h2>
        <div className={"expense-item__price"}>{prop.amount}</div>
    </div>

    </div>
    );

}

export default ExpenseItem; // export the component to be used in other files