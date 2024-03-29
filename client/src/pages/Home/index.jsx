import React from 'react'
import './index.scss'
import CoffeMachineSection from '../../HomeSections/CoffeeMachineSec'
import OurNewsSection from '../../HomeSections/OurNewsSection'
import BookingTable from '../../BookingTableComponents/BookingTableSection'
import Feature__items from '../../components/Feature__items'
import { Our_history } from '../../components/Our_history'
import Manu from '../../components/CafenaPopularMenu'
import HeroArea from '../../components/HomeComponents/HeroArea'
import PopularProductsSection from '../../components/HomeComponents/PopularProductsSection'
import SwiperSection from '../../HomeSections/SwiperSection'

const Home = () => {
  return (
    <>
      <HeroArea />
      <Feature__items></Feature__items>
      <Our_history></Our_history>
      <Manu></Manu>
      <CoffeMachineSection></CoffeMachineSection>
      <PopularProductsSection />
      <OurNewsSection></OurNewsSection>
      <SwiperSection></SwiperSection>
      <BookingTable></BookingTable>
    </>
  )
}

export default Home
