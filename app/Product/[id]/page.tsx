import BottomNav from '@/components/BottomNav'
import ProductDetail from '@/components/ProductDetail'
import ProductsNavbar from '@/components/ProductsNavbar'
import { fetchProducts } from '@/Actions/Categoryfetch'
import Search from '@/components/Search'
import React from 'react'

export default async function page({params: {id},}:{params: {id:string}}) {
  const productsArray = await fetchProducts()||[]
  const product = productsArray?.find((product)=> product.id === id)
  return (
    <div>
      <ProductsNavbar/>
      <Search/>
      {product?<ProductDetail product={product}/>:""}
      <BottomNav/>
    </div>
  )
}
