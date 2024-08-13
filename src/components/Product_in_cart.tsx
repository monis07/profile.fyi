import type { Product_details_type } from "../product_details";
import {useCart} from "@/context/Context";

export function Product_in_cart({product}:{product:Product_details_type}){
    console.log("from product_in_cart")
    const {removefromCart,updateQuantity} = useCart();

    const handleRemove = () => {
        removefromCart(product.id);
    }
    return(
        <div className="flex align-middle p-3 justify-between flex-col mt-2 mb-2 shadow-lg md:flex-row">

            <div className='flex md:w-1/2'>
            <img src={product.image} alt="fastrack" className={"w-[80px] h-[100px] m-2"}/>
            <div className="flex flex-col flex-wrap">
                <p className='m-2 font-semibold'>{product.name}</p>
                <p className='m-2'>{product.description}</p>
            </div>

            </div>
            
            <div className='flex items-center h-[48px] mt-9 md:w-3/12'>
                <button onClick={() => updateQuantity(product.id, Math.max(1, product.quantity - 1))} className={"rounded-md border-2 border-sky-500 w-[30px] h-[30px] m-2 flex justify-center items-center text-xl"}>-</button>
                <p className='text-center p-2'>{product.quantity}</p>
                <button onClick={() => updateQuantity(product.id, product.quantity + 1)} className={"rounded-md border-2 border-sky-500 w-[30px] h-[30px] m-2 flex justify-center items-center"}>+</button>
                <p className='text-2xl font-semibold p-1'>₹{product.price * product.quantity}</p>
                
            </div>

            <div className='flex'>
            <button className={'text-base mt-8 ml-3 h-[50px] text-center font-semibold text-white border-2 rounded-md bg-blue-500 p-2'}
                onClick={handleRemove}
                >Remove</button>
            </div>

        </div>
    )
}