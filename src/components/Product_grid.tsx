import { product_details } from "@/data/product_details"
import {Product_card}  from "@/components/Product_card"

  export default function Example() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {product_details.map((product) => {
                return <Product_card product={product} />
              
  })}
          </div>
        </div>
      </div>
    )
  }
  