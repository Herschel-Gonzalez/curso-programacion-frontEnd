let productos = [];
let imagenes = [];

function crearProducto() {
    cargarProductos();
    let nombre = document.getElementById('nombre').value;
    let descripcion = document.getElementById('descripcion').value;
    let precio = document.getElementById('precio').value;
    let imagen = imagenes[0];

    let producto = {
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        imagen: imagen

    }

    productos.push(producto);
    alert("se agrego correcamente el producto");
    localStorage.setItem('productos', JSON.stringify(productos));

}

function cargarProductos() {
    let products = JSON.parse(localStorage.getItem('productos'));
    productos = products;
}


function getImagenes() {
    let imagen = document.getElementById('imagen').files[0];
    readImage(imagen);
}

function readImage(file) {
    // Check if the file is an image.
    
    if (file.type && !file.type.startsWith('image/')) {
      console.log('File is not an image.', file.type, file);
      return;
    }
  
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        imagenes.push(event.target.result);
        if (imagenes.length==1) {
            crearProducto();
        }
        
    });
    reader.readAsDataURL(file);
  }