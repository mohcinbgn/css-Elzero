window.onscroll = function () {
  let scroll = this.scrollY;
  // console.log(scroll);
  if (scroll == 0) {
    home();
  } else if (scroll >= 700 && scroll <= 1200) {
    articles();
  } else if (scroll >= 1750 && scroll <= 2400) {
    gallery();
  } else if (scroll >= 2800 && scroll <= 3000) {
    features();
  }
};
function home() {
  document.title = "Elzero";
}
function articles() {
  document.title = "Elzero - Articles";
}
function gallery() {
  document.title = "Elzero - Gallery";
}
function features() {
  document.title = "Elzero - features";
}
let test = document.querySelectorAll(".main-nav  li  a");
test.forEach(function (e) {
  e.onclick = function () {
    document.title = `Elzero - ${this.textContent}`;
  };
});
