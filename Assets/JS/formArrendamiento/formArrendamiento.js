// Ejemplo de JavaScript inicial para deshabilitar el envío de formularios si hay campos no válidos
var ciudad = document.getElementById("ciudad");
const form = document.getElementById("form");

var datos = []; //Aqui declaramos un arreglo donde estaremos almacenandos los datos que se vayan agregar a de tu form
function agregarDatosForm(
  nombreCiudad,
  propiedadUsuario,
  dineroUsuario,
  personaUsuario,
  descripcionUsuario
) {
  var nuevoUsario = {
    //Aqui se crea el objeto
    ciudad: nombreCiudad,
    propiedad: propiedadUsuario,
    dinero: dineroUsuario,
    personas: personaUsuario,
    descripcion: descripcionUsuario,
  };
  console.log(nuevoUsario);
  datos.push(nuevoUsario);
}
function obtenerDatos() {
  return datos;
}

function guardarDatosForm() {
  let ciudad = document.getElementById("ciudad").value;
  let propiedad = document.getElementById("propiedad").value;
  let dinero = document.getElementById("dinero").value;
  let personas = document.getElementById("personas").value;
  let descripcion = document.getElementById("descripcion").value;

  agregarDatosForm(ciudad, propiedad, dinero, personas, descripcion);
}
