import {useCart} from '@/context/Context';

export function Appbar(){
    
    const {items} = useCart();
    
    return (
        <div>
            hi this is 
            <p>Items in cart are : {items.length}</p>
        </div>
    )
}