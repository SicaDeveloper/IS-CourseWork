let mybutton = document.getElementById("scroll-button");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

let slide1 = document.getElementById("blog-container");
let slide2 = document.getElementById("blog-container2");
let slide3 = document.getElementById("blog-container3");
let counter = 1;
let leftarrow = document.getElementById("leftArrow");
let rightarrow = document.getElementById("rightArrow");


slide2.style.display ="none";
slide3.style.display = "none"

function changeSlidesLeft(){
 if(counter == 3){
  slide1.style.display = "block";
  slide3.style.display = "none"
  rightarrow.style.display = "block";
 } else{
  slide1.style.display ="none";
  slide2.style.display = "block";
  leftarrow.style.display = "none";
 }
 counter = 2;
}
function changeSlideRight(){
  if (counter == 2) {
    slide2.style.display = "none"; 
    slide1.style.display = "block"; 
    leftarrow.style.display = "block";
  } else {
    slide1.style.display = "none"; 
    slide3.style.display = "block";
    rightarrow.style.display = "none"; 
  }
  counter = 3;
}



