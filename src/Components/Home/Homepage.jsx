import React from 'react'
import SplitScreen from './HomePageCard'
import Landingpage from './Landingpage'
import CaptionCarousel from './slider'
import StatisticsCard from './statscard'
import data from "../../utils/data.json"
import { Link, useNavigate } from 'react-router-dom'

export default function Homepage() {
  const Nav= useNavigate()

  const productFunc=(id)=>{
    // console.log(id);
      Nav(`/${id}`)
  //  { <Link to={`/${id}`}></Link>}
  }

  return (
    <div>
       <StatisticsCard/> 
       <Landingpage/>
       <SplitScreen image={data.splitscreendata[0].image} title={data.splitscreendata[0].title}desc={data.splitscreendata[0].body}/>

       <CaptionCarousel productFunc={productFunc}cards={data.cards}/>

       <SplitScreen image={data.splitscreendata[1].image} title={data.splitscreendata[1].title}desc={data.splitscreendata[1].body}/>

       <CaptionCarousel productFunc={productFunc} cards={data.cards2}/>

       <SplitScreen image={data.splitscreendata[2].image} title={data.splitscreendata[2].title}desc={data.splitscreendata[2].body}/>

       <CaptionCarousel productFunc={productFunc} cards={data.cards}/>

       <SplitScreen image={data.splitscreendata[3].image} title={data.splitscreendata[3].title}desc={data.splitscreendata[3].body}/>

       <CaptionCarousel productFunc={productFunc} cards={data.cards2}/>

       <SplitScreen image={data.splitscreendata[4].image} title={data.splitscreendata[4].title}desc={data.splitscreendata[4].body}/>

       <CaptionCarousel productFunc={productFunc} cards={data.cards}/>

       <SplitScreen image={data.splitscreendata[5].image} title={data.splitscreendata[5].title}desc={data.splitscreendata[5].body}/>
    </div>
  )
}
