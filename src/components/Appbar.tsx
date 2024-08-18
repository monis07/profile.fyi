// This component is used to display the appbar at the top of the page. It contains the logo, country icon and cart icon.
'use client'

import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import {useCart} from '@/state_management/State_management';
import {useRouter} from 'next/router'

export default function Appbar() {
    // Navigation to cart.tsx page using router
    const router = useRouter(); 
    
    const {items} = useCart(); //items in cart are stored in items variable

  return (
    <div className="bg-white">

        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                  <img
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
              </div>

              {/* Country Icon */}
              <div className="ml-auto flex items-center cursor-pointer">

                <div className="lg:ml-8 flex">

                    <img
                      src="./india.png"
                      className="block h-5 w-7 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">IN</span>
                </div>

                  {/*Cart Icon which displays the number of items in cart and also user is navigated to cart page on clicking cart icon*/}
                  <div className="flex items-center p-2 ml-4 lg:ml-6" onClick={()=> router.push('/cart')}
                  >
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{items.length}</span>
                  </div>


              </div>
            </div>
          </div>
        </nav>
        
    </div>
  )
}
