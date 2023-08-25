

import ExpenseItem from './components/ExpenseItem';


function App() {


  return (
    <div>
      <h2>let's get started! </h2>
      <ExpenseItem></ExpenseItem>
      <input type="text" placeholder="item"></input>
      <p><input type="number" placeholder='Price'></input></p>
    </div>
  );
}

export default App;
