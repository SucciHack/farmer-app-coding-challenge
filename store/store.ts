// import { ProductsProps } from "@/Types/types";

import { ProductsProps } from "@/Types/types";
import toast from "react-hot-toast";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ICartItem{
    id: string;
    title: string;
    slug: string;
    description: string;
    rating: string[];
    price: number;
    quantity:number;
    image: string
}

type CartState = {
    items:ICartItem[]
    handleAddToCart:(product: ProductsProps)=> void
    handleRemove:(id:string) => void
    updateQty:(type:"increment"|"decrement",id:string)=> void
}

export const useCartStore = create<CartState>()(
    persist(
        (set,get)=> ({
            items:[],
            handleAddToCart:(product)=> {
                const existingItem = get().items
                const isItemInCart = existingItem.find((item)=> item.id === product.id)
                if(isItemInCart){
                    toast.error("Item already exists")
                }else{
                    set({
                        items:[...get().items,{
                            id: product.id,
                            title: product.title,
                            slug: product.slug,
                            description: product.description,
                            rating:product.rating,
                            price: product.price,
                            quantity:1,
                            image: product.images[1]
                        }]
                    })
                    toast.success("Product added Successfully.")
                }
            },
            handleRemove:(id)=>{
                const items = get().items;
                const filteredItems = items.filter((item)=> id !== item.id);
                set({items:filteredItems})
                toast.success("Item Removed successfully")
            },
            updateQty:(type, id)=>{
                const item = get().items.find((item)=> item.id === id)

                if(!item){
                    return
                }
                    if(type === "increment"){
                      item.quantity += 1;
                    }else if (item.quantity >1){
                        item.quantity -=1
                    }
                    set({
                        items:[...get().items],
                    })
                }
        }),
        {
            name: 'local-Storage'
        }
    )
)





