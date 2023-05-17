
const productos_carrito = (JSON.parse(localStorage.getItem("productos_carrito")) ?? []);
const patchcords = (JSON.parse(localStorage.getItem("patchcords")) ?? []);


function ver_patch_carrito(patchCarrito) {
    const contenedorCarrito = document.getElementById("carrito");

    const patch = patchcords.find((patch) => patch.id == patchCarrito.id);

    if (patch != undefined) {
        const tdPatch = document.createElement("tr");
        tdPatch.innerHTML = `
            <td><img src="./IMG/conectores.jpg" alt=""></td>
            <td><h3>Patchcord ${patch.tipo_fo} ${patch.direccionamiento} ${patch.conector_1} == ${patch.conector_2} de ${patch.mts} mts.</h3></td>
            <td> $ ${patch.precio} USD</td>
            <td>${patchCarrito.cant}</td>
           `
        contenedorCarrito.append(tdPatch);
        console.log(patch);
    }
    else {
        const index = productos_carrito.findIndex((producto) => producto.id == patchCarrito.id);
        productos_carrito.splice(index, 1);
        localStorage.setItem("productos_carrito", JSON.stringify(productos_carrito));
    }
}

function imprimir_patch_carrito() {
    const carrito_visible = document.querySelector("#carrito");
    const botones_visible = document.querySelector(".botones");
    if (productos_carrito.length == 0) {

        carrito_visible.classList.add("filter");
        botones_visible.classList.add("filter");
        Swal.fire({
            title: 'No hay nada en el carrito',
            icon: 'info',
            timer: 2000,
        })
        setTimeout(() => {
            location.href = "../index.html";
        }, 2000)
    }
    else {
        carrito_visible.classList.remove("filter");
        botones_visible.classList.remove("filter");
        productos_carrito.forEach(patch => {
            ver_patch_carrito(patch);
        });
    }



}

function borrar_patch_carrito() {
    const btnBorrarCarrito = document.getElementById("btnBorrarCarrito");

    btnBorrarCarrito.addEventListener("click", () => {
        localStorage.setItem("productos_carrito", JSON.stringify([]));
        Toastify({
            text: "Se elimino el Carrito",
            duration: 3000,
            style: {
                background: "linear-gradient(to right, #FE0C0D, #000000)",
            },
        }).showToast()
        setTimeout(() => {
            location.href = "../index.html";
        }, 1500);
    })
}

function comprar_carrito() {
    let total = 0
    patchcords.forEach(patch => {
        const index = productos_carrito.findIndex((id) => id.id == patch.id)
        console.log("Patch:\n" + patch.id);
        console.log("Index de producto carrito:\n" + index);
        if (index >= 0) {
            const num = productos_carrito[index].cant * patch.precio;
            total = num + total;
            console.log("NUM:\n" + num);
            console.log("TOTAL:\n" + total)
        }
    })

    const btnComprar = document.getElementById("btnComprar");

    btnComprar.addEventListener("click", () => {
        Swal.fire({
            icon: 'success',
            title: 'Gracias Por Su Compra',
            text: 'Su total fue de $' + Number(total.toFixed(2)),
            showConfirmButton: false,
        });
        localStorage.setItem("productos_carrito", JSON.stringify([]));
        setTimeout(()=>{
            location.href = "../index.html"
            },3750);
    })
}

imprimir_patch_carrito();
borrar_patch_carrito();
comprar_carrito();