// import React from 'react'
import ProductList from '../components/ProductList'
import {  useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  const goToCart=()=>{
    navigate("/cart")
  }
  return (
    <div>
    
        <ProductList/>
        
        <button onClick={goToCart}>Go To Cart</button>
      
    </div>
  )
}

export default Home