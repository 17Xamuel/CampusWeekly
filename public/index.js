const _menu = document.querySelector(".menu-bars");
_menu.addEventListener("click", () => {
  document.querySelector(".side").classList.toggle("active");
});
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
