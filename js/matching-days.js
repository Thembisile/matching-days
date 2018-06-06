function MatchingDaysFactory(){
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
  var dayOne = '';
  var dayTwo = '';

  function returnDayOne(dateOne){
    dayOne = new Date(dateOne)
    dayOne = days[dayOne.getDay()];
    return dayOne;
  }

  function returnDayTwo(dateTwo){
    dayTwo = new Date(dateTwo);
    dayTwo = days[dayTwo.getDay()];
    return dayTwo;
  }

  function equalDays(dayOne, dayTwo){
    if (dayOne !== undefined && dayTwo !== undefined) {
      return dayOne === dayTwo;
    }
  }

  function daysComparison(firstDate, secondDate){
    var daysMap = {};

    for (var i = 0; i < days.length; i++) {
      var daysIndex = days[i]

      daysMap[daysIndex] = {
        valueOfDay: daysIndex,
        valueName: daysIndex
      }

      if (daysIndex === dayOne) {

        daysMap[daysIndex] = Object.assign({
          'dayOne': 'orange'
        }, daysMap[daysIndex]);
      }

      if (daysIndex === dayTwo) {
        daysMap[daysIndex] = Object.assign({
          'dayTwo': 'yellow'
          }, daysMap[daysIndex]);
      }
    }
    return daysMap;
  }

  return {
    returnDayOne,
    returnDayTwo,
    equalDays,
    daysComparison,
    days
  }
}
