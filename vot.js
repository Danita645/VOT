
	/*On click, the JS popup opens and closes
	function myFunction(myFancyId) {
    var popups = document.getElementsByClassName("popuptext");
  for (var i=0;  i<popups.length; i++){ 
    popups[i].classList.remove("show");   
  }
  	var popup = document.getElementById(myFancyId);
		popup.classList.add("show");
  } */

//On scroll function
// window.onscroll = function(){myScrollFunction()};
const pane = document.getElementById("pane");
pane.onscroll = function(){myScrollFunction()};
function myScrollFunction() {
  console.log("I was called.");
  
if(pane.scrollLeft > 200) {
  document.getElementById("myPopup1").classList.add("show");
}

if(pane.scrollLeft > 300 || pane.scrollLeft < 200) {
    document.getElementById("myPopup1").classList.remove("show");
}

if(pane.scrollLeft > 300){
    document.getElementById("myPopup2")
    .classList.add("show");
  }

  if(pane.scrollLeft > 400 || pane.scrollLeft < 300) {
    document.getElementById("myPopup2")
    .classList.remove("show");
  }
}

