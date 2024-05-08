//working on tabs
let home = document.getElementById("in-home");
let envelope = document.getElementById("in-envelope");
let tool = document.getElementById("in-tool");

//tabs
let home_tab = document.getElementById("home");
let env_tab = document.getElementById("contact");
let tool_tab = document.getElementById("tool");

//pointers
let home_point = document.getElementById("h-p");
let env_point = document.getElementById("e-p");
let tool_point = document.getElementById("t-p");


let win = window;
win.addEventListener('load',() => {
    home_tab.style.display = "block";
})

home.addEventListener("click",homeFunc,false);
envelope.addEventListener("click",envFunc,false);
tool.addEventListener("click", toolFunc,false);


function homeFunc() {
    home_tab.style.display = "block";
    env_tab.style.display = "none";
    tool_tab.style.display = "none";

    home_point.style.display = "block";
    env_point.style.display = "none";
    tool_point.style.display = "none";
}

function envFunc() {  
    home_tab.style.display = "none";
    env_tab.style.display = "block";
    tool_tab.style.display = "none";

    home_point.style.display = "none";
    env_point.style.display = "block";
    tool_point.style.display = "none";
}

function toolFunc() {
    home_tab.style.display = "none";
    env_tab.style.display = "none";
    tool_tab.style.display = "block";

    home_point.style.display = "none";
    env_point.style.display = "none";
    tool_point.style.display = "block";
}

var gith = document.getElementById("github");

gith.addEventListener("click", () => {
    window.open("https://github.com/Excel909", "_blank");
}, false);

var hire = document.getElementById("hire");

hire.addEventListener("click", envFunc,false);


//for next button

var next_one = document.getElementById("next_one");
var next_two = document.getElementById("next_two");
var next_three = document.getElementById("next_three");

next_one.addEventListener("click",envFunc,false);
next_two.addEventListener("click",toolFunc,false);
next_three.addEventListener("click",homeFunc,false);

