
import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Products from './Components/Products/Products'
import { useEffect } from 'react'
import Cart from './Cart'

function App() {

// Data load state
  const [products,setProduct] =useState([])
// button and Cart state
const[carts,setCarts] =useState([])

// state for total price
const [totals,setTotals] =useState(0)

// for DATA LOAD EFFECT
  useEffect(()=>{
    fetch('Data.json')
    .then(res=>res.json())
    .then(data=>setProduct(data))
  },[])


  // for button handler buy now
  const buyHandler =(gadget)=>{
 const newCart =[...carts,gadget];
 setCarts(newCart)
 let total =gadget.price
    {
      carts.forEach(cart=>cart.price+total)
    }
    setTotals( totals+total)

  }

  return (
    <>
    <Header></Header>
     <div className='flex gap-10'>
     <Products products={products} buyHandler={buyHandler}></Products>
     <Cart carts={carts} total={totals}></Cart>
     </div>
        
    </>
  )
}

export default App
