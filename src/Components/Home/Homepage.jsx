import React from 'react'
import Secondone from './2ndone'
import SplitScreen from './HomePageCard'
import Landingpage from './Landingpage'
import CaptionCarousel from './slider'
import StatisticsCard from './statscard'

export default function Homepage() {
  return (
    <div>
       <StatisticsCard/> 
       <Landingpage/>
       <SplitScreen/>
    
      {/* <Secondone/> */}
    </div>
  )
}
