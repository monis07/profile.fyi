import type { Product_details_type } from "../product_details";
import {useCart} from "@/context/Context";

export function T_productcard({product}:{product:Product_details_type}){
    const {addtoCart, items} = useCart();
    let existingItem
    
    if(product.id){
      existingItem = items.find((item)=>item.id === product.id)
    }

    const handleCart = () => {
      console.log("added to cart")
      addtoCart(product);
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

                  <p className="text-sm font-medium text-gray-900">₹{product.price}</p>
                </div>

                {
                  existingItem ? <div className="bg-gray-100 w-full text-md font-medium text-gray-700 pt-1.5 pb-1.5 rounded-md text-center mt-6">Added to cart</div>:<button className="bg-gray-100 w-full text-md font-medium text-gray-700 pt-1.5 pb-1.5 rounded-md cursor-pointer text-center mt-6"
                  onClick={handleCart}
                  >Add to cart</button>
                }

              
              </div>

    )
}

