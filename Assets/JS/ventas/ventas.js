function addItem(item){
    const itemHTML = '<div class="card" style="width: 20rem;box-shadow:10px 10px  10px gray;">\n' +
        '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '        <p class="card-text">\n' +item.precio+' Renta/mensual</p>\n'+
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}
//tarjetas con imagenes y deecripciones de lso elementos en venta
addItem({'name':'Casa A',
    'img':'https://englishlive.ef.com/es-mx/blog/wp-content/uploads/sites/8/2019/03/partes-de-la-casa-en-ingles.jpg',
    'description':'Orange and Apple juice fresh and delicious','precio':'$1000000'});

addItem({'name':'Casa B',
    'img':'https://englishlive.ef.com/es-mx/blog/wp-content/uploads/sites/8/2019/03/partes-de-la-casa-en-ingles.jpg',
    'description':'Cheese & Onion Chips','precio':' $1000000'})

    addItem({'name':'Casa C',
    'img':'https://englishlive.ef.com/es-mx/blog/wp-content/uploads/sites/8/2019/03/partes-de-la-casa-en-ingles.jpg',
    'description':'Orange and Apple juice fresh and delicious','precio':'$1000000'});

    addItem({'name':'Casa E',
    'img':'https://englishlive.ef.com/es-mx/blog/wp-content/uploads/sites/8/2019/03/partes-de-la-casa-en-ingles.jpg',
    'description':'Orange and Apple juice fresh and delicious','precio':'$1000000'});

   var contenido=document.getElementById("contenido");

   function addItem2(item){
    const itemHTML = '<div class="card" style="width: 20rem;box-shadow:10px 10px  10px gray;">\n' +
        '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '        <p class="card-text">\n' +item.precio+' Renta/mensual</p>\n'+
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items2");
    itemsContainer.innerHTML += itemHTML;
}

addItem2({'name':'Casa A',
    'img':'https://englishlive.ef.com/es-mx/blog/wp-content/uploads/sites/8/2019/03/partes-de-la-casa-en-ingles.jpg',
    'description':'Orange and Apple juice fresh and delicious','precio':'$1000000'});

addItem2({'name':'Casa B',
    'img':'https://englishlive.ef.com/es-mx/blog/wp-content/uploads/sites/8/2019/03/partes-de-la-casa-en-ingles.jpg',
    'description':'Cheese & Onion Chips','precio':'$1000000'})

    addItem2({'name':'Casa C',
    'img':'https://englishlive.ef.com/es-mx/blog/wp-content/uploads/sites/8/2019/03/partes-de-la-casa-en-ingles.jpg',
    'description':'Orange and Apple juice fresh and delicious','precio':'$1000000'});

    addItem2({'name':'Casa E',
    'img':'https://englishlive.ef.com/es-mx/blog/wp-content/uploads/sites/8/2019/03/partes-de-la-casa-en-ingles.jpg',
    'description':'Orange and Apple juice fresh and delicious','precio':'$1000000'});  
   var contenido=document.getElementById("contenido");
 

   function addItem3(item){
    const itemHTML = '<div class="card" style="width: 20rem;box-shadow:10px 10px  10px gray;">\n' +
        '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '        <p class="card-text">\n' +item.precio+' Renta/mensual</p>\n'+
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items3");
    itemsContainer.innerHTML += itemHTML;
}

addItem3({'name':'Casa A',
    'img':'https://englishlive.ef.com/es-mx/blog/wp-content/uploads/sites/8/2019/03/partes-de-la-casa-en-ingles.jpg',
    'description':'Orange and Apple juice fresh and delicious','precio':'$1000000'});

addItem3({'name':'Casa B',
    'img':'https://englishlive.ef.com/es-mx/blog/wp-content/uploads/sites/8/2019/03/partes-de-la-casa-en-ingles.jpg',
    'description':'Cheese & Onion Chips','precio':'1000000'})

    addItem3({'name':'Casa C',
    'img':'https://englishlive.ef.com/es-mx/blog/wp-content/uploads/sites/8/2019/03/partes-de-la-casa-en-ingles.jpg',
    'description':'Orange and Apple juice fresh and delicious','precio':'$1000000'});

    addItem3({'name':'Casa D',
    'img':'https://englishlive.ef.com/es-mx/blog/wp-content/uploads/sites/8/2019/03/partes-de-la-casa-en-ingles.jpg',
    'description':'Orange and Apple juice fresh and delicious'});
  
    
   var contenido=document.getElementById("contenido");

   //FETCH PARA METODO GET

let productos;
// Aquí se debe cambiar el URL del servicio en el BackEnd
const URL_PRODUCTOS ='http://localhost:8080/api/fotos/'; 

//URL a donde se hace la petición
function addItems(div_Productos) { //div_Productos es el div donde se va a agregar los productos
    fetch(URL_PRODUCTOS, {
        method: 'get' //tipo de método
    }).then(function(response) {//response es la respuesta del servidor
        response.json().then(function (json) { //json es el objeto que se obtiene del servicio
            console.log(json); //imprime el json
            console.log(json.length); //imprime el tamaño del json
            productos=json; //se guarda el json en la variable productos
            Array.from(json).forEach((p) => { //Toma el JSON, si es un arreglo haces el forEach. Si no lo es, mandas el error.
                div_Productos.innerHTML += `<div class="card" style="width: 20rem;box-shadow:10px 10px  10px gray;"> 
                   <img src="${p.URL}  class="card-img-top" alt="image"> 
                    <div class="card-body"> 
                        <h5 class="card-title">${p.nombre_archivo}</h5>
                         <p class="card-text">${p.descripcion}</p>
                        <p class="card-text">${p.precio} Renta/mensual</p>
                    </div> 
                </div> 
                <br/>`;
            }); // foreach para agregar los productos al div del HTML
        });//then
    }).catch(function(err) { //si hay un error
        console.log(err); //imprime el error
    });
    console.log(document.getElementById("div_Productos")); //imprime el div donde se va a agregar los productos
   
}// addItems

window.addEventListener("load", function (){ //cuando se cargue la página
    let div = document.getElementById("div_Productos"); //div donde se va a agregar los productos
    addItems(div); //se llama a la función addItems
   
});

function view(index) { //index es el índice del producto que se va a ver
    // console.log(index);
    // console.table(productos[index]);
    document.getElementById("productTitleModal").innerHTML=productos[index].nombre_archivo; //se cambia el título del modal
    document.getElementById("productBodyModal").innerHTML=`${productos[index].descripcion}  <img class="bd-placeholder-img card-img-top" role="img" src="img/${productos[index].url_Imagen}" />
    <strong>$ ${productos[index].precio} MXN<strong>`; //se cambia el cuerpo del modal
    $("#productModal").modal("show"); //se muestra el modal
}// view

// FETCH PARA HACER EL METODO POST

// Este es nuestro cuerpo del POST

const data =({nombre_archivo:'Casa A',
URL:'https://englishlive.ef.com/es-mx/blog/wp-content/uploads/sites/8/2019/03/partes-de-la-casa-en-ingles.jpg',
descripcion:'Orange and Apple juice fresh and delicious',precio:'$1000000'

});

fetch(URL_MAIN, { //URL del servicio a donde se hara el POST
  method: 'POST', // or 'PUT' 
  headers: { // se agrega el header
    'Content-Type': 'application/json', //tipo de contenido
  },
  body: JSON.stringify(data), //se agrega el cuerpo del POST
})
.then(response => response.json()) //se obtiene la respuesta del servidor
.then(data => { //se obtiene el json
  console.log('Success:', data); //se imprime el json
})
.catch((error) => { //si hay un error
  console.error('Error:', error); //se imprime el error
});