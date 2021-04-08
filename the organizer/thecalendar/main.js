let nav = 0; //to navigate through the month.too keep track.
let clicked = null // what we click on.
const apiKey = 'b9d5cb077497c41bc2a1d53f67cc9bed';
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const calendar = document.getElementById('calendar-days');
const monthNumbers = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
};


function getPosition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(writePosition);
    }
}

function writePosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=hourly,minutely,current' + '&appid=' + apiKey + '&units=metric')
        .then(function(body) { return body.json() })
        .then(function(data) {
            renderWeather(data);
        })

}

function renderWeather(data) {
    var weatherElement = document.getElementById('weather-content');
    var tempToday = data.daily[0].temp.day;
    var tempTomorrow = data.daily[1].temp.day;
    tempToday = Math.round(tempToday);
    tempTomorrow = Math.round(tempTomorrow);
    var picToday = data.daily[0].weather[0].icon;
    var picTomorrow = data.daily[1].weather[0].icon;
    var picSourceToday = "<img src=" + 'http://openweathermap.org/img/w/' + picToday + '.png' + ">";
    var picSourceTomorrow = "<img src=" + 'http://openweathermap.org/img/w/' + picTomorrow + '.png' + ">";
    weatherElement.innerHTML = "Todays weather: " + tempToday + "&deg;" + "c" + picSourceToday + "<BR>" + " Weather tomorrow: " + tempTomorrow + "&deg;" + "c" + picSourceTomorrow;

}


function getTheDay(date, dayElement) {
    clicked = date;
    var addE = document.getElementById('event-title');
    addE.addEventListener('click', () => {
        getTheDay(clicked);

    });
    var eventForm = document.getElementById('current-events');
    eventForm.style.display = 'block';
    var closeEvent = document.getElementById('close');
    var eventDate = document.getElementById('date');
    eventDate.value = clicked;
    closeEvent.addEventListener('click', () => {
        eventForm.style.display = 'none';
    });
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {


            var resu = document.getElementById('list-events');
            resu.innerHTML = "";
            var res = JSON.parse(this.responseText);
            if (res.length > 0) {
                res.forEach(function(obj) {
                    if (clicked == obj.date) {
                        resu.innerHTML += "<div id='note-box'>" + "<p>" + obj.content + "<BR>" + "Time: " + obj.time + "<BR>" + "Category: " + obj.category + "</p>" + "</div>";
                    }

                });
            }

        }
    };
    xhttp.open("GET", "./../api/listnotes.php", true);
    xhttp.send();

};

function getCategory() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

        }
    };
    xhttp.open("GET", "./../api/sortcategory.php?category=${category}", true);
    xhttp.send();
}

function getByDate() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

        }
    };
    xhttp.open("GET", "./../api/sortdate.php?date=${date}", true);
    xhttp.send();
}

function renderCalendar() {
    const dt = new Date();

    if (nav !== 0) {
        dt.setMonth(new Date().getMonth() + nav);
    }
    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dateString = firstDayOfMonth.toLocaleDateString('en-gb', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    })
    var leftTitle = document.querySelector('.current-day-left');
    leftTitle.innerHTML = `${dt.toDateString('en-gb', { weekday: 'long', month: 'short' })}`;
    var dateTitle = document.getElementById('displayDate');
    dateTitle.innerHTML = `${dt.toLocaleDateString('en-gb', { weekday: 'long' })} ${day} ${monthNumbers[month + 1]} ${year}`;
    var monthTitle = document.getElementById('displayMonth');
    monthTitle.innerHTML = `${dt.toLocaleDateString('en-gb', { month: 'long' })} ${year}`;
    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
    calendar.innerHTML = '';

    for (var i = 1; i <= paddingDays + daysInMonth; i++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('all-days');
        const dayString = `${i - paddingDays}-${month + 1}-${year}`;
        const titleString = `${i - paddingDays} ${monthNumbers[month + 1]}<BR>${year}`;




        if (i > paddingDays) {
            dayElement.innerText = i - paddingDays;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var res = JSON.parse(this.responseText);
                    if (res.length > 0) {
                        res.forEach(function(obj) {
                            if (dayString == obj.date) {
                                dayElement.classList.add('all-days-dot');

                            }

                        });

                    }
                }
            };
            xhttp.open("GET", "./../api/listnotes.php", true);
            xhttp.send();

            dayElement.addEventListener('click', () => {

                dateTitle.innerHTML = titleString;
                leftTitle.innerHTML = titleString;
                getTheDay(dayString);

            });

            if (i - paddingDays === day && nav === 0) {
                dayElement.classList.add('today');
                getTheDay(dayString);

            }
        } else {
            dayElement.classList.add('prev-date');
        }
        calendar.appendChild(dayElement);
    }


}

function activateButtons() {
    document.querySelector('.next').addEventListener('click', () => {
        nav++;
        renderCalendar();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        nav--;
        renderCalendar();
    });

}
activateButtons();
renderCalendar();
getPosition();