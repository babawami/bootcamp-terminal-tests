module.exports = function yearsAgo(pyear){
let date = new Date();
let year = date.getFullYear();
let ago = year - pyear;
 return ago;
}
