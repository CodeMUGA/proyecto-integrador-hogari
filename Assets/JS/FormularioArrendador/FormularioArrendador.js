
const parrafo=document.getElementById("warnings");
const ciudad = document.getElementById("propiedadCiudad");
const tipo = document.getElementById("propiedadTipo");
const precio=document.getElementById("precio");
const descripcion=document.getElementById("Descripcion");
const personas = document.getElementById("numeroPersonas");
const tamanio = document.getElementById("tamano");
const form=document.getElementById('form');

form.addEventListener('submit',e=>{

    e.preventDefault();
    let warnings="";
    let entrar=false;
    let regexDesc=/^[a-zA-Z0-9][a-zA-Z0-9\s]+$/ig
    let regexNumber=/^[0-9]+$/

    parrafo.innerHTML='';
    

   //Primero se valida los cuadros select con la siguiente funcion:
    if (ciudad.value == 0 || ciudad.value=="") 
    {
        warnings+="Seleccione una opcion ciudad </br>";
        entrar=true;
    } 
    if (tipo.value == 0 || tipo.value=="")
    {
        warnings+="Seleccione una opcion en tipo de vivienda </br>";
        entrar=true;
    } 
    if (!regexNumber.test(precio.value)||(precio.value==""))
    {
        warnings+="Inserte un precio ejemplo: $500 </br>";
        entrar=true;
    }
    if (!regexDesc.test(descripcion.value)||(descripcion.value==""))
    {
        warnings+="Inserte al menos nueve caracteres. </br>";
        entrar=true;
    }
    if (!regexNumber.test(personas.value)||(personas.value==""))
    {
        warnings+="Inserte solamente el numero de personas </br>";
        entrar=true;
    }
    if (!regexNumber.test(tamanio.value)||(tamanio.value==""))
    {
        warnings+="Inserte solamente el tamaño de la propiedad </br>";
        entrar=true;
    }
    if(entrar){
        parrafo.innerHTML = warnings;
    }
    else{
        parrafo.innerHTML="Enviado"; 
        var datos=[];
        
function agregarDatosForm(nombreCiudad,propiedadUsuario,dineroUsuario,personaUsuario,descripcionUsuario,tamano){
    var nuevoUsario={//Aqui se crea el objeto 
            ciudad:nombreCiudad,
            tipo:propiedadUsuario,
            precio:dineroUsuario,
            personas:personaUsuario,
            descripcion:descripcionUsuario,
            tamanio:tamano,
        };
         console.log(nuevoUsario);
         datos.push(nuevoUsario);
}
    };
document.querySelector('#btnSubmit').addEventListener('click',guardarDatosForm);

function guardarDatosForm() {
    let ciudad= document.getElementById('propiedadCiudad').value;
    let propiedad=document.getElementById('propiedadTipo').value;
     let dinero=document.getElementById('precio').value;
     let personas=document.getElementById('numeroPersonas').value;
     let descripcion=document.getElementById('Descripcion').value;
    
    agregarDatosForm(ciudad,propiedad,dinero,personas,descripcion);}
})



function validarExt(){ //Validamos extensiones permitidas
    var formFileMultiple = document.getElementById('inputGroupFile02');  //ID de mi input
    var archivoRuta = formFileMultiple.value; //Almacena mi input
    var extPermitidas = /(.png, .jpg, .jpeg)$/i; //Archivos permitidos

    if (!extPermitidas.exec(archivoRuta)) { //Alerta de archivo no permitido
        alert('Asergurate de haber seleccionado archivos PNG, JPG/JPEG');
        formFileMultiple.Value = " ";
        return false;
    } else {
        if (formFileMultiple.file && formFileMultiple[0]) {
            var visor = new FileReador
            visoronload = function (e) {
                document.getElementById('formFileMultiple').innerHTML = '<embed src="' + e.target.result; '">';
            }
        } 
        visor.readAsDataURL(archivoInput.files[0]);
    }
        
}


