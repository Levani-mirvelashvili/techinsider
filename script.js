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
var modal = document.getElementById("myModal");

var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}
