import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCard from "../ItemCard/ItemCard";
import gFetch from "../ItemProductList/ItemProductList";

function ItemListContainer ({greeting}) {
    const greetingStyle = {fontSize: "200%"}

    const [product , setProd] = useState({})
    const [loading, setLoading] = useState (true)
    const {categoriaId} = useParams()

    useEffect(()=> {
        gFetch()
        .then (data => setProd(data.filter(prod=>prod.categoria === categoriaId)))
        .catch(err => err)
        .finally(()=>setLoading(false))
    }, [categoriaId])
    
    return (
        <div>
            {loading ? <img src="https://media.tenor.com/wXTO9bFFJXMAAAAC/loading-slow-internet.gif"
            alt="loading" title="loading"/>:
            <div>
                <span style={greetingStyle}>{greeting}</span>
                <ItemCard/>
            </div>}
        </div>
    )
}

export default ItemListContainer;