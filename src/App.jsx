import { Route ,Routes} from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import View from "./pages/View"
import Wishlist from './pages/Wishlist'
import Pnf from './pages/Pnf'
// import Header from './components/Header'
import Footer from './components/Footer'




function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/View' element={<View/>}/>
      <Route path='/*' element={<Pnf/>}/>

    </Routes>
    <Footer/>
    </>
  )
}

export default App
