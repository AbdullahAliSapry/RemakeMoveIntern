// let landingPage = document.querySelector(".home");

// let imageArray = ["home1.jpg" , "home2.jpg" , "home3.jpg"];

// landingPage.style.backgroundImage = 'url("img/home1.jpg)';

// let randomNumber = Math.floor(Math.random() * imageArray.length );

// let randomOption = true;

// function randomizeImgs(){
//   if( randomOption === true){
//     setInterval(() => {

//       let randomNumber = Math.floor(Math.random() * imageArray.length );

//       landingPage.style.backgroundImage = 'url("img/'+  imageArray[randomNumber] +'")';

//     }, 4000);

//   }
// }
// randomizeImgs();

let header = document.querySelector("header");
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

let lis = navbar.getElementsByTagName("li");

var cards = Array.from(document.querySelectorAll(".custom-container>div"));

cards.forEach((el) => {
  el.querySelector("div").classList.add("box-img");
  el.querySelector("h3").classList.add("box-title");
  el.querySelector("span").classList.add("box-text");
});


Array.from(lis).forEach((el) => {
  el.classList.add("relative");
  el.getElementsByTagName("a")[0].classList.add("font-[500]", "text-[1rem]");
});

menuIcon.onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const textElements = document.querySelectorAll(".text-change");
  if (window.scrollY > 50) {
    header.classList.add("bg-white");
    textElements.forEach((el) => {
      el.classList.remove("text-mainColor");
      el.classList.add("text-black");
    });
  } else {
    header.classList.remove("bg-white");
    textElements.forEach((el) => {
      el.classList.remove("text-black");
      el.classList.add("text-mainColor");
    });
  }
});
