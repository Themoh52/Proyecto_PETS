import { Link } from "react-router-dom"

const BuyContainer=()=>{
    
    return(
        <div>
           <p className="mb-5 ms-3">Aquí estará la subida de datos</p>
           <Link to="/"><button className="btn btn-outline-primary mb-5 ms-3">Volver a la tienda</button></Link> 
        </div>
        
    )
}
export default BuyContainer