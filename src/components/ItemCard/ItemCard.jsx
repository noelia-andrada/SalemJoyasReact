import { useEffect } from "react";
import { useState } from "react"
import gFetch from "../ItemProductList/ItemProductList";

function ItemCard () {
    const [prod, setProd] = useState([])
    const [loading, setLoading] = useState (true)
    useEffect(() =>{
        gFetch()
        .then(data => setProd(data))
        .catch (err => err)
        .finally (()=> setLoading(false))
    }, [])

    return (
        <div class="card">
            {loading ? <img src="https://media.tenor.com/wXTO9bFFJXMAAAAC/loading-slow-internet.gif"
            alt="loading" title="loading"/>:
            prod.map(product => 
            <div>
                <img class="card-img-top" src="{`product.img`}" alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">{product.nombre}</h5>
                    <p class="card-text">${product.precio}</p>
                    <a href="#" class="btn btn-primary">Más información</a>
                 </div>
            </div>)}
        </div>
    )
}

export default ItemCard