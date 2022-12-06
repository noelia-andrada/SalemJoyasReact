let producto = [
	{id: 1, nombre:"Aros Alas", precio: 7500, img:"../imagenes/aros_alas.jpg", descripcion: "Aros articulados de bronce, esmaltados en turquesa", categoria: "Aros", stock: "50"},
	{id: 2, nombre:"Aros Drop", precio: 6900, img:"../imagenes/aros_drop.jpg", descripcion: "Modernos pendientes móviles de plata 925 y cobre.", categoria: "Aros", stock: "50"},
	{id: 3, nombre:"Collar Espirales", precio: 22000, img:"../imagenes/collar_espirales.jpg", descripcion: "Collar hecho en plata 925. 32 cms de largo. Único.", categoria: "Collares", stock: "50"},
	{id: 4, nombre:"Collar Maggie", precio: 27000, img:"../imagenes/collar_maggie.jpg", descripcion: "Elegante collar de plata 925 y cobre. Piedra de Sodalita.", categoria: "Collares", stock: "50"},
	{id: 5, nombre:"Anillo Paisaje", precio: 12000, img:"../imagenes/anillo_paisaje.jpg", descripcion: "Anillo de plata esterlina. Para ocasiones especiales.", categoria: "Anillos", stock: "50"},
	{id: 6, nombre:"Anillo Meridolas", precio: 74000, img:"../imagenes/anillo_medirolas.jpg", descripcion: "Anillo de plata 925 y oro 18k. Imponente. Una pieza única.", categoria: "Anillos", stock: "50"},
	{id: 7, nombre:"Dije Planetas", precio: 18000, img:"../imagenes/dije_planetas.jpg", descripcion: "Hermoso trio de dijes en bronce, cobre y plata 925.", categoria: "Dijes", stock: "50"},
	{id: 8, nombre:"Dije geométrico", precio: 9000, img:"../imagenes/dije_geometrico.jpg", descripcion: "Dije de plata con 3 safiros rojizos-anaranjados.", categoria: "Dijes", stock: "50"}
]

function gFetch (id) {
    return new Promise((res, rej) => {
        const condition = true
        if(condition) {
            setTimeout(()=> {
                res(producto)
            }, 1000)
        }else {
            rej(
                <div>
                    <h2>No se pudieron cargar los datos, intente nuevamente.</h2>
                </div>
            )
        }
    })
}

export default gFetch;