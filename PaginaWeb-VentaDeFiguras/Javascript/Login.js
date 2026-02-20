if (!sessionStorage.getItem("usuarios")) {
    const usuariosIniciales = [
        {
            nombreUsuario: "Gabriel Calderon",
            correo: "gabrielCalderon@gmail.com",
            contra: "Abcd12345",
        },
        {
            nombreUsuario: "Alexander Monzon",
            correo: "alexanderMonzon@gmail.com",
            contra: "Xyz67890",
        }
    ];

    sessionStorage.setItem("usuarios", JSON.stringify(usuariosIniciales));
}

let usuarios = JSON.parse(sessionStorage.getItem("usuarios"))

// ----------------------------------Verificar que el DOM este cargado antes de agregar los eventos
document.addEventListener("DOMContentLoaded", function () {
    console.log("Documento funcionando");
    const contraInput = document.getElementById("password");
    const mostrarImg = document.getElementById("mostrarImg");

    const contraConfirmInput = document.getElementById("passwordConfirm");
    const mostrarImg2 = document.getElementById("mostrarImg2");

    const formularioLogin = document.getElementById("formularioLogin");
    const formularioRegister = document.getElementById("formularioRegister");

    if (formularioLogin) { // Verificar si el formulario de login existe
        formularioLogin.addEventListener("submit", function (event) {
            event.preventDefault();

            let encontrado = false;
            const in_email = document.getElementById("email").value.trim();
            const in_contra = document.getElementById("password").value.trim();

            usuarios.forEach((usuario) => {
                if (in_email === usuario.correo && in_contra === usuario.contra) {
                    encontrado = true;
                }
            });

            if (encontrado) {
                window.location.href = "index.html";
            } else {
                alert("Correo o contraseña incorrectos");
            }
        });
    }

    if (formularioRegister) { // Verificar si el formulario de registro existe
        formularioRegister.addEventListener("submit", function (event) {
            event.preventDefault();

            const in_nombreUsuario = document.getElementById("username").value.trim();
            const in_email = document.getElementById("email").value.trim();
            const in_contra = document.getElementById("password").value.trim();
            const in_contraConfirm = document.getElementById("passwordConfirm").value.trim();

            // Validaciones
            if (!in_email.endsWith("@gmail.com") && !in_email.endsWith("@outlook.com") && !in_email.endsWith("@yahoo.com")) {
                alert("El correo debería tener estas extensiones: @gmail.com, @outlook.com, @yahoo.com");
                return;
            }

            if (in_contra !== in_contraConfirm) {
                alert("Las contraseñas no coinciden");
                return;
            }

            let existeUsuario = false;
            usuarios.forEach((usuario) => {
                if (in_email === usuario.correo || in_nombreUsuario === usuario.nombreUsuario) {
                    existeUsuario = true;
                }
            });

            if (existeUsuario) {
                alert("El correo o nombre de usuario ya está en uso");
                return;
            }

            // Agregar nuevo usuario al array
            const nuevoUsuario = {
                nombreUsuario: in_nombreUsuario,
                correo: in_email,
                contra: in_contra
            };

            usuarios.push(nuevoUsuario);
            sessionStorage.setItem("usuarios", JSON.stringify(usuarios));
            alert("Registro exitoso, pasando a la página de inicio de sesión");
            window.location.href = "Login.html";
        });
    }

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

    // --------------------------Mostrar y ocultar contra confirmacion
    mostrarImg2.addEventListener("click", () => {
        if (contraConfirmInput.type === "password") {
            contraConfirmInput.type = "text";
            mostrarImg2.src = "../Img/ojoCerrado.png";
        } else {
            contraConfirmInput.type = "password";
            mostrarImg2.src = "../Img/ojoAbierto.png";
        }
    });
});


