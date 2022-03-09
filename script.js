function test() {
     alert('test has been run succesfully');
 }

function o() {
  alert("Coming soon");
}

function myFunction() {
   var element = document.body;
   element.classList.toggle("daark-modee");
}

var message="Sorry, right click function is Disabled!";

function clickIE4(){
if (event.button==2){
alert(message);
return false;
 }
}

function clickNS4(e){
if (document.layers||document.getElementById&&!document.all){
if (e.which==2||e.which==3){
alert(message);
return false;
}
}
}

if (document.layers){
document.captureEvents(Event.MOUSEDOWN);
document.onmousedown=clickNS4;
}
else if (document.all&&!document.getElementById){
document.onmousedown=clickIE4;
}

document.oncontextmenu=new Function("alert(message);return false")
