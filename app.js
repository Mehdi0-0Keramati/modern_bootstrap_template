
// login form//////
var inner = document.getElementById("inner");
function openregister() {
    inner.style.transform = "rotateY(-180deg)";
}
function openlogin() {
    inner.style.transform = "rotateY(0deg)";
}
// login form/////////////////









// search-box /////////////////////

var searchbox = document.getElementById("searchbox");
var searchicon = document.getElementById("searchicon");
searchicon.onclick = function () {
    searchbox.classList.toggle("activesearch");
}

// search-box /////////////////////



// social-menu///////////
let menu = document.querySelector('.menu');
let toggle = document.querySelector('.toggle');


toggle.onclick = function () {
    menu.classList.toggle('active');
}



// social-menu//////

