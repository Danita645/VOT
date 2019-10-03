
 


// Timeline items
const timelineItems = [
  { //on_page_load
    id: "on_page_load",
    class: "blue-green",
    textID: "on_page-load",
    imgID: "on_page_load",
    text: "Scroll",
    imgUrl: "cw_images/vot_opening.jpeg",
    x1: 1,
    x2: 200,
    y: 350,
  },
  {//gen-1-1
    id: "gen-1-1",
    class: "gray-pink ",
    textID: "gen-1-1",
    imgID: "image-gen-1-2",
    imgUrl:  "cw_images/david_jorre_unsplash.jpg",
    text: "Genesis: 1-1<br><br>In the beginning, God created the heavens and the earth.",
    x1: 200,
    x2: 400,
    y: 25,
  },
  { //gen-1-2
    id: "gen-1-2",
    class: "blue-green",
    textID: "gen-1-2",
    imgID: "image-gen-1-2",
    imgUrl:  "cw_images/genesis_bible.jpeg", 
    text: "Genesis: 1-2<br><br>The earth was without form and void, and darkness was over the surface of the deep.",
    x1: 400,
    x2: 600,
    y: -15,
  },
  {//gen-1-3
    id: "gen-1-3",
    class: "pink-purple",
    textID: "gen-1-3",
    imgID: "image-gen-1-3",
    imgUrl: "cw_images/gen_1_2.jpeg",
    text: " Genesis: 1-3<br><br>Then God said, 'Let there be light'; and there was light....'<br> God called the light day, and the darkness He called night.",
    x1: 600,
    x2: 800,
    y: 30,
  },
  {//gen-1-8
    id: "gen-1-8",
    class: "blue-green",
    textID: "gen-1-8",
    imgID:  "image-gen-1-8", 
    imgUrl:  "cw_images/gen-1-8.jpeg",
    text: "Genesis: 1-8<br><br>God called the expanse heaven. And there was evening and there was morning, a second day.",
    x1: 800,
    x2: 1000,
    y: 50,
  },
  {//gen-1-11
    id: "gen-1-11",
    class: "blue-green",
    textID: "gen-1-11",
    imgID: "image-gen-1-11", 
    imgUrl: "cw_images/gen_1-11.jpeg",
    text: "Genesis: 1-11<br><br>Then God said, 'Let the earth sprout vegetation: plants yielding seed, and fruit trees on the earth' ... and it was so.",
    x1: 1000,
    x2: 1200,
    y: -5
  },
  {//gen-1-14
    id: "gen-1-14",
    class: "blue-green",
    textID: "gen-1-14",
    imgID: "image-gen-1-14",
    imgUrl: "cw_images/gen_1_14.jpeg",
    text: "Genesis: 1-14<br><br>Then God said, 'Let there be light in the expanse of the heavens to separate the day from the night ...' a fourth day.'",
    x1: 1200,
    x2: 1400,
    y: 25,
  },
  {//gen-1-20
    id: "gen-1-20",
    class: "blue-green",
    textID: "gen-1-20",
    imgID: "image-gen-1-20",
    imgUrl: "cw_images/humberto-braojos-creation.jpg",
    text: "Genesis: 1-20<br><br>Then God said, 'Let the waters teem with swarms of living creatures, and let birds fly above the earth in the open expanse of the heavens.' ",
    x1: 1400,
    x2: 1600,
    y: 2,
  },
]
/*   ============================
    addition of Psalms below, the x1 and x2 coordinates will change 
     ============================  */  
/*
{   //psalm-23
    id: "psalm-23",
    textID: "psalm-23",
    imgID: "image-psalm-23",
    imgUrl: "cw_images/psalm_23.jpeg",
    text: "Psalm 23<br><br>The Lord is my shepherd, I shall not want.<br>He makes me lie down in green pastures;<br>He leads me besdie quiet waters.<br>He restores my soul;<br>He guides me in the paths of righteousnes<br>For His name's sake.<br>Even though I walk through the valley of the shadow of death,<br>I fear no evil, for you are with me;<br>Your rod and Your staff, they comfort me.<br>You prepare a table before me in the presence of my enemies;<br>You have anointed my head with oil;<br>My cup overflows.<br>Surely goodness and lovingkindness will follow me <br>all the days of my life,<br>And I will dwell in the house of the Lord forever.",
     x1: 1600,
     x2: 1800,
     y: 30,
}, 
{ //psalm-67
    id: "psalm-67",
    textID: "psalm-67",
    imgID:   "image-psalm-67",
    imgUrl:  "cw_images/psalm_67_rod_long.jpg",
    text: "Psalm 67: 1<br><br>God be gracious to us and bless us<br>And cause His face to shine upon us",
    x1: 1800,
    x2: 2000,
    y: 285,
},
{//psalm-82
  id: "psalm-82",
  textID: "psalm-82",
  imgID:   "image-psalm-82",
  imgUrl: "cw_images/brett_zeck_unsplash.jpg",
  text: "Psalm 82: 8<br><br>Arise, O God, Judge the earth; for you shall inherit all the nations.",
  x1: 2200,
  x2: 2400,
  y: -25,
},*/





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
      viewportDiv.setAttribute("style", `background-image: url("${item.imgUrl}"); `); 
    };


// Dynamic conditionals for each item 


    if (scrollPosition > item.x2) {
      thisItem.classList.add('fade-out');
    };


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

/* ====================
Jump function  -very important
=======================
if (scrollPosition > 1400) {
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

      Styles for each item's position are applied dynamically via inline styling with the "style" attribute.  Values are inserted after the CSS property and a "px" is added directly after. Inspect the HTML source in the console.log to see how it looks.
    */
    const html = `
      <div id="${item.id}" class = "${item.class} ${item.id}" style="left: ${xPosition}px; top: ${item.y}px;">
        <p class>${item.text}</p>
      </div>

      <div id="${item.id}" class="timeline-image" style="left: ${xPosition}px; top: ${item.y}px;">
        </div>
    `;

/*The code above -3 line div is copped from images.js*/


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

// also imported from the bottom of the image file
/*$("#viewport").delay(6000).animate({"opacity": "1"}, 1700); */
/*
  This is where the function is called to build the timeline HTML.
  Note that this is better than the onload because as long as the <script> call is at the end of the page directly before the closing </body> tag this will execute without error.
*/
buildTimeline();




