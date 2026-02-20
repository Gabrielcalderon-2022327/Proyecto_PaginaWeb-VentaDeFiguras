const usuarios = {
    user1: {
        nombreUsuario: "Gabriel Calderon",
        correo: "gabrielCalderon@gmail.com",
        contra: "Abcd12345",
    },
    user2: {
        nombreUsuario: "Alexander Monzon",
        correo: "alexanderMonzon@gmail.com",
        contra: "Xyz67890",
    },
};
const contraInput = document.getElementById("password");
const mostrarImg = document.getElementById("mostrarContra");

// ----------------------------------Envio de datos
document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    const in_email = document.getElementById("username").value.trim();
    const in_contra = document.getElementById("password").value.trim();

    usuarios.forEach((usuario) => {
        if (in_email === usuario.correo && in_contra === usuario.contra) {
            alert("Bienvenido " + usuario.nombreUsuario);
            return;
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    });
});

// --------------------------Mostrar y ocultar contra
mostrarImg.addEventListener("click", () => {
    if (contraInput.type === "password") {
        contraInput.type = "text";
        mostrarImg.src = "../Img/ojoCerrado.png";
    } else {
        contraInput.type = "password";
        mostrarImg.src = "../Img/ojoAbierto.png";
    }
});
