import {useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchProducts } from '../features/productSlice'
import ProductCard from "./ProductCard";

const ProductList = () => {

    const dispatch = useDispatch();
    const {items,status}=useSelector((state)=>state.products);

    useEffect(()=>{
        if(status === "idle"){
            dispatch(fetchProducts())
        }
    },[dispatch,status])

  return (
    <div>
        {items.map((product)=>(
            <ProductCard product={product} key={product.id}/>
        ))}
    </div>
  )
}

export default ProductList