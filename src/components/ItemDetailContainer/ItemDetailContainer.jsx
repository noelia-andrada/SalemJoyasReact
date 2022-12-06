import { useState } from "react";
import { useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import gFetch from "../ItemProductList/ItemProductList";

function DetallesProducto () {
    const [product , setProd] = useState({})
    const [loading, setLoading] = useState (true)


    const {productId} = useParams()

    useEffect(() =>{
        gFetch()
        .then(data => setProd(data.find(producto=> producto.id ===  parseInt(productId))))
        .catch (err => err)
        .finally (()=> setLoading(false))
    }, [productId])


    return (
        <div className="card border border-secondary">
            {loading ? <img src="https://media.tenor.com/wXTO9bFFJXMAAAAC/loading-slow-internet.gif"
            alt="loading" title="loading"/> :
            <div key={product.id}>
                    <img className="card-img-top" src={product.img} alt="Card image cap"/>
                    <div className="card-body">
                        <h3 className="card-title">{product.nombre}</h3>
                        <p className="card-text">${product.precio}</p>
                        <p className="card-text">{product.descripcion}</p>
                        <p className="card-text">Categoría: {product.categoria}</p>
                        <Link to="/">
                            <button className="border border-dark">Volver</button>
                        </Link>
                    </div>
            </div>}
        </div>
    )
}

export default DetallesProducto;