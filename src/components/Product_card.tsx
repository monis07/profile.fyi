//This component has the logic to how a single product on the home page looks like. It contains the product image, name, price, description and add to cart button
import type { Product_details_type } from "../data/product_details";
import {useCart} from "@/state_management/State_management";

export function Product_card({product}:{product:Product_details_type}){
    const {addtoCart, items} = useCart(); //addtoCart function is used to add product to cart and items is used to store the items in cart

    //checking if the product is already in the cart or not.
    let existingItem
    if(product.id){
      existingItem = items.find((item)=>item.id === product.id)
    }

    //formatting the price of the product according to Indian Currency like adding comma after 1 digit or 2 digit
    let price = product.price.toString();
    if( price.length === 4)
    {
      price = price.substring(0,1) + "," + price.substring(1,price.length)
    }

    return (
        <div key={product.id}>

                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.description}
                    src={product.image}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>

                <div className="mt-4 flex justify-between">

                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a>
                        <span aria-hidden="true" className="inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                  </div>

                  <p className="text-sm font-medium text-gray-900">₹{price}</p>
                </div>
                {/* This is where we check whether item is in the cart or not. if it is in the cart then we show "added to cart" text and if it is not then we show "add to cart" button. Add to cart button is used to call addtoCart function which takes the whole item as input and adds the item to cart by updating items variable*/}
                {
                  existingItem ? <div className="bg-black w-full text-md font-medium text-white pt-1.5 pb-1.5 rounded-md text-center mt-6">Added to cart</div>:<button className="bg-gray-100 w-full text-md font-medium text-gray-700 pt-1.5 pb-1.5 rounded-md cursor-pointer text-center mt-6"
                  onClick={()=>addtoCart(product)}
                  >Add to cart</button>
                }
              </div>
    )
}

