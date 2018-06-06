var day1Elem = document.querySelector('.dateOne');
var day2Elem = document.querySelector('.dateTwo');
var boxElem = document.querySelector('.day')

// reference template

var matchingTemplateSource = document.querySelector('.matchingTemplate').innerHTML;
var compileMatchingTemplate = Handlebars.compile(matchingTemplateSource);
var renderMatchingDays = document.querySelector('.days');

var Constructor = MatchingDaysFactory();

window.addEventListener('load', function(){

  var firstValue = day1Elem.value;
  var secondValue = day2Elem.value;

  renderMatchingDays.innerHTML = compileMatchingTemplate({
    days : Constructor.daysComparison(Constructor.returnDayOne(firstValue), Constructor.returnDayTwo(secondValue))

  })
})

day1Elem.addEventListener('change', function(){

  var firstValue = day1Elem.value;
  var secondValue = day2Elem.value;

  renderMatchingDays.innerHTML = compileMatchingTemplate({
    days : Constructor.daysComparison(Constructor.returnDayOne(firstValue), Constructor.returnDayTwo(secondValue))

  })
})

day2Elem.addEventListener('change', function(){

  var firstValue = day1Elem.value;
  var secondValue = day2Elem.value;

  renderMatchingDays.innerHTML = compileMatchingTemplate({
    days : Constructor.daysComparison(Constructor.returnDayOne(firstValue), Constructor.returnDayTwo(secondValue))

  })
})
