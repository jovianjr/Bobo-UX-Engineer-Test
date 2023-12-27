function toggleFooter() {
  const footerContent = document.querySelector(".footer-content");

  const isShow = document.querySelector(".show");
  footerContent.classList.toggle("show");

  const showBtn = document.querySelector(".show-btn");
  const showBtnIcon = document.querySelector(".show-btn-icon");
  const showBtnText = showBtn.querySelector("span");

  if (isShow) {
    showBtnText.textContent = "Collapse all";
    showBtnIcon.classList.add("fa-chevron-down");
    showBtnIcon.classList.remove("fa-chevron-up");
  } else {
    showBtnText.textContent = "Expand all";
    showBtnIcon.classList.add("fa-chevron-up");
    showBtnIcon.classList.remove("fa-chevron-down");
  }
}

let slideNext = document.querySelector("#slide-next");
let slideBack = document.querySelector("#slide-back");

slideNext.onclick = function () {
  sideScroll("right");
};

slideBack.onclick = function () {
  sideScroll("left");
};

function sideScroll(direction) {
  let e = document.querySelector(".container-products");
  let distance = 30;
  let scrollAmount = 0;

  if (direction == "left") {
    scrollAmount = e.scrollLeft - distance;
  } else {
    scrollAmount = e.scrollLeft + distance;
  }

  e.scrollLeft = scrollAmount;

  slideNext.classList.remove("hidden");
  slideBack.classList.remove("hidden");

  if (scrollAmount >= e.scrollWidth - e.clientWidth) {
    slideNext.classList.add("hidden");
  }

  if (scrollAmount <= 0) {
    slideBack.classList.add("hidden");
  }
}
