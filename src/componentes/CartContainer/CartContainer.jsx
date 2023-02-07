//Import all the hooks, pages and components used.//
import { Link } from "react-router-dom"
import { useCartContext } from "../../contexts/CartContext"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import "./CartContainer.css"

//It contain the function capable to bring the information about the products to buy. It contain details like name(s), referential images, quantity and price for each product added to the cart.//
const CartContainer = () =>{

//Establishes the initial state of the object dataForm, using the hook useState.//
    const [dataForm, setDataForm] = useState({
        name:"",
        phone:"",
        email:""})
    
//It contain all the functions brought from Cartcontext//
    const {cartList, deleteCart, totalPrice, totalQuantity, deleteItem} = useCartContext()

//It create the collection of data called "orders", push an object called "order" with the following details: name, id and price.//
    const addOrder = (evt) =>{
        evt.preventDefault()
        const order={}
        order.buyer=dataForm
        order.item= cartList.map( ({name, id, price}) => ({name, id, price}) )
        const db = getFirestore()
        const queryOrder = collection(db,"orders")

//to add orders, and submit those orders to the db.//
        addDoc(queryOrder, order)
        .then(resp => alert("Listo, orden confirmada. Tu pedido tiene la id: "+ resp.id +".Te llegará un correo con los detalles de la compra y los medios de pago"))
        .catch(err => console.log(err))
        .finally(
            deleteCart(),
            setDataForm({
                name:"",
                phone:"",
                email:"" 
            })
        ) 
    }

//It controls each variation of the entered data.//
    const handleOnchange = (e) =>{
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

//It contain two conditions: If there is no product added to the cart, it will show a message indicating the situation. Otherwise,  if there is one or more products added to the cart, it will show the products and it's details, a form to enter user data to make the order, and three bottoms: the first to submit the order to the database, the second to delete every product from the cart and the third to return to the store. Aditionally, every product added to the cart has a botton to delete it from the cart.//
    return(
        <div className="mb-5 w-75">
            {totalQuantity()===0 && 
            <div>
                <h1 className="mb-5 ms-5">Lo siento, no hay productos. Agrega productos al carrito y los verás aquí.</h1>
                <Link to="/"><button className="btn btn-outline-primary mb-5 ms-5">Volver a la tienda</button></Link>
            </div>
            }

            {totalQuantity() !==0 &&
            <div>
                {cartList.map(product=> <li key={product.id} className="mb-5 CartContainer">
                <img src={product.foto} alt="" className="w-25"/>
                Nombre: {product.name}, Cantidad: {product.cantidad}, Precio: {product.price} <button className="btn btn-outline-danger" onClick={()=>deleteItem(product.id)}>X</button></li>)
                }
                <p className="mb-5 ms-5">Cantidad Total: {totalQuantity()>0 && totalQuantity()} productos</p>
                <p className="mb-5 ms-5">Precio Total: ${totalPrice()>0 && totalPrice()}</p>
                <p className="mb-5 ms-5">Ingresa tus datos para continuar con la compra:</p>    
                <form onSubmit={addOrder}>
                    <div className="mb-5 ms-5 form-group w-50">
                    <label htmlFor="name">Nombre completo</label>
                    <input 
                        type="text" 
                        className="form-control mb-5" 
                        name="name" 
                        placeholder="Ingresa tu nombre" required
                        value={dataForm.name}
                        onChange={handleOnchange}
                    />
                    <label htmlFor="phone">Teléfono</label>
                    <input 
                        type="number"
                        className="form-control mb-5" 
                        name="phone" 
                        placeholder="Ingresa tu número" required
                        value={dataForm.phone}
                        onChange={handleOnchange} 
                    />
                    <label htmlFor="email">Correo</label>
                    <input 
                        type="text"
                        className="form-control mb-5" 
                        name="email" 
                        placeholder="Ingresa tu correo" required
                        value={dataForm.email}
                        onChange={handleOnchange}
                    />
                    <label htmlFor="email">Confirmar correo</label>
                    <input 
                        type="text"
                        className="form-control mb-5" 
                        name="confirmar email" 
                        placeholder="Confirma tu correo" required
                        value={dataForm.email}
                        onChange={handleOnchange}
                    />
                    <button className="btn btn-outline-primary mb-5" >Seguir con la compra</button>
                    </div>
                </form>
                <div className="row w-25 ms-5">
                <button className="btn btn-outline-danger mb-5 " onClick={deleteCart}> Vaciar carrito</button>
                <Link to="/"><button className="btn btn-outline-primary">Volver a la tienda</button></Link>
                </div>
            </div>
            }
        </div>
    )
}

export default CartContainer