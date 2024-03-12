
let comida = prompt("Ingresa los productos de la cesta de la compra (separados con comas)");

let productos = comida.split(",");

productos.forEach((producto) => {
    console.log(producto.trim()); 
});
