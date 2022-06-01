// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

const btnEnviar = document.querySelector("#enviar");
const formulario = document.querySelector("#enviar-mail");
// variables para campos
const email = document.querySelector("#email");

eventListeners();

function eventListeners() {
  //Cuando la app arranca
  document.addEventListener("DOMContentLoaded", iniciarApp);
  //Campos de formulario
  email.addEventListener("blur", validarFormulario);
  //enviar email
  formulario.addEventListener("submit", enviarEmail);
}

//funciones
function iniciarApp() {
  btnEnviar.disabled = true;
}

function validarFormulario(e) {
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
  if (er.test(email.value)) {
    btnEnviar.disabled = false;
    btnEnviar.classList.remove("cursor-not-allowed", "opacity-50");
  }
}

function resetearFormulario() {
  formulario.reset();
  iniciarApp();
}
