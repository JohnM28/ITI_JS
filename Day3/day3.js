function time(){
    setInterval(function() {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.getElementById("date").innerHTML = time;
    },1000)}

var OpenedWindow

// works in edge but not in firefox
function adv() {
    setTimeout(function () { OpenedWindow = window.open('about.html', '_blank', "height=600,width=800"); },
        3000);
}


function close_adv(){
    OpenedWindow.close();
}
var name

function save_cred(){
    name = document.getElementById('UserName').value;

}

var user_name
var email
var t1
var t2

function askname(){
    let con_name = true , con_username = true
    let reg_name = /^([a-z]{3,})$/gi;
    let reg_email = /eg$/gi;
    user_name = prompt("enter your name (Fit the criteria)");
    t1= reg_name.test(user_name.replace(/\s*/g,""));
    console.log(t1);
    while (con_name) {
        if (t1===false) {
            user_name = prompt("enter your name correctly");
            t1= reg_name.test(user_name);
            console.log(t1)
        }
        else {
            con_name = false;
        }
    }
    email = prompt("enter your email");
    t2= reg_email.test(email);
    console.log(t2);
    while (con_username && email != null) {
        if (t2 === false) {
            email = prompt("enter your email correctly");
            t2 = reg_email.test(email);
            console.log(t2)
        } else {
            con_username = false;
        }
    }
}

let grad_date = new Date('2022-02-14T10:20:30Z');
let grad_date_conv = grad_date.getTime();

function timer(){
    setInterval(function() {
        let today = new Date();
        var now = today.getTime();
        var diff = grad_date_conv - now;
        var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("gradDate").innerHTML = "Time Left till Grad: <br> Days:" + days +
            "<br>Hours: " + hours + "<br>Minutes: " + minutes + "<br>Seconds: " + seconds;

        window.setInterval('timer()', 1000);
    }, 1000)}


