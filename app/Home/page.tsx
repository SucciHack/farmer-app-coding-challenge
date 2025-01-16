import BottomNav from '@/components/BottomNav'
import Navbar from '@/components/Navbar'
import ProductsContainer from '@/components/ProductsContainer'
import Search from '@/components/Search'
import React from 'react'

export default function HomeScreen() {
  return (
    <div>
      <Navbar/>
      <Search/>
      <ProductsContainer/>
      <BottomNav/>
    </div>
  )
}
