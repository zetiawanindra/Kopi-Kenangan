// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// const navbarExtra = document.querySelector(".navbar-extra");

// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// document.querySelector("#hamburger-menu").onclick = () => {
//   navbarExtra.replaceWith(feather.icons["x"].toSvg());
// };

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
