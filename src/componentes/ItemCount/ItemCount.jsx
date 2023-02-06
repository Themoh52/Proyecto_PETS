//Import the hook used//
import {useState} from "react"

//It contain the component capable to add the quantity of products desired, to subtract products and submit the quantity of products desired to the cart.//
export const ItemCount = ({stock =10 , ini= 1, onAdd}) =>{
    
//Establishes the initial state of the counter of products added//
    const [count, setCount] = useState(ini);

//Function capable to add products to the counter//
    const controladorCount =() => {
        if(count<stock) setCount(count+1)    
    }
//Function capable to subtract products from the counter//
    const resetCount=() =>{
        if(count>ini) setCount(count-1)
    }
    
////Function capable to submit the quantity of products desired to the cart////
    const agregar=()=>onAdd(count)

//It contains three bottoms: the first to add products, the second to subtract it and the third to add the quantity of products desired to the cart//
    return(
    <main className="mb-5 ms-5 column">
                <button className="btn btn-outline-primary" onClick={controladorCount}>+</button>
                {count}
                <button className="btn btn-outline-primary" onClick={resetCount}>-</button>
                <button className="btn btn-outline-primary" onClick={agregar}>Agregar al carrito</button>
    </main>
    )
}
 