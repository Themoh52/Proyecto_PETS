//Import the component used//
import Item from "../Item/Item"

//It contains the component capable to show the list of products avaliable from the store.//
const ItemList = ({products}) =>{

//It contains the list of products avaliable from the store.//
    return(
        <div>
            { products.map( (product,index) => <Item product={product} key={index}/> )}
        </div>
    ) 
}
export default ItemList