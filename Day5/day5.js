
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


