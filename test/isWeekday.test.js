const assert = require("assert");
const isWeekday = require("../isWeekday");


describe('isWeekday', function(){

  it('find out if it is Not a day of the week (ie. is Not weekday.)', function(){
    assert.equal(isWeekday('Saturday'), false);
  });
  it('find out if it is a day of the week (ie. Not a weekend day.)', function(){
    assert.equal(isWeekday('Monday'), true);
  });

});
