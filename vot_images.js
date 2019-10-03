
/*
 ======================================
    This array is for image items to fade in and out
    ======================================  */
   
const timelineImages = [
  {
    /*=================================
     this is the book-fire image onload. 
     It must preceed the sequence and load 
     on page-load. Then fade with the others.
    ====================================   */
    //onpageload
    id: "on_page_load",
    imgUrl: "cw_images/vot_opening.jpeg",
    x1: 1,
    x2: 200,
    y: 40,
  },
  /*{//gen-1-1
    id: "image-gen-1-1",
    imgUrl: "cw_images/david_jorre_unsplash.jpg",
    x1: 200,
    x2: 400,
    y:40,
  },  
  {
    id: "image-gen-1-2",
    imgUrl:  "cw_images/genesis_bible.jpeg", 
    x1: 400,
    x2: 600,
    y: 40,
  },

  { 
      id: "image-gen-1-3", 
      imgUrl: "cw_images/gen_1_2.jpeg",
      x1: 600,
      x2: 800,
      y: 40,
    },

    { 
        id: "image-gen-1-8", 
        imgUrl: "cw_images/gen-1-8.jpeg",
        x1: 800,
        x2: 1000,
        y: 40,
      },
      { 
        id: "image-gen-1-11", 
        imgUrl: "cw_images/gen_1-11.jpeg",
        x1: 1000,
        x2: 1200,
        y: 40,
      }, 
      {
        id: "image-gen-1-14",
        imgUrl: "cw_images/gen_1_14.jpeg",
        x1: 1200,
        x2: 1400,
        y: 40,
      },
      {
        id: "image-psalm-23",
        imgUrl: "cw_images/psalm_23.jpeg",
        x1: 1400,
        x2: 1600,
        y: 40,
      },

      {
        id: "image-psalm-67",
        imgUrl: "cw_images/psalm_67_rod_long.jpg",
        x1: 1600,
        x2:  1800,
        y: 55,
      },
      {
        id: "image-psalm-82",
        imgUrl: "cw_images/brett_zeck_unsplash.jpg",
        x1: 1800,
        x2:  2000,
        y: 40,
      },*/
]

/*   ===========================================  
    Timeline and viewport divs are defined in vot.js file
     ==========================================   */

    // const viewportDiv = document.getElementById
    // ('js-viewport');
    // const timelineDiv = document.getElementById
    // ('js-timeline');

    /* =========================================== 
        Custom javascript attached to the viewport's scroll event listener make images fade in and out.

        Notes:  https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
       ===========================================   

    viewportDiv.addEventListener('scroll', function() {
      */
 /* Track the scroll position of the viewport */

 const scrollPosition = viewportDiv.scrollLeft;

// Dynamic conditionals for each item
timelineImages.map(function(item) {
   const thisImage = document.getElementById(item.id);

   if (scrollPosition > item.x1 && scrollPosition <= item.x2) { 
    thisImage.classList.add('fade-in');
    viewportDiv.setAttribute("style", `background-image: url("${item.imgUrl}"); `); 
    };


     // Dynamic conditionals for each item 


     if (scrollPosition > item.x2) {
        thisImage.classList.add('fade-out');
      };
  
  
      if (scrollPosition >= item.x2){
        setTimeout(function(){
        thisImage.classList.remove('fade-in', 'fade-out');
      }, 200);
    };
  
      if (scrollPosition <= item.x2 && scrollPosition > item.x1){
        thisImage.classList.add('fade-in');
      };
  
      if (scrollPosition < item.x1){
        setTimeout(function(){
        thisImage.classList.remove('fade-in', 'fade-out');
      }, 200);
    };
  
  
   
  }, false);
  
  
  
  /* =================
    BUILD TIMELINE HTML
    
    Main function to generate the HTML for each item
    in our timelineImages array.
    =================== */
  function buildTimeline() {
    timelineImages.map(function(item) {
      // This sets the left x value to be in the middle of the fade in and fade out points
      const xPosition = item.x1 + (item.x2 - item.x1);
  
      /*
        Build the HTML item for each object in the array.
  
       Variables are inserted dynamically with the ${} notation.
  
        Styles for each item's
        position are applied dynamically via inline styling
        with the "style" attribute.  Values are inserted after the CSS property and a "px" is added directly after. Inspect the HTML
        source in the console.log to see how the final
        rendering looks.
      */




      /* This was commented out for sept 16 test */ 
      const html = `
        <div id="${item.id}" class="timeline-image" style="left: ${xPosition}px; top: ${item.y}px;">
        </div>
      `;
  
      /*
        Append the HTML block to the timeline div.
  
        See more here:
        https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
      */
      return timelineDiv.insertAdjacentHTML('beforeend', html);
    });
  };
  
 /* This was commented out for sept 16 test 
  $("#viewport").delay(6000).animate({"opacity": "1"}, 1700); */

  
  buildTimeline();
  
  
  
  
  