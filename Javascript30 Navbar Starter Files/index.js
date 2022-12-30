const menuMobile = document.getElementById("menu-mobile");
const menuBtn = document.getElementById("menu-mobile-btn");

menuBtn.addEventListener("click", () => {
    menuBtn.src = menuBtn.src.includes("Menu.svg")
        ? "./Assets/Close.svg"
        : "./Assets/Menu.svg";
    menuMobile.style.display =
        menuMobile.style.display === "block" ? "none" : "block";
    menuMobile.classList.toggle("menu-mobile-transition");
});
