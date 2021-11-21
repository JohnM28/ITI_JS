tips=["Start With The Basics","Download A Code Editor Or Use One Online","Use A Good Online Course","Don't Be Afraid To Practice","Connect With A Mentor",
    "Understand Every Line Of Your Code"," Find People To Learn JavaScript With","Make Use Of Different Types Of Resources",]

function show_tips(){
        let tip = tips[Math.floor(Math.random()*tips.length)];
        document.getElementById("text").innerHTML = "Tip of the day: ";
        document.getElementById("tip").innerHTML = tip;
        document.getElementById("tip").style.cssText += "border-style:solid";
}

function datetime(){
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.getElementById("date").innerHTML = time +" "+ date;

}

function enter_date(){
    try{
    let date2= prompt("enter the date in following format (DD – MM – YYYY) ");
    let current_date = new Date(date2);
    confirm(current_date)
    }
    catch(e){
        alert(e.message)
    }

}


var arr1= []
function num_array(){
    arr1 = document.getElementById("arrnum").value.split(",");
    console.log(arr1)
    var remove_num= document.getElementById("numremove").value;
    console.log(remove_num)
    for (var numbers in arr1){
         if (arr1[numbers] === remove_num)
             arr1.splice(numbers, 1);
    }
    document.getElementById("arrfinal").innerHTML = arr1;

}
arr2 = []
var sum= 0

function char_array(){
    arr2 = document.getElementById("arrnum1").value.split(",");
    console.log(arr2)
    var count_char= document.getElementById("numremove1").value;
    console.log(count_char)
      for (var chars in arr2) {
        if (count_char === arr2[chars]) {
        sum++;
    }}
    document.getElementById("arrfinal1").innerHTML = "It shows: "+ sum +" Times";
    sum = 0;

}
arr3 = []
function arr_sort(){
    arr3 = document.getElementById("arrnum3").value.split(",");
    arr3.sort();
    console.log(arr3)
    document.getElementById("arrfinal3").innerHTML = arr3;
}