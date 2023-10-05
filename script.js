

function updateTime() {
  var today = moment();

  $("#currentDay").text(today.format("dddd, MMMM Do,"));

  let now = moment().format("kk");
    for (let i = 0; i < timeElArr.length; i++) {
        timeElArr[i].removeClass("future past present");

        if (now > timeElArr[i].data("hour")) {
            timeElArr[i].addClass("past");

        } else if (now === timeElArr[i].attr("data-hour")) {
            timeElArr[i].addClass("present");

        } else {

            timeElArr[i].addClass("future");
        }
    }
}


setInterval(updateTime, 1000); 



var saveBtn = $(".saveBtn");
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

updateTime();

