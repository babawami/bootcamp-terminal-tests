module.exports = function findItemsOver(product,threshold){
//console.log(threshold);
  let exculsive = [];
 for( let i=0;i<product.length;i++){
   let listit = product[i];
 if( listit.qty> threshold){
 exculsive.push(listit)
   //console.log(exculsive)
 }
 }
  return exculsive;
}
