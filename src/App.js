import ExpenseItem  from "./Components/ExpenseItem";
//Remember the simple rule is anythat that start with a lower case letter is a
// built in  html component when it uppercase it is a custom so alwasy start with uppercase
function App() {
    const expenses = [ //so here we are creating an array of objects
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ];
  return ( //so here you can see naming the title in expenses object as title so when we use it again we need to use the same name
   <div>
        <h1>Lets' get Started</h1>
         <ExpenseItem title = {expenses[0].title}
                      amount = {expenses[0].title}
                      date = {expenses[0].date}></ExpenseItem>
       <ExpenseItem title = {expenses[1].title}
                           amount = {expenses[1].title}
                           date = {expenses[1].date}></ExpenseItem>
       <ExpenseItem  title = {expenses[2].title}
                     amount = {expenses[2].title}
                     date = {expenses[2].date}></ExpenseItem>
       <ExpenseItem  title = {expenses[3].title}
                     amount = {expenses[3].title}
                     date = {expenses[3].date}></ExpenseItem>
   </div>
  );
}

export default App;
