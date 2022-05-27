//variables
const btnEnviar = document.querySelector("#enviar");
const formulario = document.querySelector("#enviar-mail");
// variables para campos
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");
const nombre = document.querySelector("#nombre");
const telefono = document.querySelector("#telefono");
const er =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListeners();

function eventListeners() {
  //Cuando la app arranca
  document.addEventListener("DOMContentLoaded", iniciarApp);
  //Campos de formulario
  email.addEventListener("blur", validarFormulario);
  asunto.addEventListener("blur", validarFormulario);
  mensaje.addEventListener("blur", validarFormulario);
  nombre.addEventListener("blur", validarFormulario);
  telefono.addEventListener("blur", validarFormulario);
  //enviar email
  formulario.addEventListener("submit", enviarEmail);
}

//funciones
function iniciarApp() {
  btnEnviar.disabled = true;
  btnEnviar.classList.add("cursor-not-allowed", "opacity-50");
}

//valida el formulario
function validarFormulario(e) {
  if (e.target.value.length > 0) {
    //Elimina los errores
    const error = document.querySelector("p.error");
    if (error !== null) {
      error.remove();
    }
    e.target.classList.remove("border", "border-danger");
    e.target.classList.add("border", "border-success");
  } else {
    e.target.classList.remove("border", "border-success");
    e.target.classList.add("border", "border-danger");
    mostrarError("Todos los campos son obligatorios");
  }

  if (e.target.type === "email") {
    if (er.test(e.target.value)) {
      // mostrarError("El email no es válido");
      const error = document.querySelector("p.error");
      if (error !== null) {
        error.remove();
      }
      e.target.classList.remove("border", "border-danger");
      e.target.classList.add("border", "border-success");
    } else {
      e.target.classList.add("border", "border-danger");
      e.target.classList.remove("border", "border-success");
      e.target.classList.add("border", "border-danger");
      mostrarError("Email no válido");
    }
  }
  if (
    er.test(email.value) &&
    asunto.value !== "" &&
    mensaje.value !== "" &&
    telefono.value !== "" &&
    nombre.value !== ""
  ) {
    btnEnviar.disabled = false;
    btnEnviar.classList.remove("cursor-not-allowed", "opacity-50");
  }
}

function mostrarError(mensaje) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = mensaje;
  mensajeError.classList.add(
    //Se le aplican estilos al text que queremos
    "border",
    "border-danger",
    "bg-danger",
    "text-white",
    "p-3",
    "mt-2",
    "text-center",
    "error",
    "fw-bold"
  );
  const errores = document.querySelectorAll(".error");
  if (errores.length === 0) {
    formulario.appendChild(mensajeError);
  }
}

function enviarEmail(e) {
  //Esto evita que cambie de página
  e.preventDefault();
  // mostar spinner
  const spinner = document.querySelector("#spinner");
  spinner.style.display = "flex";

  setTimeout(() => {
    spinner.style.display = "none";
    //mensaje que se envio correctamente
    const parrafo = document.createElement("p");
    parrafo.textContent = "El Mensaje se envio correctamente";
    //Se le aplican estilos al text que queremos
    parrafo.classList.add(
      "text-center",
      "my-10",
      "p-2",
      "bg-success",
      "text-white",
      "fw-bold"
    );
    //Inserta pirrafo despues de spinner
    formulario.insertBefore(parrafo, spinner);
    setTimeout(() => {
      parrafo.remove(); //eliminar mensaje
      resetearFormulario();
    }, 5000);
  }, 3000);
}

//Function que reinicia form

function resetearFormulario() {
  formulario.reset();
  iniciarApp();
}
