function DetallesProducto () {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src="{producto.img}" alt="imagen del producto"/>
                    <h3>Nombre: {producto.nombre}</h3>
                    <p>Precio: {producto.precio}</p>
                    <p>{producto.descripcion}</p>
                </div>
            </div>
        </div>
    )
}

export default DetallesProducto;