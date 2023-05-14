const formulario_login = document.getElementById("formulario_login");

formulario_login.addEventListener("submit", (e) => {
    if(login()){
        e.preventDefault();
        window.location.replace('vendedor.html');
        console.log("Ingresaste");
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