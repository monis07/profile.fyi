// This file represents how the cart page is going to look like. It will display all the items in the cart and the total amount of the cart.
import { useCart } from '@/state_management/State_management'
import {Cart_product} from '@/components/Cart_product'
import { useRouter } from 'next/router';

export default function cart(){
    const router = useRouter();
    const {items} = useCart(); //items in cart in items array
    let total = 0; //total amount of the cart

    return(
        <>
         <h2 className="text-2xl font-bold tracking-tight text-gray-900 m-8">Shopping Cart</h2>

        {/* This map over all the items in the cart and display them one by one by passing a single item to Cart_product component.
        items.map will return an array of Cart_product components which will be rendered on the page.*/}
         {items.map((item)=>{
            total = total + item.price * item.quantity; //Meanwhile total amount of the cart is also calculated here by multiplying price of each item with its quantity and adding it to the total variable.
            return <Cart_product product={item}/>
         })}

         {/* This div is used to display the total amount of the cart. The total amount is formatted according to currency like comma after 1 or 2 digit */} 
         <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    {
                    total.toString().length === 4 ? <p>₹{total.toString().substring(0,1) + "," + total.toString().substring(1,total.toString().length)}</p> :
                    total.toString().length === 5 ? <p>₹{total.toString().substring(0,2) + "," + total.toString().substring(2,total.toString().length)}</p>:<p>₹{total}</p>
    }

                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                  <div className="mt-6">
                    <a
                      className="flex items-center justify-center rounded-md cursor-pointer border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                      Checkout
                    </a>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or{' '}
                      {/* This button is used to return user to home page when clicked using useRouter Hook*/}
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                        onClick={() => router.push('/')}
                      >
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
        </>
    )
}