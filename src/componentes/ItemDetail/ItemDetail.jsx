//Import all the hooks and components used.//
import { ItemCount } from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../contexts/CartContext"

//It contain the component capable to show the details of the product selected from ItemListContainer. It shows details like the name, refencial photo, its price and stock avaliable. At the end of the page, it shows two bottoms; the first to go to the cart, and the second to return to the store.//
const ItemDetail = ({product}) =>{
    
//Establishes the initial state of the counter of products added.//
    const [isCount, setCount] = useState(true)

//It contain the function brought from Cartcontext.//
    const {addCart}= useCartContext()

//Function used to add products to the counter. Aditionally, it use a spread operator to bring all the properties from the database.//
    const onAdd =(cantidad)=> {  
      setCount(false)
      addCart({...product, cantidad})  
    }

//It contains the details of the product selected from ItemListContainer, like the name, refencial photo, its price and stock avaliable. When we clik the bottom "Agregar al carrito", brought from the component ItemCount, it will show two bottoms: the first to go to the cart, and the second to return to the store and keep buying.//
    return(
        <div className="row w-75 ms-3 mb-5">
            <h1 className="mb-5 ms-3">Estos son los Detalles del Producto</h1>            
                <h2 className="ms-3 mb-5">{product.name}</h2>
                <img className ="h-50 w-50 mb-5" src={product.foto} alt="Foto del producto en cuestión"/>
                <h3 className="mb-5 ms-3">Valor: ${product.price}</h3>
                <h4 className="mb-5 ms-3">Stock: {product.stock}</h4>    
            <div className="row">
                {isCount?  
                    < ItemCount stock={10} initial={1} onAdd={onAdd}/>  
                    :
                    <>
                        <Link to="/cart"><button className="btn btn-outline-primary mb-4">Ir al carrito</button></Link>
                        <Link to="/"><button className="btn btn-outline-primary mb-4"> Seguir comprando</button></Link>
                    </> 
                }
              
            </div>
        </div>
    )
}
export default ItemDetail