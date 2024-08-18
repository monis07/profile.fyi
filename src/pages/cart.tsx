import { useCart } from '@/state_management/State_management'
import {Cart_product} from '@/components/Cart_product'
import { useRouter } from 'next/router';
export default function cart(){
    const router = useRouter();
    const {items} = useCart();
    let total = 0;

    return(
        <>
         {/* <div className='m-2 font-semibold mb-3 text-xl'>Total no. of items in cart : {items.length}</div> */}
         <h2 className="text-2xl font-bold tracking-tight text-gray-900 m-8">Shopping Cart</h2>

         {items.map((item)=>{
            total = total + item.price * item.quantity;
            return <Cart_product product={item}/>
         })}

         {/* <div className='m-10 flex justify-center items-center'>
            <button className='text-center font-semibold text-white border-2 rounded-md bg-blue-500 p-2'>
                Total amount to pay : {total}
            </button>
         </div> */}


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