// Iterative scroll function

const timelineInfo = [
  {
    id: "js-day-1-1", 
    text: "In the beginning, God created the heavens and the earth.", 
    x1: 125, 
    x2: 275,
    y:  30,
  } ,
  {
    id: "js-day-1-9", 
    text: "Day 2, or some other thing happens.", 
    x1: 300, 
    x2: 475,
    y:  40,
  }
];

const displayItem = (id, x1) => {
  const pane = document.getElementById("pane");

  return (pane.onscroll = function(){
    console.log(" Hello " + x1)
    if(pane.scrollLeft > x1) {
      document.getElementById(id).classList.add("show");
    }
  })
}

function buildTimeline() {
  const timelineDiv = document.getElementById("timeline");
  timelineInfo.map(function(item) {
    // html content to render
    const htmlContent = `
    <div class="popup" id="${item.id}" data-x1="${item.x1}" data-x2="${item.x2}" data-y="${item.y}" onload="displayItem('${item.id}', ${item.x1})">
      <span class="popuptext">${item.text}</span>
    </div> 
    `;
    return timelineDiv.innerHTML += htmlContent;
  })
}




 /*



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
   
}*/