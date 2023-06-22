import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

function Expenses(props) {
    return (
        <Card className="expenses">
            {props.items.map(expense => (
                <ExpenseItem
                    key = {expense.id} // this is a special property that is used to identify the element
                    // so that react can update the element and not the entire list of elements and
                    // know which element to update or where to place the element
                    title = {expense.title}
                             amount = {expense.amount}
                             date = {expense.date}/>
            ))}

        </Card>
    );
}

export default Expenses;