//Import all the hooks, pages and css used//
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import CardWidget from '../Cardwidget/CardWidget,';
import "./NavBar.css"

//An object that contain the properties necessary to make the NavLink//
const categoryList = [
  {id:"fsdsdsa", name:"Comida", path:"Comida"},
  {id:"vbfbx", name:"Ropa", path:"Ropa"},
  {id:"mvvmhng", name:"Juguetes", path:"Juguetes"}
]

//It contains the navbar menu. Contains links to navigate to the pages "home", "About us", "Our sponsors", "cart" and the filters of the catalog.//
const NavBar=()=> {
  return (
    <Navbar className='mb-5' bg="light" expand="lg">
      <Container>
        <NavLink to="">PETS</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/about">Sobre Nosotros</Link>
            <Link to="/sponsors">Nuestros Auspiciadores</Link>
            <NavDropdown title="Nuestros Productos" id="basic-nav-dropdown">
              {categoryList.map(({id, name, path}) => <NavLink key={id} to={`/category/${path}`}><NavDropdown.Item href="#action/3.1">{`${name}`}</NavDropdown.Item></NavLink>)}
            </NavDropdown>
            <NavLink to="/cart">
              <CardWidget/>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavBar;