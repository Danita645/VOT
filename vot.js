

//On scroll function
// window.onscroll = function(){myScrollFunction()};
const pane = document.getElementById("pane");
pane.onscroll = function(){myScrollFunction()};
function myScrollFunction() {
console.log("I was called.");


if(pane.scrollLeft > 125) {
  document.getElementById("myPopupHalf").classList.add("show");
}
  
if(pane.scrollLeft > 272 || pane.scrollLeft < 125) {
    document.getElementById("myPopupHalf")
    .classList.remove("show");
}

if(pane.scrollLeft > 200) {
  document.getElementById("myPopup1").classList.add("show");
}

if(pane.scrollLeft > 300 || pane.scrollLeft < 200) {
    document.getElementById("myPopup1")
    .classList.remove("show");
}

if(pane.scrollLeft > 300){
  document.getElementById("myPopupHalf2")
  .classList.add("show");
}

if(pane.scrollLeft > 380 || pane.scrollLeft < 300) {
  document.getElementById("myPopupHalf2")
  .classList.remove("show");
}




if(pane.scrollLeft > 320){
    document.getElementById("myPopup2")
    .classList.add("show");
}

  if(pane.scrollLeft > 400 || pane.scrollLeft < 320) {
    document.getElementById("myPopup2")
    .classList.remove("show");
 }

 if(pane.scrollLeft > 400) {
  document.getElementById("myPopupHalf3")
  .classList.add("show");
}

if(pane.scrollLeft > 480|| pane.scrollLeft < 400) {
  document.getElementById("myPopupHalf3")
  .classList.remove("show"); 
}


if(pane.scrollLeft > 420) {
  document.getElementById("myPopup3")
  .classList.add("show");
}

if(pane.scrollLeft > 500 || pane.scrollLeft < 420) {
  document.getElementById("myPopup3")
  .classList.remove("show"); 
}


if(pane.scrollLeft > 500) {
  document.getElementById("myPopup4")
  .classList.add("show");
}

if(pane.scrollLeft > 600 || pane.scrollLeft < 500) {
  document.getElementById("myPopup4")
  .classList.remove("show"); 
  } 
}