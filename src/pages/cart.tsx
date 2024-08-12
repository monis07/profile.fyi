import {Product_in_cart} from '@/components/Product_in_cart'
import { useCart } from '@/context/Context'

export default function cart(){
    const {items} = useCart();
    let total = 0;

    return(
        <>
         <div className='m-2 font-semibold mb-3 text-xl'>Total no. of items in cart : {items.length}</div>
         {items.map((item)=>{
            console.log("hitting before total")
            total = total + item.price * item.quantity;
            return <Product_in_cart product={item}/>
         })}

         <div>{total}</div>
        </>
    )
}