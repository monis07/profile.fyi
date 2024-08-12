import {useState} from 'react';
import type { Product_details_type } from "../product_details";
import {useCart} from "@/context/Context";



export function Product_in_cart({product}:{product:Product_details_type}){
    console.log("from product_in_cart")
    const [count,setCount] = useState(1);
    const {removefromCart,updateQuantity} = useCart();

    // let price = product.price;
    // price = price.substring(1,price.length);
    // let actualPrice = parseInt(price);
    // actualPrice = actualPrice * count;

    const handleIncrement = () => {
        setCount(count+1);
    }

    const handleDecrement = () => {
        if(count!==1)
        setCount(count-1);
    }

    const handleRemove = () => {
        removefromCart(product.id);
    }
    return(
        <div className="flex border border-sky-500 align-middle p-3 justify-between">
            <div className='flex'>
            <img src={product.image} alt="fastrack" className={"w-[80px] h-[100px] m-2"}/>
            <div>
                <p className='m-2'>{product.name}</p>
                <p className='m-2'>{product.description}</p>
            </div>
            </div>
            
            <div className='flex justify-center h-[48px] m-2 mt-9'>
                <button onClick={() => updateQuantity(product.id, Math.max(1, product.quantity - 1))} className={"rounded-full border-2 border-sky-500 w-[24px] h-[24px] m-2"}>-</button>
                <p className='text-center p-2'>{product.quantity}</p>
                <button onClick={() => updateQuantity(product.id, product.quantity + 1)} className={"rounded-full border-2 border-sky-500 w-[24px] h-[24px] m-2"}>+</button>
                <p className='text-2xl font-semibold p-1'>{product.price * product.quantity}</p>
            </div>

            <div className='flex'>
                <button className={'border-2 border-sky-700 p-2 bg-sky-500 text-base text-sky-50 text-center font-semibold mt-8 ml-3 h-[50px]'}
                onClick={handleRemove}
                >Remove</button>
            </div>

        </div>
    )
}