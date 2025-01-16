'use server'

import { categoryProps } from "@/Types/types"

const API = 'https://market-hazel.vercel.app/api/products'

export async function fetchCategory(){
    try {
        const response = await fetch(API)
        const result = await response.json()
        return result.data as categoryProps[]
    } catch (error) {
        console.log(error)
    }
}