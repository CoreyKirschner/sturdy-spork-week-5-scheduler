var today = new Date();
var day = today.getDay();
var dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log("Today is : " + dayList[day] + ".");
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var afterPast = (hour >= 12)? " PM ":" AM ";
var textBox = document.getElementById("text-box");
var saveButton = document.getElementById("save-button");

// Variables for each time slot to save text on page when save button is clicked
var nineAm = localStorage.getItem("hour-9");
$("#hour-9 .description").val(nineAm);
var tenAm = localStorage.getItem("hour-10");
$("#hour-10 .description").val(tenAm);
var elevenAm = localStorage.getItem("hour-11");
$("#hour-11 .description").val(elevenAm);
var twelvePm = localStorage.getItem("hour-12");
$("#hour-12 .description").val(twelvePm);
var onePm = localStorage.getItem("hour-13");
$("#hour-13 .description").val(onePm);
var twoPm = localStorage.getItem("hour-14");
$("#hour-14 .description").val(twoPm);
var threePm = localStorage.getItem("hour-15");
$("#hour-15 .description").val(threePm);
var fourPm = localStorage.getItem("hour-16");
$("#hour-16 .description").val(fourPm);
var fivePm = localStorage.getItem("hour-17");
$("#hour-17 .description").val(fivePm);

// displays the current date and time
document.getElementById('current-day').innerHTML = today.toLocaleString()

// if statment to color code each row with past, present, or future
if (today.hour >= 9 && hour <= 17) {
  $(".row").addClass("present");
} else if(today.hour < 9) {
  $(".row").addClass("past");
} else {
  $(".row").addClass("future");
}

// Event listener to save text for each timeblock
saveButton.addEventListener("click", saveToStorage);

// Saves the text written in each timeblock
function saveToStorage() {
  const value = textBox.value;
  localStorage.setItem("text-box", value);
}

// Targets specific timeblock to save to localStorage
$(document).ready(function () {
  $(".saveBtn").on("click", function() {
    var value = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id")

    console.log('value', value);
    console.log('time:', time);

    localStorage.setItem(time, value);
  });
});

console.log("Current Time : "+hour + afterPast + " : " + minute + " : " + second);
