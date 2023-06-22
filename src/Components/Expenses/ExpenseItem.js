import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';
import React from 'react';// you need to import useState from react to use it
//if you want to update the webpage you need to use the useState hook

function ExpenseItem(props) {

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2> {/* The title can be the same  */}
                <div className='expense-item__price'>${props.amount}</div>
            </div>

        </Card>
    );
}

export default ExpenseItem;