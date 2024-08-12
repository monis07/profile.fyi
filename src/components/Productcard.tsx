import { useState } from "react";
import type { Product_details_type } from "../product_details";
import {useRouter} from "next/router";
import {useCart} from "@/context/Context";

export function Productcard({product}:{product:Product_details_type}){
    const router = useRouter();
    const {addtoCart, items} = useCart();
    let existingItem
    
    if(product.id){
      existingItem = items.find((item)=>item.id === product.id)
    }

    const handleCart = () => {
      addtoCart(product);
    }

    return (
      <div className="border-2 border-black rounded-xl m-3">
        
        <img src={product.image} alt={product.image} className={"w-full h-[450px] mb-10 p-2 shadow-lg lg:h-[380px] xl:w-auto"}/>
        
      <p className="font-semibold m-2">{product.name}</p>
      <p className="text-base text-gray-600 m-2">{product.description}</p>
      <p className="text-gray-600 m-2 font-semibold text-2xl">₹{product.price}</p>
      {
          existingItem ? <p className="m-3">Added!!!</p> : <button className="border-2  border-sky-700 p-2 bg-sky-500 text-base text-sky-50 text-center font-semibold m-3" onClick={handleCart}>Add to cart</button>
      }
    </div>
    )

}

