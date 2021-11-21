function sum(num1,num2) {
    var numsum = num1 + num2
    return console.log(numsum)
}

function sumbut(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var numsum = num1 + num2;
    return document.getElementById("result").innerHTML= "result is:" + numsum;

}
function exp() {
    var expresion = document.getElementById("exp").value;
    var expoutput = eval(expresion);
    return document.getElementById("expout").innerHTML = "expression is:" + expoutput;
}


function askname(){
   name= prompt("enter your name (only string)");
    if (typeof name != 'string')
        askname();
    return name
}
 function askage() {
     age = prompt("enter your age (numbers only and older than 2010)");
     birthyear = 2021 - age;
     if (typeof age != 'number' && birthyear > 2010)
         askage();
     return [age, birthyear]
 }


function userprompt(){
    name = askname() ;
    [age, birthyear] = askage() ;
    document.getElementById("name").innerHTML = "name:" + name;
    document.getElementById("age").innerHTML = "age:" + age;
    document.getElementById("birthyear").innerHTML = "birthyear:" + birthyear;
}

