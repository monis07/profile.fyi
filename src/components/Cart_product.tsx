// This component has the logic to how a single product in the cart looks like. It contains the product image, name, price, description, quantity and remove button.
'use client'

import type { Product_details_type } from "../data/product_details";
import {useCart} from "@/state_management/State_management";

export function Cart_product({product}:{product:Product_details_type}) {
    const {removefromCart,updateQuantity} = useCart(); //using these two functions from useCart custom hook to remove product from cart and update quantity of product in cart so that state is managed across applications. These functions are called below
    
    //formatting the price of the product according to Indian Currency like adding comma after 1 digit or 2 digit
    let price = (product.price * product.quantity).toString();
    if( price.length === 4)
    {
      price = price.substring(0,1) + "," + price.substring(1,price.length)
    }
    else if(price.length === 5){
    price = price.substring(0,2) + "," + price.substring(2,price.length);
    }

  return (
    

          <div className="flex max-w-full">
            
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">

                  <div className="mt-8">
                    <div>
                      <ul role="list" className="-my-6 divide-y divide-gray-200">
                          <li key={product.id} className="flex flex-col sm:flex-row">

                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src={product.image}
                                className="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div className="mt-4 mb-4 sm:m-4 flex flex-1 flex-col">
                                
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a>{product.name}</a>
                                  </h3>
                                  <p className="ml-4">₹{price}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500 w-1/2">{product.description}</p>
                              </div>

                              <div className="flex flex-1 items-center justify-between text-sm mt-3 mb-3">

                                {/* Quantity buttons are used to update quantity of the product in the cart using updateQuantity function from custom hook useCart(). 
                                This function takes two inputs, one is the product id and another one is the updated quantity. 
                                The quantity can't go below one (as defined using Math.max below) and there is no upper limit */}
                                <div className="flex justify-center items-center">
                                <button onClick={() => updateQuantity(product.id, Math.max(1, product.quantity - 1))} className={"w-[30px] h-[30px] flex justify-center items-center text-2xl m-1"}>-</button>

                                <p className="text-gray-500">Qty {product.quantity}</p>

                                <button onClick={() => updateQuantity(product.id, product.quantity + 1)} className={"w-[30px] h-[30px] flex justify-center items-center text-xl m-1"}>+</button>
                                </div>
                              
                                {/* remove button which removes item from the cart using removefromCart. This function takes one input that is product id*/}
                                <div className="flex">
                                  <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={()=>removefromCart(product.id)}>
                                    Remove
                                  </button>

                                </div>

                              </div>

                            </div>

                          </li>
                      </ul>

                    </div>
                  </div>
                </div>
                
              </div>
  )
}
