// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var firstHour = 6
var lasthour = 17

var currentTime = 


$(function () {
currentTime = dayjs().hour();
buildGrid();

$('.btn').on('click', setData);
});
