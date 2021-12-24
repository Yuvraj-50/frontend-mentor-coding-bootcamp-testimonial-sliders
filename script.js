const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const review1 = document.querySelector(".review-1");
const review2 = document.querySelector(".review-2");

prev.addEventListener("click", function () {
  console.log("i got clicked");
  review2.classList.toggle("none");
  review1.classList.toggle("none");
});

next.addEventListener("click", function () {
  console.log("you ");
  review2.classList.toggle("none");
  review1.classList.toggle("none");
});
