module.exports = function countRegNumber(plate){
  "use strict"
let platesplit = plate.split(",");
  let platelength = platesplit.length;
  return platelength;
}
