function addItem(item){
    const itemHTML = '<div class="card"style="width: 20rem;box-shadow:10px 10px  10px gray;">\n' +
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
/*
    addItem({'name':'Casa D',
    'img':'https://englishlive.ef.com/es-mx/blog/wp-content/uploads/sites/8/2019/03/partes-de-la-casa-en-ingles.jpg',
    'description':'Orange and Apple juice fresh and delicious'});
    */
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
//tarjetas con imagenes y deecripciones de lso elementos en venta
addItem2({'name':'Casa A',
    'img':'https://englishlive.ef.com/es-mx/blog/wp-content/uploads/sites/8/2019/03/partes-de-la-casa-en-ingles.jpg',
    'description':'Orange and Apple juice fresh and delicious','precio':'$1000000'});

addItem2({'name':'Casa B',
    'img':'https://englishlive.ef.com/es-mx/blog/wp-content/uploads/sites/8/2019/03/partes-de-la-casa-en-ingles.jpg',
    'description':'Cheese & Onion Chips','precio':'$1000000'})

    addItem2({'name':'Casa C',
    'img':'https://englishlive.ef.com/es-mx/blog/wp-content/uploads/sites/8/2019/03/partes-de-la-casa-en-ingles.jpg',
    'description':'Orange and Apple juice fresh and delicious','precio':'$1000000'});
/*
    addItem2({'name':'Casa D',
    'img':'https://englishlive.ef.com/es-mx/blog/wp-content/uploads/sites/8/2019/03/partes-de-la-casa-en-ingles.jpg',
    'description':'Orange and Apple juice fresh and delicious'});
    */
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
//tarjetas con imagenes y deecripciones de lso elementos en venta
addItem3({'name':'Casa A',
    'img':'https://englishlive.ef.com/es-mx/blog/wp-content/uploads/sites/8/2019/03/partes-de-la-casa-en-ingles.jpg',
    'description':'Orange and Apple juice fresh and delicious','precio':'$1000000'});

addItem3({'name':'Casa B',
    'img':'https://englishlive.ef.com/es-mx/blog/wp-content/uploads/sites/8/2019/03/partes-de-la-casa-en-ingles.jpg',
    'description':'Cheese & Onion Chips','precio':'1000000'})

    addItem3({'name':'Casa C',
    'img':'https://englishlive.ef.com/es-mx/blog/wp-content/uploads/sites/8/2019/03/partes-de-la-casa-en-ingles.jpg',
    'description':'Orange and Apple juice fresh and delicious','precio':'$1000000'});
/*
    addItem3({'name':'Casa D',
    'img':'https://englishlive.ef.com/es-mx/blog/wp-content/uploads/sites/8/2019/03/partes-de-la-casa-en-ingles.jpg',
    'description':'Orange and Apple juice fresh and delicious'});
    */
    addItem3({'name':'Casa E',
    'img':'https://englishlive.ef.com/es-mx/blog/wp-content/uploads/sites/8/2019/03/partes-de-la-casa-en-ingles.jpg',
    'description':'Orange and Apple juice fresh and delicious','precio':'$1000000'});
   var contenido=document.getElementById("contenido");
   