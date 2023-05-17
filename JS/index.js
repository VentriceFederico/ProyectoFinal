const patchcords_literales = (JSON.parse(localStorage.getItem("patchcords")) ?? []);

const patchcords_index = [];

patchcords_literales.forEach(patch => {
    patchcords_index.push(new Patchcord(
        patch.tipo_fo,
        patch.direccionamiento,
        patch.conector_1,
        patch.conector_2,
        patch.mts,
        patch.cant,
        patch.id,
        patch.precio
    ))
});

function ver_patch() {
    const contenedor_patchcords = document.getElementById("productos");
    patchcords_index.forEach(patch => {
        const tarjeta_patch = document.createElement("div");
        tarjeta_patch.className = "productos-tarjeta";
        tarjeta_patch.id = "productos-tarjeta-" + patch.id;
        tarjeta_patch.innerHTML = `
                                <img src="./IMG/conectores.jpg" alt="Conectores">
                                <h3>Patchcord de Fibra Optica</h3>
                                <div class="productos-tarjeta-p">
                                    <p>Tipo de Fibra: ${patch.tipo_fo}</p>
                                    <p>Direccionamiento: ${patch.direccionamiento}</p>
                                    <p>Conector 1: ${patch.conector_1}</p>
                                    <p>Conector 2: ${patch.conector_2}</p>
                                    <p>Longitud: ${patch.mts} Mts</p>
                                    <p>Cantidad en Stock: ${patch.cant}</p>
                                    <h2>Precio: ${patch.precio} USD</h2>
                                </div>
                                <form id="form-compra-${patch.id}">
                                    <input min="1" max="${patch.cant}" class="cantidad" type="number" name="cantidad" id="cantidad-${patch.id}" placeholder="Cantidad">
                                    <input type="submit" id="btn-compra-${patch.id}" value="Agregar al carrito" class="btn-compra">
                                </form>
                                `
        contenedor_patchcords.append(tarjeta_patch);
        agregar_carrito(patch.id);
    })
}

function filtrado(patchcords_index) {
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
        const tarjeta_patch = document.querySelectorAll('.productos-tarjeta').forEach(element => element.classList.add('filter'));

        let tarjeta_patch_filter;
        for (const filtrado of arr_filtrado) {
            tarjeta_patch_filter = document.querySelector('#productos-tarjeta-' + filtrado.id);
            tarjeta_patch_filter.classList.remove('filter');
        }
    }

    const filter_tipo_fo = document.getElementById('tipoFO');
    filter_tipo_fo.addEventListener('input', e => {
        filtros.tipo_fo_filt = e.target.value;
        console.log(e.target.value)
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

const productos_carrito = (JSON.parse(localStorage.getItem("productos_carrito")) ?? []);
const patchcords = (JSON.parse(localStorage.getItem("patchcords")) ?? []);

function agregar_carrito(id) {

    const form_carrito = document.getElementById("form-compra-" + id);

    form_carrito.addEventListener("submit", (e) => {
        e.preventDefault();

        const cantidad = e.target.children["cantidad"].value;

        const index = productos_carrito.findIndex((patch) => patch.id == id)

        if (index == -1) {
            const patch_carrito = {
                id: id,
                cant: cantidad,
            }
            productos_carrito.push(patch_carrito);
        }
        else {
            productos_carrito[index].cant = cantidad;
        }

        localStorage.setItem("productos_carrito", JSON.stringify(productos_carrito));
        Toastify({
            text: "Se agreggo al carrito.",
            duration: 3000,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
                color: "#000",
            },
        }).showToast()
    })
}
ver_patch();
filtrado(patchcords_index);

