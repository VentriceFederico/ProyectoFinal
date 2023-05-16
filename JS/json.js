let id = parseInt((localStorage.getItem("id"))) || 0;

const getProductos = async () => {
    try {
        if (patchcords.length === 0) {
            const resp = await fetch("../JSON/stock.json");
            const productos = await resp.json();
            productos.forEach((e) => {
                patchcords.push(
                    new Patchcord(
                        e.tipo_fo,
                        e.direccionamiento,
                        e.conector_1,
                        e.conector_2,
                        e.mts,
                        e.cant,
                        e.id,
                        e.precio
                    )
                );
                id = e.id + 1;
            });
            console.log(id);
            console.log(patchcords);
            localStorage.setItem("patchcords", JSON.stringify(patchcords));
            localStorage.setItem("id", id);

            setTimeout(() => {
                location.href = '../index.html'
            }, 50);

        } else {
            console.log("Los datos ya están almacenados en el array patchcords.");
        }
    } catch (error) {
        console.error(error);
    }
}

getProductos();
