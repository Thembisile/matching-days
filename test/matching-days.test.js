describe('Matching Days Widget', function(){
  it('should highlight the day of the first input', function(){
    var Constructor = MatchingDaysFactory();

    Constructor.daysComparison('dayOne');

    assert.deepEqual('orange', Constructor.returnDayOne());
  });
});
