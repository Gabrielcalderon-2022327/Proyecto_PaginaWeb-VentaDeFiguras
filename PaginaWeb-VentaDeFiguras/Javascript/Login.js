const email = "gabriel@gmail.com";
const contra = "12345";
const contraInput = document.getElementById("password");
const mostrarImg = document.getElementById("mostrarContra");

// ----------------------------------Envio de datos
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const in_email = document.getElementById("username").value.trim();
    const in_contra = document.getElementById("password").value.trim();

    if(!in_email.endsWith("@gmail.com") && !in_email.endsWith("@outlook.com") && !in_email.endsWith("@yahoo.com")){
        alert("El correo debería tener estas extensiones: @gmail.com, @outlook.com, @yahoo.com");
        return;
    }

    if(email === in_email && contra === in_contra){
        window.location.href= "../Html/index.html";
    } else{
        alert("Credenciales incorrectas");
    }
})

// --------------------------Mostrar y ocultar contra
mostrarImg.addEventListener("click", () => {
    if(contraInput.type === "password"){
        contraInput.type = "text";
        mostrarImg.src = "../Img/ojoCerrado.png"
    } else{
        contraInput.type = "password";
        mostrarImg.src = "../Img/ojoAbierto.png"
    }
})