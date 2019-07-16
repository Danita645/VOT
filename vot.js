// Timeline items
const timelineItems = [
  {
    id: "gen-a-1",
    text: "In the beginning, God made the heavens and the earth.",
    x1: 100,
    x2: 397,
    y: 25,
    imgUrl: "cw_images/genesis_bible.jpeg",  
  },

  {
    id: "day-1-5",
    text: "The earth was without form and void.",
    x1: 401,
    x2: 700,
    y: 30,
    imgUrl: "cw_images/genesis_bible.jpeg",
  },
  {
    id: "day-1-10",
    text: "Other stuff happens here.",
    x1: 701,
    x2: 999,
    y: 30
  },
  {
    id: "day-1-15",
    text: "Things change up a bit after that.",
    x1: 1000,
    x2: 1300,
    y: 50
  },
  {
    id: "gen-1-15",
    text: "There was a problem with some fruit.",
    x1: 1301,
    x2: 1600,
    y: 50
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
  Iterate through a map array of timeline items (attached to the viewport's scroll event listener). They fade in and out.  
 
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
       viewportDiv.setAttribute
       ("style", `background-image: url("${item.imgUrl}"); `);
    };

//Does that semicolon 2^^ belong there?



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





/* =================
  BUILD TIMELINE HTML
  
  Main function to generate the HTML for each item
  in our timelineItems array.
  =================== */
function buildTimeline() {
  timelineItems.map(function(item) {
    // This sets the left x value to be in the middle of the fade in and fade out points
    const xPosition = item.x1 + (item.x2 - item.x1);

    /*
      Build our HTML item for each object in the array.

      Note again how the variables are inserted dynamically
      with the ${} notation.

      Specifically note how the styles for each item's
      positioning is applied dynamically via inline styling
      with the "style" attribute. Pay close attention to
      how the value is inserted after the CSS property and
      then a "px" is added directly after. Inspect the HTML
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
      Note how I'm using insertAdjacentHTML rather than innerHTML.
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






 
// Everything below is my code for images

/*  ======================================
    This array is for image items to fade in and out
    ====================================== */
  /*
const timelineImages = [
  {
    id: "image-gen-1",
    imgUrl: "cw_images/genesis_bible.jpeg",
    x1: 125,
    x2: 400,
    y: 100,
  },
]

// Dynamic conditionals for each item 

viewportDiv.addEventListener('scroll', function() {
  const scrollPosition = viewportDiv.scrollLeft;

  timelineImages.map(function(item) {
    return thisImage = (timlineImages[]);

    // This centers left x value between the fade in and fade out points
function buildTimeline() {
timelineImages.map(function(item) {

    const xPosition = item.x1 + (item.x2 - item.x1);


    const html = `
      <div id="${item.id}" class="timeline-imgURL" style="left: ${xPosition}px; top: ${item.y}px;">
        <p class="timeline-imgURL">${item.imgURL}</p>
      </div>
    `;

     return timelineDiv.insertAdjacentHTML('beforeend', html);
  });
};

buildTimeline();

 */