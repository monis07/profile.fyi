import create from 'zustand';
import { persist } from 'zustand/middleware';

interface Product_details_type{
    id:number,
    image:string,
    name:string,
    description:string,
    price:number,
    quantity:number
}

interface CartState {
  items: Product_details_type[];
  addtoCart: (item: Omit<Product_details_type, 'quantity'>) => void;
  removefromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;

}

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addtoCart: (item) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);
          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          }
          return { items: [...state.items, { ...item, quantity: 1 }] };
        }),

      removefromCart: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),
        
      updateQuantity: (id, quantity) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, quantity: Math.max(0, quantity) } : i
          ),
        })),
    }),
    {
      name: 'cart-storage', // unique name for localStorage key
    }
  )
);