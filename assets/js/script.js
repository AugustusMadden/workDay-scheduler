var dateEl = $("#currentDay");

//moment.js

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY h:mm:ss a');
    dateEl.text(rightNow);
}

var currentHour = Number(moment().format('HH'));
var timeRowArray = $("div.timeRow");

for (let i = 0; i < timeRowArray.length; i++) {

    var rowTime = Number(timeRowArray[i].id);
  
    if (rowTime < currentHour) {
        timeRowArray[i].children[1].classList.add("past");
      } 
    else if (rowTime === currentHour) {
        timeRowArray[i].children[1].classList.add("present");
    } 
    else if (rowTime > currentHour){
        timeRowArray[i].children[1].classList.add("future");
    } 
  
}

//localStorage

$(".saveBtn").on("click", function () {

    let correspondingText = $(this).parent().siblings(".textSpace").val();
    let correspondingTime = $(this).parent().parent().attr("id");

    localStorage.setItem(correspondingTime, correspondingText);
})



function init(){
    $("#textArea7").val(localStorage.getItem("7"));
    $("#textArea8").val(localStorage.getItem("8"));
    $("#textArea9").val(localStorage.getItem("9"));
    $("#textArea10").val(localStorage.getItem("10"));
    $("#textArea11").val(localStorage.getItem("11"));
    $("#textArea12").val(localStorage.getItem("12"));
    $("#textArea13").val(localStorage.getItem("13"));
    $("#textArea14").val(localStorage.getItem("14"));
    $("#textArea15").val(localStorage.getItem("15"));
    $("#textArea16").val(localStorage.getItem("16"));
    $("#textArea17").val(localStorage.getItem("17"));
    $("#textArea18").val(localStorage.getItem("18"));
    $("#textArea19").val(localStorage.getItem("19"));
    $("#textArea20").val(localStorage.getItem("20"));
    $("#textArea21").val(localStorage.getItem("21"));
}

setInterval(displayTime, 1000);
init();