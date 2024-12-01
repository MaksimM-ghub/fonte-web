console.log('скролл');

const headerScroll = document.getElementById("header");
console.log(headerScroll);
window.addEventListener("scroll", function () {
  const headerPos = window.scrollY;
  if (headerPos > 20) {
    console.log(headerPos);
    headerScroll.classList.add("header-scroll");
  } else {
    headerScroll.classList.remove("header-scroll");
  }
});
