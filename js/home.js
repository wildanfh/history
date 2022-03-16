// feature event
const cardFeatureContainer = document.querySelector(".col-feature2");
let preBtn = document.querySelector(".kiri");
let nxtBtn = document.querySelector(".kanan");

let dimensionContainer = cardFeatureContainer.getBoundingClientRect();
let widthContainer = dimensionContainer.width;
console.log(widthContainer);

nxtBtn.addEventListener("click", () => {
  cardFeatureContainer.scrollLeft += widthContainer;
});

preBtn.addEventListener("click", () => {
  cardFeatureContainer.scrollLeft -= widthContainer;
});

// hero event
const colHero1 = document.querySelector(".col-hero1");
const colHero2 = document.querySelector(".col-hero2");

window.addEventListener("load", function () {
  colHero1.classList.add("cmuncul");
  colHero2.classList.add("cmuncul");
});

// recent article & feature article
$(window).scroll(function () {
  let wScroll = $(this).scrollTop();

  // recent
  if (wScroll > $(".col-recent1").offset().top - 300) {
    $(".col-recent1 .card-recent-container").each(function (i) {
      setTimeout(function () {
        $(".col-recent1 .card-recent-container").eq(i).addClass("muncul");
      }, 400 * (i + 1));
    });
  }
});

$(window).scroll(function () {
  let wScroll = $(this).scrollTop();

  // feature
  if (wScroll > $(".col-feature2").offset().top - 400) {
    $(".col-feature2 .card-feature-container").each(function (i) {
      setTimeout(function () {
        $(".col-feature2 .card-feature-container").eq(i).addClass("muncul1");
      }, 400 * (i + 1));
    });
  }
});
