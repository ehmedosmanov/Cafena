import React from 'react'
import "./index.scss"
import CoffeMachineSection from '../../HomeSections/CoffeeMachineSec'
import OurNewsSection from '../../HomeSections/OurNewsSection'
import BookingTable from '../../BookingTableComponents/BookingTableSection'
import LayoutCoffee from '../../LayoutCoffe'



const Home = () => {
  return (
    <>
    {/* Home */}
    <LayoutCoffee></LayoutCoffee>
 <CoffeMachineSection></CoffeMachineSection>

  <OurNewsSection></OurNewsSection>

<BookingTable></BookingTable>
    </>
  )
}

export default Home