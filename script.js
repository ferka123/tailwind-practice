const burgerBtn = document.getElementById("burger-icon");
const burgerMenu = document.getElementById("burger-menu");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle('burger-toggled');
  const status = burgerMenu.classList.toggle("menu-opened");
  if (!status) {
    [...burgerMenu.children].forEach((el) =>
      el.classList.remove("submenu-opened")
    );
  }
});

const burgerLinks = document.querySelectorAll(".burger-menu-link");
burgerLinks.forEach((element) => {
  element.addEventListener("click", (e) => {
    const status = e.target.parentElement.classList.contains("submenu-opened");
    [...burgerMenu.children].forEach((el) =>
      el.classList.remove("submenu-opened")
    );
    if (!status) {
      e.target.parentElement.classList.toggle("submenu-opened");
    }
  });
});
