
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Auth from './pages/Auth'
import Landing from './pages/Landing'
import Home from './pages/home'
import Dashboard from './pages/Dashboard'
import CategorySalesChart from './components/Category'
import Dash from './pages/Dash'
import Barc from './charts/Bar'
import Addcart from './pages/Addcart'
import Linechart from './charts/Linechart'
import Barchart from './charts/Barchart'
import Piec from './charts/Piechart'
import Areac from './charts/Areachart'
import BarchartWithFilter from './charts/hello'
import Foot from './components/Footer'
import Profile from './components/Profile'
import Cart from './pages/Cart'





CategorySalesChart
function App() {



  return (
    <BrowserRouter>
    <Routes>
      <Route path='/auth' element={<Auth />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
      <Route path='/dash' element={<CategorySalesChart category="Core Components" />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/display' element={<Dash />}></Route>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/bar' element={<Barc  category="Core Components" />}></Route>
      <Route path='/product' element={<Addcart />}></Route>
      <Route path='/line' element={<Linechart />}></Route>
      <Route path='/barchart' element={<Barchart />}></Route>
      <Route path='/pie' element={<Piec />}></Route>
      <Route path='/foot' element={<Foot />}></Route>
      <Route path='/area' element={<Areac />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/summa' element={<BarchartWithFilter />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
