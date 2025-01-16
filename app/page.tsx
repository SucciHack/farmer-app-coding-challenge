import BottomNav from '@/components/BottomNav'
import Corousel from '@/components/Corousel'
import React from 'react'

export default function onBoardingScreen() {
  return (
      <div className='h-screen'>
        <Corousel/>
        <BottomNav/>
      </div>
  )
}
