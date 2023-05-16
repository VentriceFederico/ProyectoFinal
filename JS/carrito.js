
const productos_carrito = (JSON.parse(localStorage.getItem("productos_carrito")) ?? []);
const patchcords = (JSON.parse(localStorage.getItem("patchcords")) ?? []);


function ver_patch_carrito(id) {
    const contenedorProductos = document.getElementById("carrito");
    const tarjetaProducto = document.createElement("div");


    const index = patchcords.findIndex((e) => e.id == id);

    tarjetaProducto.className = "productos-tarjeta";
    tarjetaProducto.id = "productos-tarjeta-" + patchcords[index].id;
    tarjetaProducto.innerHTML = `
                                <img src="./IMG/conectores.jpg" alt="Conectores">
                                <h3>Patchcord de Fibra Optica</h3>
                                <div class="productos-tarjeta-p">
                                <p>Item ID: ${patchcords[index].id}</p>
                                <p>Pathcord ${patchcords[index].tipo_fo} ${patchcords[index].conector_1} - ${patchcords[index].conector_2} ${patchcords[index].direccionamiento}</p>
                                <p>Cantidad: ${productos_carrito[index].cant}</p>
                                </div>
                                `
    
    contenedorProductos.append(tarjetaProducto);
}

function imprimir_patch_carrito() {
    productos_carrito.forEach(patch => {
        ver_patch_carrito(patch.id);
    });

}

imprimir_patch_carrito();