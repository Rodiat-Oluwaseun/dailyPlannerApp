// Display the current day at the top of the calender when a user opens the planner.
var currentDate = dayjs();
$("#currentDay").text(currentDate.format("dddd, MMMM D YYYY"));



//Past, present, and future functionality -
//Compare timeblock time with current time to determine whether
//activity is in the past, present, or future
let moment = dayjs();
let currentHour = moment.format("HH");
$(".time-div").each(function () {
    var timeDiv = $(this).attr("id").split("-")[1];
    if (currentHour == timeDiv) {
        $(this).addClass("present");
        $(this).children(".description").addClass("present");
    } else if (currentHour < timeDiv) {
        $(this).removeClass("present");
        $(this).addClass("future");
    } else if (currentHour > timeDiv) {
        $(this).removeClass("future");
        $(this).addClass("past");
    }
});

//Save data to local storage
$(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    // displaying data when saved to local storage
    $("#time-blocks").text("Schedule added to Local Storage✔");
    setTimeout(() => {
        $("#time-blocks").text("");
    }, 3000);
    localStorage.setItem(time, value);

});

$("#hour-09 .time-block").val(localStorage.getItem("09"));
$("#hour-10 .time-block").val(localStorage.getItem("10"));
$("#hour-11 .time-block").val(localStorage.getItem("11"));
$("#hour-12 .time-block").val(localStorage.getItem("12"));
$("#hour-13 .time-block").val(localStorage.getItem("13"));
$("#hour-14 .time-block").val(localStorage.getItem("14"));
$("#hour-15 .time-block").val(localStorage.getItem("15"));
$("#hour-16 .time-block").val(localStorage.getItem("16"));
$("#hour-17 .time-block").val(localStorage.getItem("17"));

//  scroll position
$(document).scroll(function () {
    const scrollPosition = $(window).scrollTop();
    if (scrollPosition % 100 === 0) {

    }
});


