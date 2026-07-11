const API = "http://192.168.100.73:3000";

async function apiGET(ruta) {

    const r = await fetch(API + ruta);

    if (!r.ok)
        throw new Error("Error " + r.status);

    return await r.json();

}

async function apiPOST(ruta, datos) {

    const r = await fetch(API + ruta, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(datos)

    });

    if (!r.ok)
        throw new Error("Error " + r.status);

    return await r.json();

}

const api = {

    productos: {

        listar() {

            return apiGET("/productos");

        },

        guardar(producto) {

            return apiPOST("/productos", producto);

        }

    }

};
