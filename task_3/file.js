var date = new Date();
date.setDate(1);
date.setMonth(date.getMonth());

window.onload = function () {
    createMonth();
};

function dayOfWeekAsString(dayIndex) {
    return ["Воскресенье,", "Понедельник,", "Вторник,", "Среда,", "Четверг,", "Пятница,", "Суббота,"][dayIndex];
}

function monthsAsString(monthIndex) {
    return ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"][monthIndex];
}


function createCalendarDay(num, day, mon, year) {
    var currentCalendar = document.getElementById("calendar");
    var newDay = document.createElement("div");
    var date = document.createElement("p");
    var dayElement = document.createElement("p");

    dayElement.className = "day";
    dayElement.id = "day" + num;
    dayElement.innerHTML = day;
    date.innerHTML = num;
    newDay.className = "calendar-day ";

    newDay.id = num + "-" + mon + "-" + year;

    newDay.appendChild(dayElement);
    newDay.appendChild(date);

    currentCalendar.appendChild(newDay);
}

function clearCalendar() {
    var currentCalendar = document.getElementById("calendar");

    currentCalendar.innerHTML = "";

}

function nextMonth() {
    clearCalendar();

    date.setMonth(date.getMonth() + 1);

    createMonth(date.getMonth());
}


function previousMonth() {
    clearCalendar();
    date.setMonth(date.getMonth() - 1);
    var val = date.getMonth();
    createMonth(date.getMonth());
}


function createMonth() {
    var currentCalendar = document.getElementById("calendar");

    var dateObject = new Date();
    dateObject.setDate(date.getDate());
    dateObject.setMonth(date.getMonth());
    dateObject.setYear(date.getFullYear());

    createCalendarDay(dateObject.getDate(), dayOfWeekAsString(dateObject.getDay()), monthsAsString(dateObject.getMonth()), dateObject.getFullYear());

    dateObject.setDate(dateObject.getDate() + 1);

    while (dateObject.getDate() != 1) {
        createCalendarDay(dateObject.getDate(),
            dayOfWeekAsString(dateObject.getDay()),
            monthsAsString(dateObject.getMonth()),

            dateObject.getFullYear());
        dateObject.setDate(dateObject.getDate() + 1);
    }


    var currentMonthText = document.getElementById("current-month");
    currentMonthText.innerHTML = monthsAsString(date.getMonth()) + " " + date.getFullYear();

    getCurrentDay();
}


function getCurrentDay() {


    var todaysDate = new Date();
    var today = todaysDate.getDate();
    var currentMonth = todaysDate.getMonth();
    var currentYear = todaysDate.getFullYear();
    var thisMonth = monthsAsString(currentMonth);


    currentDay = document.getElementById(today + "-" + thisMonth + "-" + currentYear);
    currentDay.className = "calendar-day today";
}

function search() {
    alert("В разработке")
}
