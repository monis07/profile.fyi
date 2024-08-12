import {Product_in_cart} from '@/components/Product_in_cart'
import { useCart } from '@/context/Context'
import { useEffect, useState } from 'react';

export default function cart(){
    const {items} = useCart();
    // const [total,settotalPrice] = useState(0);
    let total = 0;

    return(
        <>
         <div className='m-2'>All products of your cart : {items.length}</div>
         {items.map((item)=>{
            console.log("hitting before total")
            total = total + item.price * item.quantity;
            return <Product_in_cart product={item}/>
         })}

         <div>{total}</div>
        </>
    )
}