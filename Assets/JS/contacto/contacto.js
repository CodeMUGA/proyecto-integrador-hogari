const nombre = document.getElementById("name");
const email = document.getElementById("email");
const form = document.getElementById("form");
const numero = document.getElementById("numero");
const parrafo = document.getElementById("warnings");
const comentarios = document.getElementById("comentarios");

form.addEventListener("submit", (e) => {
  e.preventDefault(); //Esta linea de codigo evita que se envie  por default,que se quede estatico
  let warnings = ""; //variable vacia para sobreescribir los warnings
  let entrar = false;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //Exprecion regular para validar el email
  let regexName = /^[a-z ,.'-]+$/i;
  let regexNumber = /^[0-9]+$/;
  parrafo.innerHTML = "";
  if (!regexName.test(nombre.value) || nombre.value == "") {
    warnings += "El nombre esta mal escrito <br>";

    entrar = true;
  }
  if (!regexEmail.test(email.value) || email.value == "") {
    //en esta linea de codigo vamos a hacer un test del valor de nuestro email con nuestro regexx
    warnings += "El email no es valido <br>";

    entrar = true;
  }
  if (!regexNumber.test(numero.value) || numero.value == "") {
    //en esta linea de codigo vamos a hacer un test del valor de nuestro email con nuestro regex
    warnings += "El numero no es valido <br>";

    entrar = true;
  }
  if (entrar) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "enviado";
    var datos = []; //Aqui declaramos un arreglo donde estaremos almacenandos los datos que se vayan agregar a de tu form
    function agregarDatosForm(
      nombreUsario,
      emailUsuario,
      numeroUsuario,
      comentariosusuario
    ) {
      var nuevoUsario = {
        //Aqui se crea el objeto
        name: nombreUsario,
        email: emailUsuario,
        number: numeroUsuario,
        comentarios: comentariosusuario,
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
        guardarEmail = document.getElementById("email").value,
        guardarNumero = document.getElementById("numero").value,
        guardarComentarios = document.getElementById("comentarios").value;

      agregarDatosForm(
        guardarNombre,
        guardarEmail,
        guardarNumero,
        guardarComentarios
      );
    }
  }
});
