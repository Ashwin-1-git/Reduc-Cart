import { Route ,Routes} from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import Home from "./pages/Wishlist"
import Home from "./pages/Cart"
import Home from "./pages/View"
import Home from "./pages/Pnf"
import Wishlist from './pages/Wishlist'
import Pnf from './pages/Pnf'




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
    </>
  )
}

export default App
