import ExpenseItem from './components/ExpenseItem';

function App(){
const expenses=[
{
id:'e1',
title:'Toilet Paper',
amount:94.12,
date:new Date(2021, 2, 26),
},
{id:'e2', title:'new Tv', amount:799.65,date:new Date(2021, 2 ,12)},
{
    id:'e3',
    title:'Car Insurance',
    amount:294.64,
    date: new Date(2021, 2, 26),
},
{
    id:'e4',
    title:'New Desk(Wooden)',
    amount:450,
    date: new Date(2021, 5,12), 
},


{ title:'Car Insurance', amount:294.64,date:new Date (2021 ,2,26)},
{ title:'Car Insurance', amount:294.64,date:new Date (2021 ,2,26)},
{ title:'Car Insurance', amount:294.64,date:new Date (2021 ,2,26)},
{ title:'Car Insurance', amount:294.64,date:new Date (2021 ,2,26)},

];

return (
<div>
<h2>Let's get started!  </h2>
<ExpenseItem title={expenses[0].title} 
amount={expenses[0].amount} 
date={expenses[0].date}>
</ExpenseItem>

<ExpenseItem title={expenses[1].title} 
amount={expenses[1].amount} 
date={expenses[1].date}>
</ExpenseItem>

<ExpenseItem title={expenses[2].title} 
amount={expenses[2].amount} 
date={expenses[2].date}>
</ExpenseItem>

<ExpenseItem title={expenses[3].title} 
amount={expenses[3].amount} 
date={expenses[3].date}>
</ExpenseItem>

</div>

);
}
export default App;
