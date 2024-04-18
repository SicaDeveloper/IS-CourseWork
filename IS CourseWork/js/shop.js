// setting the wanted date in which the sale ends
var countDownDate = new Date("May 30, 2024 24:00:00").getTime(); 
// updating the count so that it decreses every second
var x = setInterval(function(){

// getting today's date 
var now = new Date().getTime();
//subtracting to satify the later condition
var distance = countDownDate - now;

// calculating the time for days, hours, minutes
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

// displaying the output which is the timer by calling the id timer
document.getElementById("timer").innerHTML = days + "D:" + hours + "H:"
+ minutes + "M";

// displaying the output sale has ended if the sale has ended
if (distance < 0) {
clearInterval(x);
document.getElementById("timer").innerHTML = "Upcoming Sale in December";
}
}, 1000);


function search() {
    let filter = document.getElementById('search').value.toUpperCase();
    let item =  document.getElementsByClassName('store-items');
    let itemName = document.getElementsByClassName('store-items-name');

    for(var i= 0; i <=itemName.length;i++){
    let a = item[i].getElementsByClassName('store-items-name')[0];
    let value = a.innerHTML || a.innerHTML || a.textContent;

    if(value.toUpperCase().indexOf(filter)> -1){
        item[i].style.display = "";
    } else {
        item[i].style.display = "none";
    }
}
}