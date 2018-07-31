module.exports = function mostProfitableDepartment(money){
let min = money[0].sales;    // printout value of 1st sales index
 let profit= money[0].department;
for ( let i=0;i<money.length;i++){
let result = money[i];
if(result.sales> min){
min = result.sales;
profit = result.department
//console.log(profit);
}
}
 return profit;
}
