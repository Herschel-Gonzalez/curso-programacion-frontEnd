let products = [];
let capa = document.getElementById("listaProductos");
listarProductos();
function listarProductos() {
    cargarProductos();

    if (products.length > 0) {
        let lista = '<img id="imagen" src="img/banner1.jpg" class="card-img-top" ><div class="pricing-header px-3 py-3 pt-md-3 pb-md-4 my-4 mx-auto text-center"><h1 class="display-4 mt-4">MINISO</h1><p class="lead">from japan to the world!</p></div><div class="container" id="lista-productos">';
        for (const producto of products) {
            lista += '<div class="card-deck mb-3 text-center">';

            lista += '<div class="card mb-4 shadow-sm">';
            lista += '<div class="card-body">';
            lista += '<img src="' + producto.imagen + '" class="card-img-top" width="200" height="200">';
            lista += '<div class="card-header">';
            lista += '<h4 class="my-0 font-weight-bold">' + producto.nombre + '</h4>';
            lista += '</div>';

            lista += '<ul class="list-unstyled mt-3 mb-4">';
            lista += '<li></li>';
            lista += '<li> ' + producto.descripcion + '</li>';
            lista += '<li><h1 class="card-title pricing-card-title precio">$<span class="">' + producto.precio + '</span></h1></li>';
            lista += '</ul>';
            lista += '        <a href="" class="btn btn-block btn-primary agregar-carrito" data-id="1">Añadir al carrito</a>';
            lista += '   </div>';
            lista += '</div>';
        }
        lista += '</div></div>';
        capa.innerHTML = lista;
    } else {
        capa.innerHTML = "No hay productos";
    }



}

function cargarProductos() {
    let productoss = JSON.parse(localStorage.getItem('productos'));
    products = productoss;
}