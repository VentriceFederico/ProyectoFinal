//POPUP

const btn_login = document.getElementById("btn-abrir-poppup");
const overlay = document.getElementById("overlay");
const poppup = document.getElementById("overlay-popup");
const btn_cerrar_login = document.getElementById("btn-cerrar-popup")
btn_login.addEventListener("click", (e) => {
    overlay.classList.add("active");
    poppup.classList.add("active");
})

btn_cerrar_login.addEventListener("click",() => {
    overlay.classList.remove("active");
    poppup.classList.remove("active");
})