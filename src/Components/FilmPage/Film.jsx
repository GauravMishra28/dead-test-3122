import React, { useEffect, useState } from 'react'
import SplitScreen from '../Home/HomePageCard'

import CaptionCarousel from '../Home/slider'


import {useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Filmpage() {
  const[data,setData]= useState([])
  const[data2,setData2]= useState([])
  const[data3,setData3]= useState([])
  const Nav= useNavigate()

  const productFunc=(id)=>{
      Nav(`/${id}`)
  }

  useEffect(()=>{
    getData()
    getData2()
    getData3()
  },[])

  const getData=()=>{
    axios(` https://quiet-lake-10107.herokuapp.com/cards`)
    .then((res)=>setData(res.data))
    .catch((err)=>alert(err))
  }
  const getData2=()=>{
    axios(` https://quiet-lake-10107.herokuapp.com/splitscreendata`)
    .then((res)=>setData2(res.data))
    .catch((err)=>alert(err))
  }
  const getData3=()=>{
    axios(` https://quiet-lake-10107.herokuapp.com/cards2`)
    .then((res)=>setData3(res.data))
    .catch((err)=>alert(err))
  }

  return (
    <div>
       <SplitScreen image={data2[2]?.image} title={data2[2]?.title} desc={data2[2]?.body}/>

       <CaptionCarousel productFunc={productFunc}cards={data}/>
        
         <SplitScreen image={data2[1]?.image} title={data2[1]?.title} desc={data2[1]?.body}/>

         <CaptionCarousel productFunc={productFunc} cards={data3}/>

         <SplitScreen image={data2[0]?.image} title={data2[0]?.title} desc={data2[0]?.body}/>

         <CaptionCarousel productFunc={productFunc}cards={data}/>

         <SplitScreen image={data2[3]?.image} title={data2[3]?.title} desc={data2[3]?.body}/>

         <CaptionCarousel productFunc={productFunc} cards={data3}/>

         <SplitScreen image={data2[4]?.image} title={data2[4]?.title} desc={data2[4]?.body}/> 

         <CaptionCarousel productFunc={productFunc}cards={data}/>

         <SplitScreen image={data2[5]?.image} title={data2[5]?.title} desc={data2[5]?.body}/> 
   
     
    </div>
  )
}
