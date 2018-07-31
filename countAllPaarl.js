module.exports = function countAllPaarl(platenum){
let addcj = []; // emtpy array
  let platesplit = platenum.split(","); // convert string into array
  //console.log(platesplit);
  for (  let i = 0; i< platesplit.length; i++){
  var allcj = platesplit[i].trim();  // align the list
    //console.log(allcj);
 // console.log( "|" + allcj + "|"); // to see if the list is aligned
   if(allcj.startsWith("CJ")){
     addcj.push(allcj);
      }
    }
  return addcj.length;
}
