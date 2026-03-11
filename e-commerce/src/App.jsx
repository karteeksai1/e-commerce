import { Routes ,Route} from 'react-router'
import { HomePage } from './pages/HomePage'
import {CheckoutPage} from './pages/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage'
import {Tracking} from './pages/Tracking'
import './App.css'
import { useState,useEffect } from 'react'
import axios from 'axios'


function App() {
  const [cart,setCart]=useState([])
  useEffect(()=>{
axios.get('http://localhost:3000/api/cart-items?expand=product')
    .then((response)=>{
      setCart(response.data)
    })
  },[])
  
  
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage cart={cart}></HomePage>}></Route>
      <Route path='checkout' element={<CheckoutPage cart={cart}/>}></Route>
      <Route path='orders' element={<OrdersPage/>}/>
      <Route path='tracking' element={<Tracking/>}/>

    </Routes>
      
    </>
  )
}

export default App
