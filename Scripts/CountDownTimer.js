//Set the day being counted down too
var countDownDate = new Date("Aug 17, 2019 10:00:00").getTime;

document.getElementById("countDown").innerHTML = "Testing";

//Update countdown every 1 second
var x = setInterval(function(){

    //Get todays date and time
    var now = new Date.getTime();

    //Find distance between now and countdown date.
    var distance = countDownDate - now;

    //Time calculations for days, hours, minutes, and seconds.
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 *60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //Display the result in the element with the id="countDown"
    //document.getElementById("countDown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    document.getElementById("countDown").innerHTML = "Testing";

    //If the count down is finished, write a message
    if(distance < 0)
    {
        clearInterval(x);
        document.getElementById("countDown").innerHTML = "It's the big day!";
    }
});