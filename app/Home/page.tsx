import BottomNav from '@/components/BottomNav'
import Category from '@/components/Category'
import Navbar from '@/components/Navbar'
import ProductsContainer from '@/components/ProductsContainer'
import Search from '@/components/Search'
import React from 'react'

export default async function HomeScreen() {
  return (
    <div>
      <Navbar/>
      <Search/>
      <Category/>
      <ProductsContainer />
      <BottomNav/>
    </div>
  )
}
