import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import gFetch from "../ItemProductList/ItemProductList";

function ItemList () {
    const [prod, setProd] = useState([])
    const [loading, setLoading] = useState (true)
    useEffect(() =>{
        gFetch()
        .then(data => setProd(data))
        .catch (err => err)
        .finally (()=> setLoading(false))
    }, [])

    return (
        <section className="card border border-secondary">
            {loading ? <img src="https://media.tenor.com/wXTO9bFFJXMAAAAC/loading-slow-internet.gif"
            alt="loading" title="loading"/>:
            prod.map(product => 
            <div key={product.id}>
                    <img className="card-img-top" src={product.img} alt="Card image cap"/>
                    <div className="card-body">
                        <h3 className="card-title">{product.nombre}</h3>
                        <p className="card-text">${product.precio}</p>
                        <Link to={`/detalles/${product.id}`}>
                            <button>Más información</button>
                        </Link>
                    </div>
                    <ItemCount/>
                    <button>Agregar al carrito</button>
                </div>)}
        </section>
    )
}

export default ItemList