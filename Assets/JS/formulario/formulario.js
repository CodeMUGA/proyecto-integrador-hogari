//Variables
const btnSubmit = document.querySelector("#btnSubmit");
const checkbox = document.querySelector("#customCheck1");
//Variables para campos
const nombre = document.querySelector("#name");
const email = document.querySelector("#email");
const form = document.querySelector("#form");
const apellido = document.querySelector("#apellido");
const apellido2 = document.querySelector("#apellido2");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const parrafo = document.querySelector("#warnings");
const er =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//password regex
const passRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;

eventListeners();

function eventListeners() {
  //Cuando el registro inicia
  document.addEventListener("DOMContentLoaded", iniciarApp);
  // campos del formulario
  nombre.addEventListener("blur", validaFormulario);
  email.addEventListener("blur", validaFormulario);
  apellido.addEventListener("blur", validaFormulario);
  apellido2.addEventListener("blur", validaFormulario);
  password.addEventListener("blur", validaFormulario);
  password2.addEventListener("blur", validaFormulario);

  //Evento submit
  form.addEventListener("submit", validarFormulario);
}

//Functions

function iniciarApp() {
  // btnSubmit.disabled = true;
}

// valida el formulario

function validaFormulario(e) {
  if (e.target.value.length > 0) {
    //Elimina los errores...
    const error = document.querySelector("p.error");
    if (error) {
      error.remove();
    }
    e.target.classList.remove("border", "border-danger");
    e.target.classList.add("border", "border-success");
  } else {
    e.target.classList.add("border", "border-success");
    e.target.classList.remove("border", "border-danger");

    mostrarError("Todos los campos son obligatorios");
  }
  //valida email
  if (e.target.type === "email") {
    if (er.test(e.target.value)) {
      const error = document.querySelector("p.error");
      if (error) {
        error.remove();
      }
      e.target.classList.remove("border", "border-danger");
      e.target.classList.add("border", "border-success");
    } else {
      e.target.classList.add("border", "border-success");
      e.target.classList.remove("border", "border-danger");
      mostrarError("Email no válido");
    }
  }
  //validar y comparar contraseñas
  if (e.target.type === "password") {
    if (e.target.value.length > 0) {
      const error = document.querySelector("p.error");
      if (error) {
        error.remove();
      }
      e.target.classList.remove("border", "border-danger");
      e.target.classList.add("border", "border-success");
    } else {
      e.target.classList.add("border", "border-success");
      e.target.classList.remove("border", "border-danger");
      mostrarError("Todos los campos son obligatorios");
    }

    if (e.target.value.length > 0) {
      if (passRegex.test(e.target.value)) {
        const error = document.querySelector("p.error");
        if (error) {
          error.remove();
        }
        e.target.classList.remove("border", "border-danger");
        e.target.classList.add("border", "border-success");
      } else {
        e.target.classList.add("border", "border-success");
        e.target.classList.remove("border", "border-danger");
        mostrarError("La contraseña debe tener al menos 8 caracteres");
      }
    }
    if (e.target.value === password2.value) {
      const error = document.querySelector("p.error");
      if (error) {
        error.remove();
      }
      e.target.classList.remove("border", "border-danger");
      e.target.classList.add("border", "border-success");
    } else {
      e.target.classList.add("border", "border-success");
      e.target.classList.remove("border", "border-danger");
      mostrarError("Las contraseñas no coinciden");
    }
  }
}

if (
  nombre.value !== "" &&
  er.test(e.target.value) !== "" &&
  apellido.value !== "" &&
  apellido2.value !== "" &&
  passRegex.test(e.target.value) !== "" &&
  password.value !== "" &&
  password2.value !== "" &&
  password.value === password2.value
) {
  btnSubmit.disabled = false;
}

function mostrarError(mensaje) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = mensaje;
  mensajeError.classList.add(
    "text-white",
    "bg-danger",
    "fw-bold",
    "p-3",
    "mt-2",
    "error"
  );
  const errores = document.querySelectorAll(".error");
  if (errores.length === 0) {
    form.appendChild(mensajeError);
  }
}

//Registro formulario

function validarFormulario(e) {
  e.preventDefault();

  //sweet alert registro exitoso

  setTimeout(() => {
    Swal.fire({
      title: "Registro exitoso",
      text: "Bienvenido a la comunidad",
      icon: "success",
      confirmButtonText: "Aceptar",
    });
  }, 3000);

  // almacenar json

  const usuario = {
    nombre: nombre.value,
    apellido: apellido.value,
    apellido2: apellido2.value,
    email: email.value,
    password: password.value,
  };
  console.log(usuario);
  //crear el local storage
  localStorage.setItem("usuario", JSON.stringify(usuario));
}
