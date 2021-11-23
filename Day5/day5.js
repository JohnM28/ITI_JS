
function cache() {
    if (cached_name !== undefined && cached_pass !== undefined ) {
        document.getElementById('UserName').value = cached_name;
        document.getElementById('Pass').value = cached_pass;
        console.log(cached_name)
    }
    else{
    }
}
var cached_name
var cached_pass

function save_login(){

    let name = document.getElementById('UserName').value;
    let password = document.getElementById('Pass').value;
    window.localStorage.setItem("user", JSON.stringify(name));
    window.localStorage.setItem("pass", JSON.stringify(password));
    cached_name = JSON.parse(window.localStorage.getItem('user'))
    cached_pass = JSON.parse(window.localStorage.getItem('pass'))
    console.log(cached_name)
    console.log(cached_pass)


}

function showDataItems(){
    var person1 ={id:1,name:"Ahmed",age:22,skills:["test1","test5"],isLeader:false,address:null};
    var person2 ={id:2,name:"Mohammed",age:23,skills:["test1","test4"],isLeader:false,address:null};
    var person3 ={id:3,name:"Mina",age:21,skills:["test3","test2"],isLeader:false,address:null};
    var arrayOfObjects =[]
    arrayOfObjects.push(person1,person2,person3);

    var myJson = JSON.stringify(arrayOfObjects);
    console.log(myJson)
    var showDat = document.getElementById("show");
    console.log(showDat)
    for(obj of arrayOfObjects){

        console.log(obj["name"] +":" +obj["skills"]);
        var d =document.createElement("div");
        var text = document.createTextNode("name: "+ obj["name"] +" "+"skills:" +obj["skills"]);
        d.appendChild(text);
        showDat.appendChild(d);

}}

function showData(){
    var id = document.getElementById("text").value;
    var req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if (this.readyState ==4 && this.status ==200){
            var res = JSON.parse(this.responseText)
            // console.log(res)
            document.getElementById("div").innerHTML = "<br> first name: " + res.data.first_name;
            document.getElementById("div2").innerHTML =  "<br> last name: " + res.data.last_name;
            document.getElementById("div3").innerHTML =  "<br> avatar <br><img src = " + res.data.avatar +">"
        }
    }
    req.open("GET","https://reqres.in/api/users/" +id,true);
    req.send();

}


var req = new XMLHttpRequest();
req.onreadystatechange = function(){
        if (this.readyState ==4 && this.status ==200){
            var res = JSON.parse(this.responseText)
            var select = document.getElementById("stdname")
            for(var i=0;i<res.data.length;i++){
                var optn = document.createElement("option");
                optn.value = res.data[i].first_name;
                optn.appendChild(document.createTextNode(res.data[i].first_name));
                select.appendChild(optn);
            }
            var data = res.data
            function showinfo(){
                var arrayOfobj = data.filter(obj=>{return obj.first_name === select.value});
            document.getElementById("div").innerHTML = "<br> first name: " +arrayOfobj[0].first_name;
            document.getElementById("div2").innerHTML =  "<br> last name: " +arrayOfobj[0].last_name;
            document.getElementById("div3").innerHTML =  "<br> avatar <br><img src = " + arrayOfobj[0].avatar +">"
            }
        }
    }

    req.open("GET","https://reqres.in/api/users",true);
    req.send();

