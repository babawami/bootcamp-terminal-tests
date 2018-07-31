module.exports = function regCheck( plate, province){
  "use strict"
  return plate.endsWith(province);
}
