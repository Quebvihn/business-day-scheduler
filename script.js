// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

function updateTime() {
  var today = moment();

  $("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm:ss"));



}

updateTime()


var saveBttn = $(".save-icon");
var containerEl = $(".container");
var schedule9am = $("#hour-9");
var schedule10am = $("#hour-10");
var schedule11am = $("#hour-11");
var schedule12pm = $("#hour-12");
var schedule1pm = $("#hour-1");
var schedule2pm = $("#hour-2");
var schedule3pm = $("#hour-3");
var schedule4pm = $("#hour-4");
var schedule5pm = $("#hour-5");

var timeElArr = [
  schedule9am,
  schedule10am,
  schedule11am,
  schedule12pm,
  schedule1pm,
  schedule2pm,
  schedule3pm,
  schedule4pm,
  schedule5pm,
];