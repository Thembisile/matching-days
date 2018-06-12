describe('Matching Days Inputs', function(){
  it('should return Friday if date selected is "08-Jun-2018".', function(){

    var Constructor = MatchingDaysFactory();

    assert.equal('Friday', Constructor.getDay1('8-Jun-2018'));
  });
  it('should return Monday if date selected is "04-Jun-2018".', function(){

    var Constructor = MatchingDaysFactory();

    assert.equal('Monday', Constructor.getDay2('4-Jun-2018'));
  });
  it('should return false if the day passed in is not the expected result', function(){
    var Constructor = MatchingDaysFactory();

    assert.notEqual('Monday', Constructor.getDay1('7-Jun-2018'))
  })
});
describe('Same Day Functioning', function(){
  it('should return true if same day selected falls on same day in weekbar', function(){
    var Constructor = MatchingDaysFactory();

    Constructor.getDay1('5-Jun-2018');
    Constructor.getDay2('5-Jun-2018');

    assert.equal(true, Constructor.sameDay());
  })
  it('should return true if same day is selected despite year or month', function(){
    var Constructor = MatchingDaysFactory();

    Constructor.getDay1('5-Jun-2017');
    Constructor.getDay2('11-Jun-2018');

    assert.equal(true, Constructor.sameDay());
  })
  it('should return false if days selected are on a different day in th weekbar', function(){
    var Constructor = MatchingDaysFactory();

    Constructor.getDay1('5-Jun-2018');
    Constructor.getDay2('30-Jun-2018');

    assert.equal(false, Constructor.sameDay());
  });
});
describe('Update Style Functioning', function(){
  it('should update style of first date inputs with properties of day1 class', function(){
    var Constructor = MatchingDaysFactory();

    Constructor.getDay1('15-Jun-2018')

    assert.deepEqual(
      Constructor.updateStyle(),
      {
        Sunday : { dayValue : 'Sunday'},
        Monday : { dayValue : 'Monday'},
        Tuesday : { dayValue : 'Tuesday'},
        Wednesday : { dayValue : 'Wednesday'},
        Thursday : { dayValue : 'Thursday'},
        Friday : { dayValue : 'Friday', day1Class : 'first-day-color'},
        Saturday : { dayValue : 'Saturday'}
      }
    )
  })
  it('should update style of second date inputs with properties of day2 class.', function(){
    var Constructor = MatchingDaysFactory();

    Constructor.getDay2('14-Jun-2018');

    assert.deepEqual(
      Constructor.updateStyle(),
      {
        Sunday : { dayValue : 'Sunday'},
        Monday : { dayValue : 'Monday'},
        Tuesday : { dayValue : 'Tuesday'},
        Wednesday : { dayValue : 'Wednesday'},
        Thursday : { dayValue : 'Thursday', day2Class : 'second-day-color'},
        Friday : { dayValue : 'Friday'},
        Saturday : { dayValue : 'Saturday'}
      }
    )
  })
  it('should update the style of same day class if both inputs fall on the same weekday/day', function(){
    var Constructor = MatchingDaysFactory();

    Constructor.getDay1('05-Jun-2018');
    Constructor.getDay2('05-Jun-2018');

    assert.deepEqual(
      Constructor.updateStyle(),
      {
        Sunday : { dayValue : 'Sunday'},
        Monday : { dayValue : 'Monday'},
        Tuesday : { dayValue : 'Tuesday', sameClass : 'same-day-color'},
        Wednesday : { dayValue : 'Wednesday'},
        Thursday : { dayValue : 'Thursday'},
        Friday : { dayValue : 'Friday'},
        Saturday : { dayValue : 'Saturday'}
      }
    )

    var Constructor2 = MatchingDaysFactory();

    Constructor2.getDay1('05-Jun-2018');
    Constructor2.getDay2('26-Jun-2018');

    assert.deepEqual(
      Constructor2.updateStyle(),
      {
        Sunday : { dayValue : 'Sunday'},
        Monday : { dayValue : 'Monday'},
        Tuesday : { dayValue : 'Tuesday', sameClass : 'same-day-color'},
        Wednesday : { dayValue : 'Wednesday'},
        Thursday : { dayValue : 'Thursday'},
        Friday : { dayValue : 'Friday'},
        Saturday : { dayValue : 'Saturday'}
      }
    )
  })
  it('should update style on both days with both class properties 1 & 2 for both inputs selected', function(){
    var Constructor = MatchingDaysFactory();

    Constructor.getDay1('23-Jan-2018');
    Constructor.getDay2('18-Feb-2018');

    assert.deepEqual(
      Constructor.updateStyle(),
      {
        Sunday : { dayValue : 'Sunday', day2Class : 'second-day-color'},
        Monday : { dayValue : 'Monday'},
        Tuesday : { dayValue : 'Tuesday', day1Class : 'first-day-color'},
        Wednesday : { dayValue : 'Wednesday'},
        Thursday : { dayValue : 'Thursday'},
        Friday : { dayValue : 'Friday'},
        Saturday : { dayValue : 'Saturday'}
      }
    )
  })
})
describe('Initializing a date input', function(){
  it('should initiliaze data of the input then store in map', function(){

    var Constructor = MatchingDaysFactory('05-Jun-2018');

    assert.deepEqual(
      Constructor.updateStyle(),
      {
        Sunday : { dayValue : 'Sunday'},
        Monday : { dayValue : 'Monday'},
        Tuesday : { dayValue : 'Tuesday'},
        Wednesday : { dayValue : 'Wednesday'},
        Thursday : { dayValue : 'Thursday'},
        Friday : { dayValue : 'Friday'},
        Saturday : { dayValue : 'Saturday'}
      }
    )
  });
});
