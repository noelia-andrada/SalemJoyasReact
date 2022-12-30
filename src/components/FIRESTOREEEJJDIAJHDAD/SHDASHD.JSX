import {doc, getDocs, getFirestore} from "firebase/firestore"
import { useEffect, useState } from "react"

export const ItemDetail = () => {
    const [dbProduct, setDbProd] = useState({})

    useEffect(()=> {
        const db = getFirestore()
        const queryCollection = doc(db,"productos")
        getDocs(queryCollection)
        .then(resp => setDbProd(resp.docs.map(producto => ({id: producto.id, ...producto.resp()}) )))
    }, [id])

    console.log(dbProduct)
}
