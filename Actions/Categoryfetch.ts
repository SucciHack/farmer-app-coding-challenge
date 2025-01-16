'use server'

import { categoryProps, ProductsProps } from "@/Types/types"

const API = 'https://market-hazel.vercel.app/api/categories'

export async function fetchCategory(){
    try {
        const response = await fetch(API)
        const result = await response.json()
        return result.data as categoryProps[]
    } catch (error) {
        console.log(error)
    }
}

const productsAPI = "https://market-hazel.vercel.app/api/products"

export async function fetchProducts(){
    try {
        const response = await fetch(productsAPI)
        const result = await response.json()
        return result.data as ProductsProps[]
    } catch (error) {
        console.log(error)
    }

}