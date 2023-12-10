const menuBtn = document.querySelectorAll(".menuBtn");

//Hamburger Menu Animation and menu open/close
menuBtn.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector("#hamburgerMenu").classList.toggle("hidden");
    menuBtn.forEach((element) => {
      element.classList.toggle("opened");
      element.setAttribute(
        "aria-expanded",
        element.classList.contains("opened"),
      );
    });
  });
});
