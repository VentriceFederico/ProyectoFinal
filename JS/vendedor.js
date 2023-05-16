const patchcordsLiterales = (JSON.parse(localStorage.getItem("patchcords")) ?? []);
const patchcords = [];

patchcordsLiterales.forEach((patch) => {
    patchcords.push(new Patchcord(
        patch.tipo_fo,
        patch.direccionamiento,
        patch.conector_1,
        patch.conector_2,
        patch.mts,
        patch.cant,
        patch.id,
        patch.precio
    ))
})

function agregar_patch() {
    const btn_add_producto = document.getElementById("add_producto");

    btn_add_producto.addEventListener("submit", (e) => {
        e.preventDefault();

        let id = parseInt((localStorage.getItem("id"))) || 0;
        const datos = e.target.children;

        if (validar_patch(datos["add_FO"].value, datos["add_FO_type"].value, datos["add_FO_conec_1"].value,
            datos["add_FO_conec_2"].value)) {
            const patchcord = new Patchcord(
                datos["add_FO"].value,
                datos["add_FO_type"].value,
                datos["add_FO_conec_1"].value,
                datos["add_FO_conec_2"].value,
                datos["add_FO_long"].value,
                datos["add_FO_cant"].value,
                id,
                0,
            )
            patchcords.push(patchcord);
            patchcord.patchcordPrecio(patchcord.conector_1, patchcord.conector_2, patchcord.mts, patchcord.tipo_fo, patchcord.direccionamiento);
            id++;
            localStorage.setItem("patchcords", JSON.stringify(patchcords));
            localStorage.setItem("id", id);
            btn_add_producto.reset();
            Toastify({
                text: "Producto Ingresado.",
                duration: 3000,
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                    color: "#000",
                },
            }).showToast()
            ver_patch(patchcord);
        }
        else {
            Toastify({
                text: "Producto Mal Ingresado.\nVuelva a ingresarlo.",
                duration: 3000,
                style: {
                    background: "linear-gradient(to right, #FE0C0D, #000000)",
                },
            }).showToast()
        }
    })
}

function ver_patch(patchcord) {
    const contenedorProductos = document.getElementById("productos");
    const tarjetaProducto = document.createElement("div");
    tarjetaProducto.className = "productos-tarjeta";
    tarjetaProducto.id = "productos-tarjeta-" + patchcord.id;
    tarjetaProducto.innerHTML = `
                                <img src="./IMG/conectores.jpg" alt="Conectores">
                                <h3>Patchcord de Fibra Optica</h3>
                                <div class="productos-tarjeta-p">
                                <p>Tipo de Fibra: ${patchcord.tipo_fo}</p>
                                <p>Direccionamiento: ${patchcord.direccionamiento}</p>
                                <p>Conector 1: ${patchcord.conector_1}</p>
                                <p>Conector 2: ${patchcord.conector_1}</p>
                                <p>Longitud: ${patchcord.mts} Mts</p>
                                <p>Precio: $${patchcord.precio} (USD)</p>
                                </div>
                                <form id="form-editar-${patchcord.id}">
                                <label for = "cantidad-${patchcord.id}">Stock</label>
                                <input class="cantidad" type="number" name="cantidad" id="cantidad-${patchcord.id}" value=${patchcord.cant} min= "0">
                                </form>
                                `
    contenedorProductos.append(tarjetaProducto);
    editar_patch(patchcord.id);
}

function imprimir_patch(patchcords) {
    patchcords.forEach(patch => {
        ver_patch(patch);
    });

}

function editar_patch(id) {
    const btn_add_cant = document.getElementById("cantidad-" + id);
    const index = patchcords.findIndex((e) => e.id == id);
    let new_cant = patchcords[index].cant;


    btn_add_cant.addEventListener("input", () => {
        new_cant = btn_add_cant.value;
        if (new_cant < 5) {
            Toastify({
                text: "Se Actualizo el producto.\nStock menor a 5 unidades!!",
                duration: 3000
            }).showToast()
        } else {
            Toastify({
                text: "Se Actualizo el producto",
                duration: 3000
            }).showToast()
        }
        patchcords[index].cant = new_cant;

        localStorage.setItem("patchcords", JSON.stringify(patchcords));
    })
}

function validar_patch(tipo_fo, direccionamiento, conector_1, conector_2) {
    if (tipo_fo == "Seleccione el tipo de Fibra" || direccionamiento == "Direccionamiento" || conector_1 == "Conector 1" || conector_2 == "Conector 2") {
        return false;
    }
    else {
        return true;
    }
}

function filtrado(patchcords) {
    let filtros = {
        tipo_fo_filt: '',
        tipo_direccionamiento_filt: '',
        long_filt: '',
        conector_1_filt: '',
        conector_2_filt: '',
    };

    function aplicarFiltros() {
        const arr_filtrado = patchcords.filter(
            el =>
                el.tipo_fo.includes(filtros.tipo_fo_filt) &&
                el.direccionamiento.includes(filtros.tipo_direccionamiento_filt) &&
                el.mts.toString().includes(filtros.long_filt) &&
                el.conector_1.includes(filtros.conector_1_filt) &&
                el.conector_2.includes(filtros.conector_2_filt)
        );
        console.log();
        const tarjeta_patch = document
            .querySelectorAll('.productos-tarjeta')
            .forEach(element => element.classList.add('filter'));

        let tarjeta_patch_filter;
        for (const filtrado of arr_filtrado) {
            tarjeta_patch_filter = document.querySelector(
                '#productos-tarjeta-' + filtrado.id
            );
            tarjeta_patch_filter.classList.remove('filter');
        }
    }

    const filter_tipo_fo = document.getElementById('tipoFO');
    filter_tipo_fo.addEventListener('input', e => {
        filtros.tipo_fo_filt = e.target.value;
        aplicarFiltros();
    });

    const filter_tipo_direccionamiento = document.getElementById('direccionamiento');
    filter_tipo_direccionamiento.addEventListener('input', e => {
        filtros.tipo_direccionamiento_filt = e.target.value;
        aplicarFiltros();
    });

    const filter_tipo_long = document.getElementById('longitud');
    filter_tipo_long.addEventListener('input', e => {
        filtros.long_filt = e.target.value;
        aplicarFiltros();
    });

    const filter_tipo_conector_1 = document.getElementById("conector_1");
    filter_tipo_conector_1.addEventListener('input', e => {
        filtros.conector_1_filt = e.target.value;
        aplicarFiltros();
    });

    const filter_tipo_conector_2 = document.getElementById("conector_2");
    filter_tipo_conector_2.addEventListener('input', e => {
        filtros.conector_2_filt = e.target.value;
        aplicarFiltros();
    });
}

agregar_patch();
imprimir_patch(patchcords);
filtrado(patchcords);
