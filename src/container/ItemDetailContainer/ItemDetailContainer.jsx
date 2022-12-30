import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";
import gFetch from "../../components/ItemProductList/ItemProductList";

function ItemDetailContainer () {
    const [product , setProd] = useState({})
    const [loading, setLoading] = useState (true)
    const [inputType, setInputType] = useState("agregarCarrito")

    const handleInter = () => {
        setInputType("input")
    }


    const {productId} = useParams()

    useEffect(() =>{
        gFetch()
        .then(data => setProd(data.find(producto=> producto.id ===  parseInt(productId))))
        .catch (err => err)
        .finally (()=> setLoading(false))
    }, [productId])


    return (
       <ItemDetail product={product} loading={loading} inputType={inputType} handleInter={handleInter}/>
    )
}

export default ItemDetailContainer;