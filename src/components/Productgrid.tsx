import { product_details } from "@/product_details"
import { Productcard } from "./Productcard"

export function Productgrid(){
    return (
        <div className="grid grid-cols-4 gap-10 p-2">
            {
                product_details.map((product)=>{
                    return <Productcard product={product}/>
                })
            }
        </div>
    )

}