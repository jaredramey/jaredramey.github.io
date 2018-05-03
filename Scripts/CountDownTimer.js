//Set the day being counted down too
var deadLine = 'August 17 2019 10:00:00 PST';

function GetTimeRemaining(endtime)
{
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t/1000) % 60);
    var minutes = Math.floor((t/1000/60) % 60);
    var hours = Math.floor((t/(1000*60*60)) % 24);
    var days = Math.floor(t / (1000*60*60*24));

    return{
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime)
{
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    var timeInterval = setInterval(function(){
        var t = GetTimeRemaining(endtime);
        daysSpan.innerHTML = ('0' + t.days).slice(-3);
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        if(total <= 0)
        {
            clearInterval(timeInterval);
        }
    }, 1000);
}