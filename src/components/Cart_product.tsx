'use client'

import type { Product_details_type } from "../data/product_details";
import {useCart} from "@/state_management/State_management";


export function Cart_product({product}:{product:Product_details_type}) {
    const {removefromCart,updateQuantity} = useCart();

    const handleRemove = () => {
        removefromCart(product.id);
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
                                  <p className="ml-4">₹{product.price * product.quantity}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500 w-1/2">{product.description}</p>
                              </div>

                              <div className="flex flex-1 items-center justify-between text-sm mt-3 mb-3">

                                <div className="flex justify-center items-center">
                                <button onClick={() => updateQuantity(product.id, Math.max(1, product.quantity - 1))} className={"w-[30px] h-[30px] flex justify-center items-center text-2xl m-1"}>-</button>

                                <p className="text-gray-500">Qty {product.quantity}</p>

                                <button onClick={() => updateQuantity(product.id, product.quantity + 1)} className={"w-[30px] h-[30px] flex justify-center items-center text-xl m-1"}>+</button>
                                </div>
                              
                                {/* remove button*/}
                                <div className="flex">
                                  <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={handleRemove}>
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
