import React from 'react'
import Feature__items from '../../components/Feature__items'
import { Our_history } from '../../components/Our_history'
import Manu from '../../components/CafenaPopularMenu'
const Home = () => {
  return (
    <>
    {/* Home */}
    <Feature__items></Feature__items>
    
    <Our_history></Our_history>
    <Manu></Manu>
    </>
  )
}

export default Home