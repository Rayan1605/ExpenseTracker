import ExpenseItem  from "./Components/ExpenseItem";
//Remember the simple rule is anythat that start with a lower case letter is a
// built in  html component when it uppercase it is a custom so alwasy start with uppercase
function App() {
  return (
   <div>
        <h1>Lets' get Started</h1>
         <ExpenseItem></ExpenseItem>
   </div>
  );
}

export default App;
