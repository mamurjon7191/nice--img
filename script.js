"use strict";
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");
let imgSmall = document.querySelectorAll(".img1");
let imgBig = document.querySelectorAll(".up");

let a = -300;
let b = 0;
nextBtn.addEventListener("click", function () {
  a += 100;
  b -= 100;
  for (let el of imgSmall) {
    if (a < 100) {
      el.style.setProperty("--height", a);
    } else if (a == 100) {
      a = -300;
      el.style.setProperty("--height", a);
    }
  }
  for (let el of imgBig) {
    if (b > -400) {
      el.style.setProperty("--heightBig", b);
    } else if (b == -400) {
      b = 0;
      el.style.setProperty("--heightBig", b);
    }
  }
});

prevBtn.addEventListener("click", function () {
  a -= 100;
  b += 100;
  for (let el of imgSmall) {
    if (a <= 0) {
      el.style.setProperty("--height", a);
    } else if (a == -400) {
      a = 0;
      el.style.setProperty("--height", a);
    }
  }
  for (let el of imgBig) {
    if (b > -400) {
      el.style.setProperty("--heightBig", b);
    } else if (b == 100) {
      b = -300;
      el.style.setProperty("--heightBig", b);
    }
  }
  console.log(a, b);
});
