const formulario_login = document.getElementById("formulario_login");

formulario_login.addEventListener("submit", (e) => {
    if(login()){
        e.preventDefault();
        window.location.replace('vendedor.html');
    }
    else{
        Toastify({
                text: "Usuario o contraseña incorrectos.\nPorfavor Vuelva a ingresar",
                duration: 3000,
                style: {
                    background: "linear-gradient(to right, #FE0C0D, #000000)",
                    color: "#FFF",
                },
            }).showToast()
    }
})
function login() {
    const user_email = document.getElementById("user_email").value;

    const user_password = document.getElementById("user_password").value;

    if(user_email == "admin@admin.com" && user_password == "admin"){
        return true;
    }
    else{
        return false;
    }
}