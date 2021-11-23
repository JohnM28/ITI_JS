var mouse
function mouse_pressed(event) {
    switch (event.button) {
        case 0:
            mouse = ('Left mouse button');
            break;
        case 1:
            mouse = ('Middle mouse button');
            break;
        case 2:
            mouse = ('Right mouse button');
            break;
    }
    return mouse
}
function key_pressed(event){
    alert(`Events: key=${event.key} code=${event.code} mouse=${mouse}`);
    console.log(event)
}


function time(){
    var moving_clock = setInterval(function() {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.getElementById("date").value = time;
    },1000)
    window.addEventListener('keydown', function(e) {
    if (e.altKey == true && (e.key == 'w' || e.key == "W"))
    clearInterval(moving_clock);
    })
}

var name

function save_cred(){
    name = document.getElementById('UserName').value;

}

function border_focus(){
    document.getElementById("UserName").style.border="solid 1px blue";
}

function border_outfocus() {
  document.getElementById("UserName").style.border = "";
}

function pass_validation(){
    let pass = document.getElementById('Pass').value;
    let pass1 = document.getElementById('Pass1').value;
    if (pass != pass1){
        document.getElementById("valid").innerHTML = "Invalid password"
        document.getElementById('Pass1').style.backgroundColor = "gray"
    }
    if (pass == pass1){
        document.getElementById("valid").innerHTML = ""
        document.getElementById('Pass1').style.backgroundColor = "white"
    }
}

function show_pass(){
  let pass = document.getElementById("Pass");
  if (pass.type === "password")
    pass.type = "text";
  else
    pass.type = "password";
}

function change_star(number){
    const source = document.getElementById("star"+ number);
    console.log(source.src)
    if (source.src.endsWith('empty_star.png'))
        source.src = "res/Filled_star.png";
    else
        source.src = "res/empty_star.png";
}

function resize(){
     var size=document.getElementById("search");
     size.setAttribute("style", 'width:600px;')
}

function resizex2(){
    var size=document.getElementById("search");
     size.setAttribute("style", 'width:200px;')
}

function changeOpacity(myImage){
    var opacity =1;
    var time = setInterval(function(){
        if (opacity<=0.3){clearInterval(time);
        }
        myImage.style.opacity=opacity;
        opacity =opacity-0.1;

        },100)
}
function changeOp(myImage){
    var opacity = 0.3;
    var time = setInterval(function(){
        if (opacity>=1){clearInterval(time);
        }
        myImage.style.opacity=opacity;
        opacity =opacity+0.1;

        },100)

}