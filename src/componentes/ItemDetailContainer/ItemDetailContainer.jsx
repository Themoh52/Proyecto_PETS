//Import all the hooks, pages and components used//
import {useEffect,useState} from "react"
import{useParams} from "react-router-dom"
import {doc, getFirestore, getDoc} from "firebase/firestore"
import ItemDetail from "../ItemDetail/ItemDetail"
import Loading from "../Loader/Loader"

//It contains the component that contain the component "ItemDetail".//
const ItemDetailContainer = () =>{

//Establishes the initial state of the product shown.//
    const[product, setProduct]= useState({})
    
//Establishes the initial state of the loading of products.//
    const[loading, setLoading] = useState(true)
    
//It contains the parameter used to navigate to the page of the website.//
    const {ProductId} = useParams()

//It detects the properties associated from the database, and show the product selected from ItemListContainer.//
    useEffect(()=>{
        const db = getFirestore()
        const queryDoc = doc(db, "productos", ProductId)
        getDoc(queryDoc)
        .then(respond=> setProduct({id: respond.id, ...respond.data()}))
        .catch(error => console.log(error))
        .finally(setLoading(false))
            },[])
    
//It contains the loading of the product selected from ItemListContainer.//
    return(
        <>
            {loading ? <Loading/> 
            : 
            <ItemDetail
            product={product}
            />
            }
        </>
    )
}
export default ItemDetailContainer