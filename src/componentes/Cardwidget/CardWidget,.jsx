//Import all the hooks, pages and css used//
import { useCartContext } from "../../contexts/CartContext";

//Take the counter of the products added to the cart, using the global variable "totalQuantity" from CartContext//
const CardWidget=()=> {
    const {totalQuantity} = useCartContext()

//It has a contidion. If the condition is true, it will show the counter, , it won't show.//
    return (
        <div>
            {totalQuantity() > 0 && totalQuantity()}
            <img className='Cartwidget' src="https://avico.com.ar/assets/img/cart/carrito.png" alt="Carrito de Compras" />
        </div>
    );
  }
  export default CardWidget;