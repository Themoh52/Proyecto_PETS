//Import all the hooks, pages and css used//
import { Link } from 'react-router-dom'
import './Footer.css'

//It contain the footer of the website,//
const Footer = () =>{
    return(
        <footer className='row ms-4 mb-5 w-50 footer'>
            <Link to="/about"><li className='mb-5'>Sobre Nosotros</li></Link>
            <Link to="/sponsors"><li className='mb-5'>Nuestros Auspiciadores</li></Link>
        </footer>
    )
}
export default Footer