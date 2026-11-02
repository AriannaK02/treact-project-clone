const menu = document.querySelector("#mobile-menu");
const openMenuButton = document.querySelector(".btn__menu:not(.btn__menu--close)");
const closeMenuButton = document.querySelector(".btn__menu--close");

function setMenuOpen(isOpen) {
    document.body.classList.toggle("menu--open", isOpen);
    openMenuButton.setAttribute("aria-expanded", String(isOpen));
    menu.setAttribute("aria-hidden", String(!isOpen));
}

openMenuButton.addEventListener("click", () => setMenuOpen(true));
closeMenuButton.addEventListener("click", () => setMenuOpen(false));

menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        setMenuOpen(false);
    }
});

document.querySelector("#signup").addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.querySelector("#email").value;
    document.querySelector(".form__message").textContent = `Thanks! We'll be in touch at ${email}.`;
    event.currentTarget.reset();
});
