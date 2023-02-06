//Import all the hooks, pages, components and css used//
import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, where, query } from "firebase/firestore"
import ItemList from "../ItemList/ItemList"
import Loading from "../Loader/Loader"

//It contain the component that contain the component "ItemList".//
const ItemListContainer = () =>{

//Establishes the initial state of the products shown.//
    const [products, setProducts] = useState([])

//Establishes the initial state of the loading of products.//
    const [loading, setLoading] = useState(true)
    
//It contains the parameter used to navigate to the page of the website.//
    const {categoryId} = useParams()

//It detects the properties associated from the database, and show the list of products avaliable.//
    useEffect(()=>{
        const db = getFirestore()
        const queryCollection = collection(db,"productos")
        const queryFiltered = categoryId ? query(queryCollection, where("categoria","==",categoryId)) : queryCollection  
        getDocs(queryFiltered)
        .then(respond=> setProducts(respond.docs.map(products=> ({id: products.id, ...products.data()}))))
        .catch(error => console.log(error))
        .finally(setLoading(false))
    },[categoryId])

//It contains the presentation of the website, and the loading of the list of products.//
    return(
        <div>
            <main>
                <h1 className="ms-3 mb-3">PETS, donde tu mascota es primero</h1>
                    <p className="ms-5 mb-3">Hola!, y bienvenido a PETS, donde ofrecemos productos para todo tipo de mascotas, sean grandes, pequeños, indoor u outdoor.</p>
                    <h2 className="ms-3 mb-3">Estos son los productos que tenemos para ti</h2>
                        { loading ?
                        <Loading/>
                        :
                        <ItemList products={products}/> 
                        }
            </main>
        </div>
    ) 
}
export default ItemListContainer
