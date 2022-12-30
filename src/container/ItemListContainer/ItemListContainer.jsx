import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import './ItemListContainer.css'
import {collection, getDocs, getFirestore, limit, orderBy, query, where} from "firebase/firestore"

function ItemListContainer ({greeting}) {
    const greetingStyle = {fontSize: "200%"}

    const [product , setProd] = useState({})
    const [loading, setLoading] = useState (true)
    const [dbProduct, setDbProd] = useState({})

    const {categoriaId} = useParams()

    useEffect(()=> {
        const db = getFirestore()
        const queryCollection = collection(db,"productos")
        
        if(categoriaId){
            const queryFiltrada = query(queryCollection, where("categoria", "==", categoriaId, limit(6), orderBy("categoria", "asc")))
    
            getDocs(queryFiltrada)
            .then(resp => setDbProd(resp.docs.map(product => ({categoriaId: product.categoriaId, ...product.resp()}) )))
            .catch(err => err)
            .finally(()=>setLoading(false))
        }else{    
            getDocs(queryCollection)
            .then(resp => setDbProd(resp.docs.map(product => ({categoriaId: product.categoriaId, ...product.resp()}) )))
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