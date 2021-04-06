let body = document.querySelector("body");
let checkboxSelf = document.querySelector(".checkboxSelf");
let checkbox__inner = document.querySelector(".checkboxInner");
let checkboxIcon = document.querySelector(".checkboxIcon");
let boxAfter = document.querySelector(".catBox");
let circle1 = document.querySelector(".circle1");
let circleGrass1 = document.querySelector(".circle__grass");
let circleGrass2 = document.querySelector(".circle__grass:last-child");
let circle2 = document.querySelector(".circle2");
let circle3 = document.querySelector(".circle3");
let circle4 = document.querySelector(".circle4");
let cat = document.querySelector(".cat");
let catImage = document.querySelector(".catImg:last-child");
let isNight = false;

// click start
checkbox__inner.addEventListener("click", function () {
  isNight = !isNight;
  body.classList.toggle("night");
  checkbox__inner.classList.toggle("night");
  checkboxSelf.classList.toggle("night");
  checkboxIcon.classList.toggle("night");
  boxAfter.classList.toggle("night");
  circle1.classList.toggle("night");
  circleGrass1.classList.toggle("night");
  circleGrass2.classList.toggle("night");
  circle2.classList.toggle("night");
  circle3.classList.toggle("night");
  circle4.classList.toggle("night");
  cat.classList.toggle("night");
  if (isNight) {
    setTimeout(() => catImage.classList.add("night"), 1000);
  }else{
      catImage.classList.remove("night");
  }
});
