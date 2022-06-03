//?Declaramos las variables que vamos a usar

const nombre = document.getElementById("name");
const email = document.getElementById("email");
const form = document.getElementById("form");
const apellido = document.getElementById("apellido");
const apellido2 = document.getElementById("apellido2");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const parrafo = document.getElementById("warnings");
const checkbox = document.getElementById("customCheck1");

form.addEventListener("submit", (e) => {
  e.preventDefault(); //Esta linea de codigo evita que se envie  por default,que se quede estatico
  let warnings = ""; //variable vacia para sobreescribir los warnings
  let entrar = false;
  let regexEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //Exprecion regular para validar el email
  let regexName = /^[a-z ,.'-]+$/i;
  let regexApellido = /^[a-z ,.'-]+$/i;
  let regexApellido2 = /^[a-z ,.'-]+$/i;
  let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  let regexPassword2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  //let regexNumber=/^[0-9]+$

  parrafo.innerHTML = "";
  if (!regexName.test(nombre.value) || nombre.value == "") {
    warnings += "Falta por escribir nombre <br>";

    entrar = true;
  }
  if (!regexApellido.test(apellido.value) || apellido.value == "") {
    warnings += "Faltan por escribir apellidos <br>";

    entrar = true;
  }
  if (!regexApellido2.test(apellido2.value) || apellido2.value == "") {
    warnings += "Faltan por escribir apellidos <br>";

    entrar = true;
  }
  if (!regexEmail.test(email.value) || email.value == "") {
    //en esta linea de codigo vamos a hacer un test del valor de nuestro email con nuestro regex
    warnings += "Émail no válido <br>";

    entrar = true;
  }
  if (!regexPassword.test(password.value) || password.value == "") {
    warnings += "Contraseña no permitida, necesita 8 caracteres minimo<br>";

    entrar = true;
  }

  if (
    !regexPassword2.test(password2.value) ||
    password2.value == "" ||
    password.value !== password2.value
  ) {
    warnings += "La contraseña no coincide <br>";

    entrar = true;
  }

  if (entrar) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "enviado";
    var datos = []; //Aqui declaramos un arreglo donde estaremos almacenandos los datos que se vayan agregar a de tu form
    function agregarDatosForm(
      nombreUsario,
      apellidoUsuario,
      apellido2Usuario,
      emailUsuario,
      passwordUsuario,
      password2Usuario
    ) {
      var nuevoUsario = {
        //Aqui se crea el objeto
        name: nombreUsario,
        apellido: apellidoUsuario,
        apellido2: apellido2Usuario,
        email: emailUsuario,
        password: passwordUsuario,
        password2: password2Usuario,
      };
      console.log(nuevoUsario);
      datos.push(nuevoUsario);
    }
    function obtenerDatos() {
      return datos;
    }

    document
      .querySelector("#btnSubmit")
      .addEventListener("click", guardarDatosForm);

    function guardarDatosForm() {
      var guardarNombre = document.getElementById("name").value,
        guardarApellido = document.getElementById("apellido").value,
        guardarApellido2 = document.getElementById("apellido2").value,
        guardarEmail = document.getElementById("email").value,
        guardarPassword = document.getElementById("password").value,
        guardarPassword2 = document.getElementById("password2").value;

      agregarDatosForm(
        guardarNombre,
        guardarApellido,
        guardarApellido2,
        guardarEmail,
        guardarPassword,
        guardarPassword2
      );
    }
  }

  // checkbox button disable
  // if (checkbox.checked) {
  //   document.getElementById("btnSubmit").disabled = false;
  // }

  // // checkbox button enable
  // if (checkbox.checked == false) {
  //   document.getElementById("btnSubmit").disabled = true;
  // }
});
