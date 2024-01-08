class ProductManager{

    static ultID = 0;

    constructor(){
        this.productos = []
    }

    addProduct(title, desciption, price, img, code, stock){
        
        if (!title || !desciption || !price || !img || !code || !stock){
            console.log ("Todos los campos son obligatorios");
            return;
        }

        if(this.productos.some(item => item.code === code)){
            console.log ("El codigo debe ser unico e irrepetible");
            return;
        }

        const newProduct = {
            id: ++ProductManager.ultID, 
            title,
            desciption,
            price,
            img,
            code,
            stock
        }

        this.productos.push(newProduct);
    }

    getProduct(){
        return this.productos;
    }

    getProductByID(id){
        const producto = this.productos.find(item => item.id === id);

        if(!producto){
            console.error("Not Found");
        } else{
            console.log(producto);
        }
    }
}

//Testeo

//Se creará una instancia de la clase “ProductManager”

const manager = new ProductManager();

//Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []

console.log (manager.getProduct());

// Se llamará al método “addProduct” con los campos:
// - title: “producto prueba”
// - description:”Este es un producto prueba”
// - price:200,
// - thumbnail:”Sin imagen”
// - code:”abc123”,
// - stock:25

manager.addProduct ("Producto prueba", "Esto es para testear", 200, "No img", "abc123", 25);

//El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
manager.addProduct ("Pizza", "Esto es rico", 500, "No img", "abc321", 15);
console.log (manager.getProduct());

//Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
console.log (manager.getProduct());

//Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
manager.addProduct ("Producto prueba", "Esto es para testear", 200, "No img", "abc123", 25);

//Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo
console.log("Se verifica si hay pizza")
manager.getProductByID(2);