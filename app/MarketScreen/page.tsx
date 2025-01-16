import BottomNav from '@/components/BottomNav'
import FilterButtons from '@/components/FilterButtons'
import MarketScreenCardCont from '@/components/MarketScreenCardCont'
import ProductsNavbar from '@/components/ProductsNavbar'
import Search from '@/components/Search'
import React from 'react'

export default function MarketScreen() {
  return (
    <div>
      <ProductsNavbar/>
      <Search/>
      <FilterButtons/>
      <MarketScreenCardCont/>
      <BottomNav/>
    </div>
  )
}
