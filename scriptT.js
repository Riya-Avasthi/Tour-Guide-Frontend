// document.addEventListener("DOMContentLoaded", function () {
//     const slideRightButton = document.getElementById("slideRight");
//     const slideLeftButton = document.getElementById("slideLeft");
//     const rightBox = document.querySelector(".rightbox");
//     let currentIndex = 0;
//     const images = ["Feature-image-Rajasthan-fort.jpg", "manali.jpg", "Beaches.jpg","Statue-of-Unity.jpg"]; // Update with your image URLs

//     function changeBackground() {
//         document.body.style.backgroundImage = `url(${images[currentIndex]})`;
//     }

//     function scrollRight() {
//         currentIndex = (currentIndex + 1) % images.length;
//         rightBox.scrollLeft += 300; // Adjust as needed
//         changeBackground();
//     }

//     function scrollLeft() {
//         currentIndex = (currentIndex - 1 + images.length) % images.length;
//         rightBox.scrollLeft -= 300; // Adjust as needed
//         changeBackground();
//     }

//     slideRightButton.addEventListener("click", scrollRight);
//     slideLeftButton.addEventListener("click", scrollLeft);
// });



// // Get references to the SVG elements
// const slideLeftSVG = document.getElementById('slideleft');
// const slideRightSVG = document.getElementById('slideright');
// const b1Divs = document.querySelectorAll('.b1');

// // Add click event listeners to the SVG elements
// slideLeftSVG.addEventListener('click', function () {
//     // Scroll all b1 divs left by 100px
//     b1Divs.forEach(function (div) {
//         div.scrollBy(-100, 0);
//     });
// });

// slideRightSVG.addEventListener('click', function () {
//     // Scroll all b1 divs right by 100px
//     b1Divs.forEach(function (div) {
//         div.scrollBy(100, 0);
//     });
// });

let currentIndex = 1;
const totalImages = 6;
const images = ["images/localguide.jpg", "images/bookg.png"];

window.onload = function () {
  const imgElement = document.getElementById('guideImage');
  startBackgroundChange();
  startImageChange();

  function startBackgroundChange() {
    setInterval(changeBackground, 3000);
  }

  function changeBackground() {
    currentIndex = (currentIndex % totalImages) + 1;
    document.body.className = `image${currentIndex} fit-image`; // Add fit-image class
  }

  function startImageChange() {
    let index = 0;
    setInterval(function () {
      index = (index + 1) % images.length;
      imgElement.src = images[index];
    }, 2000);
  }
};

// let scrollcontainer = document.querySelector('.swiper-wrapper');
// let backbtn = document.getElementsByClassName("swiper-button-prev");   //back id
// let nextbtn = document.getElementsByClassName("swiper-button-next");    //next id

// scrollcontainer.addEventListener('wheel', (e)=>{
//     e.defaultPrevented();
//     scrollcontainer.scrollLeft += e.deltaY;
//     scrollcontainer.style.scrollBehavior = 'auto';
// });
// nextbtn.addEventListener("click", ()=>{
// scrollcontainer.scrollLeft += 900
// scrollcontainer.style.scrollBehavior = 'smooth';
// });
// backbtn.addEventListener("click", ()=>{
// scrollcontainer.scrollLeft -= 900
// scrollcontainer.style.scrollBehavior = 'smooth';
// });
