var header = $("header");
var headerLinks = $("header a");;
var menuBtn = $(".menu-btn");
var navbar = $(".navbar");

var mq = matchMedia("max-width: 860px");

$(window).on("scroll", () => {

    if (window.scrollY >= 50) {
        header.addClass("scroll");
        headerLinks.addClass("scroll");
        menuBtn.addClass("scroll");      
    } else {
        if (!navbar.hasClass("open")) {
            header.removeClass("scroll");
            headerLinks.removeClass("scroll");
            menuBtn.removeClass("scroll");
        }
    }
})

const toggleScroll = () => {
    header.addClass("scroll");
    headerLinks.addClass("scroll");
    menuBtn.addClass("scroll"); 
    navbar.addClass('open')
}

const removeScroll = () => {
    header.removeClass("scroll");
    headerLinks.removeClass("scroll");
    menuBtn.removeClass("scroll");
    navbar.removeClass('open')
}

var date, day, month, year, hr, min, seconds;
var calDay = $(".day");
var calHr = $(".hour");
var calMin = $(".minute");
var calSec = $(".second");
var calMonth = $(".month");
var calYear = $(".year");
var ampm = $(".ampm");
var dayCount = $(".daycount");
var hrCount = $(".hrcount");
var minCount = $(".mincount");
var secCount = $(".seccount");


const calendar = () => {
    date = new Date();
    hr = date.getHours() % 12 || 12;
    min = date.getMinutes().toString().padStart(2, "0");
    seconds = date.getSeconds();
    day = date.getDay();
    month = date.getMonth();
    year = date.getFullYear();

    calHr.html(hr + " :");
    calMin.html(" " + min);
    calYear.html(year)
    ampm.html(hr <= 12 ? " PM" : "AM")

    switch (day) {
        case 0:
            calDay.html("Sunday,");
            break;
        case 1:
            calDay.html("Monday,");
            break;
        case 2:
            calDay.html("Tuesday,");
            break;
        case 3:
            calDay.html("Wednesday,");
            break;
        case 4:
            calDay.html("Thurday,");
            break;
        case 5:
            calDay.html("Friday,");
            break;
        case 6:
            calDay.html("Saturday,");
            break;
        default:
            break;
    }

    switch (month) {
        case 0:
            calMonth.html("January");
            break;
        case 1:
            calMonth.html("February");
            break;
        case 2:
            calMonth.html("March");
            break;
        case 3:
            calMonth.html("April");
            break;
        case 4:
            calMonth.html("May");
            break;
        case 5:
            calMonth.html("June");
            break;
        case 6:
            calMonth.html("July");
            break;
        case 7:
            calMonth.html("August");
            break;
        case 8:
            calMonth.html("September");
            break;
        case 9:
            calMonth.html("October");
            break;
        case 10:
            calMonth.html("November");
            break;
        case 11:
            calMonth.html("December");
            break;

        default:
            break;
    }

    var totalDaysleft = 365 - new Date().getMonth() * 30

    dayCount.html(totalDaysleft + " Days")
    hrCount.html(24 - new Date().getHours() + " Hours")
    minCount.html(60 - new Date().getMinutes() + " Minutes")
    secCount.html(60 - new Date().getSeconds() + " Seconds")
    
}

setInterval(calendar)

