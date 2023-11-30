import React from 'react'
import "./index.scss"
import CoffeMachineSection from '../../CoffeeMachineSec'
import OurNewsSection from '../../OurNewsSection'


import Feature__items from '../../components/Feature__items'
import { Our_history } from '../../components/Our_history'
const Home = () => {
  return (
    <>
    {/* Home */}
 <CoffeMachineSection></CoffeMachineSection>

  <OurNewsSection></OurNewsSection>


    <Feature__items></Feature__items>
    
    <Our_history></Our_history>
    </>
  )
}

export default Home