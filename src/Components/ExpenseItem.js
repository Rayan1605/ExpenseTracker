import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
    function clickHandler() {
        console.log('Clicked!!!');
    }

    //To add an event listener to a component, you need to add the event listener to the
    // component like you would in html with the onClick attribute. Then write the function
    //YOU can also use an anonymous function like this onClick={() => {console.log('Clicked!!!');}}

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick= {clickHandler} > Change Title</button>
        </Card>
    );
}

export default ExpenseItem;