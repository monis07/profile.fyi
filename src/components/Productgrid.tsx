import { product_details } from "@/product_details"
import { Productcard } from "./Productcard"

export default function Productgrid(){
    return (
        <>
        <p className="text-xl text-center mt-3 font-semibold">All products</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
                product_details.map((product)=>{
                    return <Productcard product={product}/>
                })
            }
        </div>
        </>
        
    )

}