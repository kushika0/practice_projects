let Incomeinput= document.getElementById("income");
let Expensesinput = document.getElementById("Expenses");

let Addbtn = document.getElementById("Add");
let TotalIncome = document.getElementById("TotalIncome");
let TotalExpenses = document.getElementById("TotalExpenses");
let Balance = document.getElementById("Balance");

let TotalExpense1= 0;
let TotalIncome1 = 0;


Addbtn.addEventListener('click',()=>{
       const income = Number(Incomeinput.value)
       const Expenses = Number(Expensesinput.value)


       if(income>0) TotalIncome1+=income;
       if(Expenses>0) TotalExpense1+=Expenses;

       const balance= TotalIncome1-TotalExpense1;

       TotalIncome.textContent = TotalIncome1;
       TotalExpenses.textContent = TotalExpense1;
       Balance.textContent = balance;


       Incomeinput=" ";
       Expensesinput=" ";

})
