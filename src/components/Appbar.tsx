import {useCart} from '@/context/Context';
import {useRouter} from 'next/router';

export default function Appbar(){

    const router = useRouter();

    const handleNavigation = () => {
        router.push('/cart')
    }
    
    const {items} = useCart();
    
    return (

        <div className='w-full p-2 flex flex-wrap justify-between items-center bg-blue-200 shadow-lg'>
            <p className='sm:pl-8 mb-4 text-3xl font-semibold pt-4'>E-commerce</p>

            <div onClick={handleNavigation} className=' cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 pointer">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>Click to Checkout!

            <p className='sm:pr-10 font-semibold text-s'>Items in cart are : {items.length}</p>
            </div>
        </div>
    )
}