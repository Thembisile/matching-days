function MatchingDaysFactory(){
  var allDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
  var day1 = '';
  var day2 = '';

  function returnDayOne(date){
    if (date !== undefined) {
      let day = new Date(date);
      day1 = allDays[day.getDay()];
    }
    return day1;
  }

  function returnDayTwo(date){
    if (date !== undefined) {
      let day = new Date(date);
      day2 = allDays[day.getDay()];
    }
    return day2;
  }

  function dayOne(){
    return day1;
  }

  function dayTwo(){
    return day2;
  }

  function sameDay(){
    return day1 === day2;
  }

  function updateStyle(){
    let weekObject = {};

    for (var i = 0; i < allDays.length; i++) {
      let currentWeekDay = allDays[i];
      weekObject[currentWeekDay] = { dayValue : currentWeekDay}

      if (day1 !== undefined && currentWeekDay === day1) {
        weekObject[currentWeekDay] = Object.assign({ day1Class : 'first-day-color'}, weekObject[currentWeekDay]);
        if (sameDay()) {
          delete weekObject[currentWeekDay].day1Class;
          weekObject[currentWeekDay] = Object.assign({ sameClass : "same-day-color"}, weekObject[currentWeekDay]);
        }
      }
      else if (day2 !== undefined && currentWeekDay === day2) {
        weekObject[currentWeekDay] = Object.assign({ day2Class : "second-day-color"}, weekObject[currentWeekDay]);
        if (sameDay()) {
          delete weekObject[currentWeekDay].day2Class;
          weekObject[currentWeekDay] = Object.assign({ sameClass : "same-day-color"}, weekObject[currentWeekDay]);
        }
      }
    }
    return weekObject;
  }

  return {
    dayOne,
    dayTwo,
    returnDayOne,
    returnDayTwo,
    sameDay,
    updateStyle,
    allDays
  }
}
