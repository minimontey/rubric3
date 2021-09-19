function info() {
    let text;
    let name = prompt("Please enter your name") ;
    if (name == "")
    {
        text = "Hi unknown person" ; 
        console.log("Hi unknown person");
    }
    else{
        text = "Hi there, " + name + "! What would you like today?";
        console.log("Hi there, " + name + "! What would like today?");
    }
    document.getElementById("info").innerHTML = text;
    }
function color_change() {
    var x = document.getElementById("color");
    x.style.color = "red";
}
function item_change() {
        var list = document.getElementsByTagName("UL")[0];
        list.getElementsByTagName("LI")[0].innerHTML = "Coffee with Milk";
}
function anotherButton() {
    var btn = document.createElement("button");
    btn.innerHTML = "I'm a useless button";
    document.body.appendChild(btn);
  }

function text() {
    var h = document.createElement("H3");
    var t = document.createTextNode("Your order will be right out!");
    h.appendChild(t);
    document.body.appendChild(h);
  }

