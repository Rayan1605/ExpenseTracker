import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';
import React,{useState} from 'react';// you need to import useState from react to use it
//if you want to update the webpage you need to use the useState hook

function ExpenseItem(props) {

    let title = props.title;
    function clickHandler() {
       title = 'Updated';
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