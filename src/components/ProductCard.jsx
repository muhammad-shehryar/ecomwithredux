import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cartSlice'


const ProductCard = ({product}) => {

    const dispatch = useDispatch();


  return (
    <div>
    <img src={product.image} alt={product.title} />
    <h3>{product.title}</h3>
    <p>{product.price}</p>
    <button onClick={()=>dispatch(addToCart(product))}>
        Add To Cart
    </button>
    </div>
  )
}

export default ProductCard