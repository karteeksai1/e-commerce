import { Routes ,Route} from 'react-router'
import { HomePage } from './pages/HomePage'
import {CheckoutPage} from './pages/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage'
import {Tracking} from './pages/Tracking'
import './App.css'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path='checkout' element={<CheckoutPage/>}></Route>
      <Route path='orders' element={<OrdersPage/>}/>
      <Route path='tracking' element={<Tracking/>}/>

    </Routes>
      
    </>
  )
}

export default App
