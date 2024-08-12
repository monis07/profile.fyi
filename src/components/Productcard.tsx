import { useCallback } from "react";
import type { Product_details_type } from "../product_details";
import {useRouter} from "next/router";
import {useCart} from "@/context/Context";

export function Productcard({product}:{product:Product_details_type}){
    const router = useRouter();
    const {addtoCart} = useCart();
    const handleCart = () => {
      addtoCart(product);
    }
    return (
      <div className="w-[350px]">
        
        <img src={product.image} alt={product.image} className={"w-[350px] h-[400px]"}/>
        
      <p className="font-semibold m-2">{product.name}</p>
      <p className="text-base text-gray-600 m-2">{product.description}</p>
      <p className="text-base text-gray-600 m-2">{product.price}</p>
      <button className="border-2  border-sky-700 p-2 bg-sky-500 text-base text-sky-50 text-center font-semibold m-2"
      onClick={handleCart}
      >Add to cart</button>
    </div>
    )

}

// {image, name, price, description}:{image:string, name:string, price:number, description:string}