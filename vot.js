// Timeline items
const timelineItems = [
  {
    id: "gen-1-1",
    text: "In the beginning, God created the heavens and the earth.<br> Gen: 1-1",
    x1: 100,
    x2: 350,
    y: 25,
  },

  {
    id: "gen-1-2",
    text: "The earth was without form and void, and darkness was over the surface of the deep. <br>Gen: 1-2",
    x1: 351,
    x2: 750,
    y: 25,
  },
  {
    id: "gen-1-3",
    text: "Then God said, 'Let there be light'; and there was light....<br> God called the light day, and the darkness He called night. <br>Gen: 1-3",
    x1: 751,
    x2: 1050,
    y: 30
  },
  {
    id: "gen-1-8",
    text: "God called the expanse heaven. And there was evening and there was morning, a second day.<br> Gen: 1-8",
    x1: 1050,
    x2: 1300,
    y: 50
  },
  {
    id: "gen-1-11",
    text: "Then God said, 'Let the earth sprout vegetation: plants yielding seed, and fruit trees on the earth' ... and it was so. <br>Gen 1:11",
    x1: 1300,
    x2: 1600,
    y: -5
  },
  {
    id: "gen-1-14",
    text: "Then God said, 'Let there be light in the expanse of the heavens to separate the day from the night ...' a fourth day. <br>Gen 1-14'",
    x1: 1600,
    x2: 1900,
    y: 195
  },

]

/*  ===========================================
  The timeline and viewport divs are outside all other functions.
   ========================================  */

     const viewportDiv = document.getElementById('js-viewport');
     const timelineDiv = document.getElementById('js-timeline');


/* =======================
  TIMELINE DYNAMIC DISPLAY
  ========================
  This is a custom scroll event listener that makes text fade in and out based on scroll position in viewport.  
 
  Notes:
  https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
*/

viewportDiv.addEventListener('scroll', function() {
  const scrollPosition = viewportDiv.scrollLeft;
 
  // Dynamic conditionals for each item 
  timelineItems.map(function(item) {
    const thisItem = document.getElementById(item.id);
  
    if (scrollPosition > item.x1 && scrollPosition <= item.x2) {
      thisItem.classList.add('fade-in');
       
    };

//Does that semicolon 2^^ belong there?
// Dynamic conditionals for each item 


    if (scrollPosition > item.x2) {
      thisItem.classList.add('fade-out');
    };
//my code below

    if (scrollPosition >= item.x2){
      setTimeout(function(){
      thisItem.classList.remove('fade-in', 'fade-out');
    }, 200);
  };

    if (scrollPosition <= item.x2 && scrollPosition > item.x1){
      thisItem.classList.add('fade-in');
    };

    if (scrollPosition < item.x1){
      setTimeout(function(){
      thisItem.classList.remove('fade-in', 'fade-out');
    }, 200);
  };


  });
}, false);

/*
Jump function  

if (scrollPosition > 1900) {
  viewportDiv.scrollLeft = 3500;
}
 */



/* =================
  BUILD TIMELINE HTML
  
  Main function to generate the HTML for each item
  in our timelineItems array by iterating over an array.
  =================== */
function buildTimeline() {
  timelineItems.map(function(item) {
    // This sets the left x value to be in the middle of the fade in and fade out points
    const xPosition = item.x1 + (item.x2 - item.x1);

    /*
      Build  HTML item for each object in the array.

      Variables are inserted dynamically with the ${} notation.

      Styles for each item's position are applied dynamically via inline styling with the "style" attribute.  Values are inserted after the CSS property and a "px" is added directly after. Inspect the HTML
      source in the console.log to see how the final
      rendering looks.
    */
    const html = `
      <div id="${item.id}" class="timeline-item" style="left: ${xPosition}px; top: ${item.y}px;">
        <p class="timeline-text">${item.text}</p>
      </div>
    `;

    /*
      Append the HTML block to the timeline div.
      I'm using insertAdjacentHTML rather than innerHTML.
      This is doing the same thing we were doing before with
      "innerHTML+=..." but it's just better for performance.

      See more here:
      https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
    */
    return timelineDiv.insertAdjacentHTML('beforeend', html);
  });
};

/*
  This is where the function is called to build the timeline HTML.
  Note that this is better than the onload we were doing before
  with the body tag because as long as the <script> call is
  at the end of the page directly before the closing </body>
  tag this will execute without error.
*/
buildTimeline();




