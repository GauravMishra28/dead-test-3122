import React from 'react'
import SplitScreen from './Home/HomePageCard'
import CaptionCarousel from './Home/slider'
import data from "../utils/data.json"

export default function ComicsPage() {
  return (
   <>
       <SplitScreen image={data.splitscreendata[0].image} title={data.splitscreendata[0].title}desc={data.splitscreendata[0].body}/>
       <CaptionCarousel cards={data.cards}/>
       <SplitScreen image={data.splitscreendata[1].image} title={data.splitscreendata[1].title}desc={data.splitscreendata[1].body}/>
       <CaptionCarousel cards={data.cards2}/>
       <SplitScreen image={data.splitscreendata[2].image} title={data.splitscreendata[2].title}desc={data.splitscreendata[2].body}/>
       <CaptionCarousel cards={data.cards}/>
       <SplitScreen image={data.splitscreendata[3].image} title={data.splitscreendata[3].title}desc={data.splitscreendata[3].body}/>
       <CaptionCarousel cards={data.cards2}/>
       <SplitScreen image={data.splitscreendata[4].image} title={data.splitscreendata[4].title}desc={data.splitscreendata[4].body}/>
       <CaptionCarousel cards={data.cards}/>
       <SplitScreen image={data.splitscreendata[5].image} title={data.splitscreendata[5].title}desc={data.splitscreendata[5].body}/>
   </>
  )
}
