var day1Elem = document.querySelector('.dateOne');
var day2Elem = document.querySelector('.dateTwo');

// reference template

var matchingTemplateSource = document.querySelector('.matchingTemplate').innerHTML;
var compileMatchingTemplate = Handlebars.compile(matchingTemplateSource);
var displayElement = document.querySelector('.weekDisplayBar');

var Constructor = MatchingDaysFactory();

window.addEventListener('DOMContentLoaded', function(){

  displayElement.innerHTML = compileMatchingTemplate({
    weekdays : Constructor.updateStyle()
  });
});

day1Elem.addEventListener('change', function(){
  Constructor.getDay1(day1Elem.value);
  displayElement.innerHTML = compileMatchingTemplate({
    weekdays: Constructor.updateStyle()
  });
});

day2Elem.addEventListener('change', function(){
  Constructor.getDay2(day2Elem.value);
  displayElement.innerHTML = compileMatchingTemplate({
    weekdays: Constructor.updateStyle()
  });
});
