describe('Matching Days Inputs', function(){
  it('should return Sunday if date selected is "08-06-2018".', function(){

    var Constructor = MatchingDaysFactory();

    assert.equal('Friday', Constructor.returnDayOne('8-Jun-2018'));
  });
  it('should return Monday if date selected is "05-07-2018".', function(){

    var Constructor = MatchingDaysFactory();

    assert.equal('Monday', Constructor.returnDayTwo('4-Jun-2018'));
  });
  it('should return false if the day passed in is not the expected result', function(){
    var Constructor = MatchingDaysFactory();

    assert.notEqual('Monday', Constructor.returnDayOne('7-Jun-2018'))
  })
});
describe('Same Day Functioning', function(){
  it('should return true if same day selected falls on same day in weekbar', function(){
    var Constructor = MatchingDaysFactory();

    Constructor.returnDayOne('5-Jun-2018');
    Constructor.returnDayTwo('5-Jun-2018');

    assert.equal(true, Constructor.sameDay());
  })
  it('should return true if same day is selected despite year or month', function(){
    var Constructor = MatchingDaysFactory();

    Constructor.returnDayOne('5-Jun-2017');
    Constructor.returnDayTwo('11-Jun-2018');

    assert.equal(true, Constructor.sameDay());
  })
  it('should return false if days selected are on a different day in th weekbar', function(){
    var Constructor = MatchingDaysFactory();

    Constructor.returnDayOne('5-Jun-2018');
    Constructor.returnDayTwo('30-Jun-2018');

    assert.equal(false, Constructor.sameDay());
  });
});
describe('Update Style Functioning', function(){
  it('should update style of first date inputs with properties of day1 class', function(){
    var Constructor = MatchingDaysFactory();

    assert.deepEqual(Constructor.updateStyle());
  })
})
