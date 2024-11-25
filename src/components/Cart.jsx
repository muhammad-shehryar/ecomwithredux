// import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeFromCart,clearCart } from '../features/cartSlice'
// import { Navigate } from 'react-router-dom';



const Cart = () => {

    const cart = useSelector((state)=>state.cart);
    console.log(cart);
    const dispatch = useDispatch()

    const total = cart.reduce((sum,item)=>sum+item.price * item.quantity,0);

    // const remove=(item)=>{
    //   dispatch(()=>removeFromCart(item))
    //   console.log("remove function run");
    // }


  return (
    <div>
        <h2>Your Cart</h2>
      {
        cart.map((item)=>(
                <li key={item.id}>
                    <span>{item.title} x {item.quantity}</span>
                    <button onClick={()=>dispatch(removeFromCart(item))}>Remove</button>
                
                </li>
            )) 
      } 
        <ul>
            
        </ul>
        <p>Total : ${total.toFixed(2)}</p>
        <button onClick={()=>dispatch(clearCart())}>
            Clear Cart
        </button>
        
    </div>
  )
}

export default Cart