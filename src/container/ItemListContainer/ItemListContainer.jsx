import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import gFetch from "../../components/ItemProductList/ItemProductList";
import './ItemListContainer.css'

function ItemListContainer ({greeting}) {
    const greetingStyle = {fontSize: "200%"}

    const [product , setProd] = useState({})
    const [loading, setLoading] = useState (true)

    const {categoriaId} = useParams()

    useEffect(()=> {
        if(categoriaId){
            gFetch()
            .then (data => setProd(data.filter(prod=>prod.categoria === categoriaId)))
            .catch(err => err)
            .finally(()=>setLoading(false))
        }else{
            gFetch()
            .then (data => setProd(data))
            .catch(err => err)
            .finally(()=>setLoading(false))
        }
    }, [categoriaId])
    
    return (
        <div className="divGeneral">
            <span style={greetingStyle}>{greeting}</span>
            <ItemList product={product} loading={loading}/>
        </div>
    )
}

export default ItemListContainer;