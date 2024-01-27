var currentDay= dayjs().format("DD, MM, YYYY");
$("#currentDay").text(currentDay);

$(".saveBtn").on("click", function(){
var divKey= $(this).parent().attr("id")
var textValue= $(this).siblings(".description").val()
    localStorage.setItem(divKey, textValue)
})

$("#9 .description").val(localStorage.getItem("9"))

$("#10 .description").val(localStorage.getItem("10"))

$("#11 .description").val(localStorage.getItem("11"))

$("#12 .description").val(localStorage.getItem("12"))

$("#13 .description").val(localStorage.getItem("13"))

$("#14 .description").val(localStorage.getItem("14"))

$("#15 .description").val(localStorage.getItem("15"))

$("#16 .description").val(localStorage.getItem("16"))

$("#17 .description").val(localStorage.getItem("17"))

var currentHour = dayjs().hour()

$(".time-block").each(function(){

    var divId = $(this).attr("id")

    if(divId < currentHour){
        $(this).addClass("past")
    }

    else if(divId == currentHour){
        $(this).addClass("present")
    }
    
    else {
        $(this).addClass("future")
    }

})