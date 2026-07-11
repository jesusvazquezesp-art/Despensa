const API = localStorage.getItem("hcServidor") || "http://192.168.100.73:3000";

class HCQuery {

    constructor(tabla){
        this.tabla = tabla;
        this.filtros = [];
        this.orden = null;
        this.limite = null;
    }

    eq(campo,valor){
        this.filtros.push({
            tipo:"eq",
            campo,
            valor
        });
        return this;
    }

    order(campo,opciones={}){
        this.orden={
            campo,
            asc:opciones.ascending!==false
        };
        return this;
    }

    limit(n){
        this.limite=n;
        return this;
    }

    async select(columnas="*"){

        const r=await fetch(API+"/query",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({

                tabla:this.tabla,

                columnas,

                filtros:this.filtros,

                orden:this.orden,

                limite:this.limite

            })

        });

        return await r.json();

    }

    async insert(datos){

        const r=await fetch(API+"/insert",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({

                tabla:this.tabla,

                datos

            })

        });

        return await r.json();

    }

    async update(datos){

        const r=await fetch(API+"/update",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({

                tabla:this.tabla,

                datos,

                filtros:this.filtros

            })

        });

        return await r.json();

    }

    async delete(){

        const r=await fetch(API+"/delete",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({

                tabla:this.tabla,

                filtros:this.filtros

            })

        });

        return await r.json();

    }

    async maybeSingle(){

        const r=await this.limit(1).select("*");

        if(r.data && r.data.length){

            return {

                data:r.data[0],

                error:null

            };

        }

        return {

            data:null,

            error:r.error||null

        };

    }

}

window.api={

    from(tabla){

        return new HCQuery(tabla);

    }

};
