import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';
import React,{useState} from 'react';// you need to import useState from react to use it
//if you want to update the webpage you need to use the useState hook

function ExpenseItem(props) {
  const [title,setTitle] = useState(props.title);// You want to send the original value and also it return
    // an array with two elements the first element is the original value and the second element is the
    // function that allows you to update the value
    function clickHandler() {

    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick= {clickHandler} > Change Title</button>
        </Card>
    );
}

export default ExpenseItem;