//Import all the hooks, pages and css used//
import { memo } from "react"
import { Link } from "react-router-dom"

//It contain details of every existing product in the database, details like name, referencial image and its price. Aditionally, every product has a bottom to go to the product detail.//
const Item = memo( ({product}) =>
        {   
        return(
            <div className="card w-75 h-75 mt-5 mb-3 ms-5" key={product.id}>
                    <div className="card-header">
                        {product.name}
                    </div>
                    <div className="card-body">
                        <img  className="w-50 h-50" src={product.foto} alt="imagen del producto en cuestión" />
                        {product.price}
                    </div>
                    <Link to={`/detail/${product.id}`}>
                    <div className="card-footer">
                        <button className="btn btn-outline-primary">Detalles del producto</button>
                    </div>
                    </Link>
            </div>          
        ) 
        }
)
export default Item