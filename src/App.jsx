import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import Header from './componentes/Header/Header'
import Footer from "./componentes/Footer/Footer"
import {CartContextProvider} from './contexts/CartContext'
import CartContainer from './componentes/CartContainer/CartContainer'
import AboutUs from './componentes/AboutUs/AboutUs'
import OurSponsors from './componentes/OurSponsors/OurSponsors'
import 'bootstrap/dist/css/bootstrap.min.css';

//It contains all the website called PETS. Also, contain all the routes used//
function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
        <Header/>  
        <Routes>
          <Route path='' element={< ItemListContainer />}></Route>
          <Route path='/category/:categoryId' element={< ItemListContainer/>}></Route>
          <Route path='/detail/:ProductId' element={< ItemDetailContainer/>}></Route>
          <Route path='/cart' element={<CartContainer/>}></Route>
          <Route path='/about' element={<AboutUs/>}></Route>
          <Route path='/sponsors' element={<OurSponsors/>}></Route>
        </Routes>
        <Footer/>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  )
}

export default App
