import BottomNav from '@/components/BottomNav'
import FilterButtons from '@/components/FilterButtons'
import MarketScreenCardCont from '@/components/MarketScreenCardCont'
import Navbar from '@/components/Navbar'
import Search from '@/components/Search'
import React from 'react'

export default function MarketScreen() {
  return (
    <div>
      <Navbar/>
      <Search/>
      <FilterButtons/>
      <MarketScreenCardCont/>
      <BottomNav/>
    </div>
  )
}
