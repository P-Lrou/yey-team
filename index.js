function goPageTwoPartOne() {
  document
    .querySelector(".firstPart")
    .scrollIntoView({ behavior: "smooth", block: "start" });
    document.querySelector('.h2SecondPage').style.animation = "arrivedLeft 2s";
    document.querySelector('.textPresentation').style.animation = "arrivedRigth 2s";
    document.querySelector('.showMore').style.animation = "arrivedRigth 2s";
    setTimeout(() => {
      document.querySelector('.h2SecondPage').style.animation = "";
      document.querySelector('.textPresentation').style.animation = "";
      document.querySelector('.showMore').style.animation = "";
    }, 3000);
}

function goPageTwoPartTwo() {
  document
    .querySelector(".secondPart")
    .scrollIntoView({ behavior: "smooth", block: "start" });
}

document.addEventListener("DOMContentLoaded", () => {
  const __ms = document.querySelector(".micro-slider");
  const __msSlider = new MicroSlider(__ms, {
    indicators: true,
    indicatorText: "",
  });
  const hammer = new Hammer(__ms);
  const __msTimer = 3000;
  let __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);
  __ms.onmouseenter = function (e) {
    clearInterval(__msAutoplay);
  };
  __ms.onmouseleave = function (e) {
    clearInterval(__msAutoplay);
    __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);
  };
  __ms.onclick = function (e) {
    clearInterval(__msAutoplay);
  };
  hammer.on("tap", function (e) {
    clearInterval(__msAutoplay);
  });
  hammer.on("swipe", function (e) {
    clearInterval(__msAutoplay);
    __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);
  });
  let slideLink = document.querySelectorAll(".slider-item");
  if (slideLink && slideLink !== null && slideLink.length > 0) {
    slideLink.forEach((el) =>
      el.addEventListener("click", (e) => {
        e.preventDefault();
        let href = el.dataset.href;
        let target = el.dataset.target;
        if (href !== "#") window.open(href, target);
      })
    );
  }
});

setTimeout(() => {
  document.querySelector('#button').style.animation = "float 4s ease-in-out infinite"
}, 4000);