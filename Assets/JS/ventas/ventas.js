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
addItem({'name':'Casa en Guadalajara, Jalisco',
    'img': '/Assets/img/CASA_RENTA.webp',
    'description':'Casa en renta. Cuenta con dos pisos, y cochera en Av. Lopez Mateos','precio':'$20,000'});

addItem({'name':'Recámara en Guadalajara, Jalisco',
    'img':'/Assets/img/RECAMARA.jpg',
    'description':'Recámara con cama matrimonial y baño incluido.','precio':' $8,000'})

    addItem({'name':'Casa vacacional',
    'img':'/Assets/img/casa2.jpg',
    'description':'Casa a las afueras de Guadalajara','precio':'$30,000'});
/*
    addItem({'name':'Casa D',
    'img':'https://englishlive.ef.com/es-mx/blog/wp-content/uploads/sites/8/2019/03/partes-de-la-casa-en-ingles.jpg',
    'description':'Orange and Apple juice fresh and delicious'});
    */
    addItem({'name':'Departamento con balcón',
    'img':'/Assets/img/BALCON.webp',
    'description':'Departamento en zona sur de Guadalajara','precio':'$20,000'});

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
//tarjetas con imagenes y deecripciones de lso elementos en venta
addItem2({'name':'Casa en Guadalajara, Jalisco',
    'img': '/Assets/img/CASA_RENTA.webp',
    'description':'Casa en renta. Cuenta con dos pisos, y cochera en Av. Lopez Mateos','precio':'$20,000'});

addItem2({'name':'Recámara en Guadalajara, Jalisco',
    'img':'/Assets/img/RECAMARA.jpg',
    'description':'Recámara con cama matrimonial y baño incluido.','precio':' $8,000'})

    addItem2({'name':'Casa vacacional',
    'img':'/Assets/img/casa2.jpg',
    'description':'Casa a las afueras de Guadalajara','precio':'$30,000'});
/*
    addItem({'name':'Casa D',
    'img':'https://englishlive.ef.com/es-mx/blog/wp-content/uploads/sites/8/2019/03/partes-de-la-casa-en-ingles.jpg',
    'description':'Orange and Apple juice fresh and delicious'});
    */
    addItem2({'name':'Departamento con balcón',
    'img':'/Assets/img/BALCON.webp',
    'description':'Departamento en zona sur de Guadalajara','precio':'$20,000'});

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
//tarjetas con imagenes y deecripciones de lso elementos en venta
addItem3({'name':'Casa en Guadalajara, Jalisco',
    'img': '/Assets/img/CASA_RENTA.webp',
    'description':'Casa en renta. Cuenta con dos pisos, y cochera en Av. Lopez Mateos','precio':'$20,000'});

addItem3({'name':'Recámara en Guadalajara, Jalisco',
    'img':'/Assets/img/RECAMARA.jpg',
    'description':'Recámara con cama matrimonial y baño incluido.','precio':' $8,000'})

    addItem3({'name':'Casa vacacional',
    'img':'/Assets/img/casa2.jpg',
    'description':'Casa a las afueras de Guadalajara','precio':'$30,000'});
/*
    addItem({'name':'Casa D',
    'img':'https://englishlive.ef.com/es-mx/blog/wp-content/uploads/sites/8/2019/03/partes-de-la-casa-en-ingles.jpg',
    'description':'Orange and Apple juice fresh and delicious'});
    */
    addItem3({'name':'Departamento con balcón',
    'img':'/Assets/img/BALCON.webp',
    'description':'Departamento en zona sur de Guadalajara','precio':'$20,000'});
   