//Variables para login
const btnLogin = document.querySelector("#btn-login");
const formulario = document.querySelector("#form-login");
//Variables para campos
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const er =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
eventListeners();

function eventListeners() {
  //Cuando el form inica
  document.addEventListener("DOMContentLoaded", iniciarApp);
  //Campos del inicio de sesion
  email.addEventListener("blur", validarFormulario);
  password.addEventListener("blur", validarFormulario);
  //enviar email
  formulario.addEventListener("submit", iniciarSesion);
}

function iniciarApp() {
  // console.log("iniciando...");
}
//Validamos formulario
function validarFormulario(e) {
  if (e.target.value.length > 0) {
    //elimina los errores
    const error = document.querySelector("p.error");
    if (error !== null) {
      error.remove();
    }
    e.target.classList.remove("border-danger");
    e.target.classList.add("border-success");
  } else {
    e.target.classList.remove("border-success");
    e.target.classList.add("border-danger");
    mostrarError("Todos los campos son obligatorios");
  }

  if (e.target.type === "email") {
    if (er.test(e.target.value)) {
      const error = document.querySelector("p.error");
      if (error !== null) {
        error.remove();
      }
      e.target.classList.remove("border-danger");
      e.target.classList.add("border-success");
    } else {
      e.target.classList.remove("border-success");
      e.target.classList.add("border-danger");
      mostrarError("Email no válido");
    }
  }
  if (er.test(email.value) && password.value !== "") {
    console.log("validado");
  }
}

function mostrarError(mensaje) {
  const mostrarError = document.createElement("p");
  mostrarError.textContent = mensaje;
  mostrarError.classList.add(
    "text-white",
    "text-center",
    "bg-danger",
    "p-3",
    "rounded",
    "error"
  );

  const errores = document.querySelectorAll(".error");
  if (errores.length === 0) {
    formulario.appendChild(mostrarError);
  }
}

///Envia el login

function iniciarSesion(e) {
  e.preventDefault();

  //mostrar spinner
  const spinner = document.querySelector("#spinner");
  spinner.style.display = "flex";

  // inicio de session con sweet alert con validacion y loader
  setTimeout(() => {
    if (er.test(email.value) && password.value !== "") {
      Swal.fire({
        //timer: 2000,
        title: "Bienvenido",
        timer: 3000,
        text: "Iniciando sesión",
        icon: "success",
        //spinner loading
        //loade

        confirmButtonText: "Aceptar",
      }).then((result) => {
        if (result.value) {
          window.location.href = "index.html";
        }
      });
    }
    spinner.style.display = "none";
  }, 3000);

  const usuario = {
    email: email.value,
    password: password.value,
  };

  console.log(usuario);

  //localstorage email y password
  localStorage.setItem("email", usuario.email);
  localStorage.setItem("password", usuario.password);

  //autenticación con localstorage
  if (
    usuario.email === localStorage.getItem("email") &&
    usuario.password === localStorage.getItem("password")
  ) {
    console.log("autenticado");
  } else {
    console.log("no autenticado");
  }
}
