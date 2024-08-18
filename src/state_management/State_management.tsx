// This is the code to manage the state of the shopping cart using zustand and persisting the state to local storage

import {create} from 'zustand'; //create helps us create a store to manage shopping cart state but this state is temporary and we need to store it in local storage using persist
import { persist } from 'zustand/middleware'; //saves the store state to local storage
import type { Product_details_type } from '../data/product_details';

//CartState is an interface that defines the structure of the state object. it defines what it should contain and what functions should be there to modify the state
interface CartState {
  items: Product_details_type[];
  addtoCart: (item: Omit<Product_details_type, 'quantity'>) => void; //this function is used to add an item to the cart. It takes an item as an argument omiting quantity and returns void
  removefromCart: (id: number) => void; // this function is used to remove items from the cart. It takes an id as an argument and returns void
  updateQuantity: (id: number, quantity: number) => void; //this function is used to update the quantity of the item in the cart. It takes an id and updated quantity as arguments and returns void

}

export const useCart = create<CartState>()(
  persist((set) => ({ //we update the state using set function

      items: [], //items array is used to store all the items in the cart. It starts empty and items are added to it using addtoCart function

      addtoCart: (item) =>
        set((state) => ({
          items: [...state.items, { ...item, quantity: 1 }] //whenever an item is added to the cart, its quantity is set to 1 and it is added to the items array
        })),

      removefromCart: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id), //item is removed from the cart using it's id, it is filtered out from the items array
        })),
        
      updateQuantity: (id, quantity) =>
        set((state) => ({
          items: state.items.map((i) => i.id === id ? { ...i, quantity: Math.max(0, quantity) } : i //quantity of the item is updated using the id of the item. It is updated to the new quantity which can't be less than 0
          ),
        })),
    }),
    {
      name: 'cart-storage', //name of the local storage key where the state is stored. All the data can be found here by going to console.
    }
  )
);