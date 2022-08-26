import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import { Box, Center, Image, Text } from '@chakra-ui/react'
import Paginate from './Paginate'


export default function ToughPage() {
   const [data,setData]= useState([])
   const [page,setPage]= useState(1)

   useEffect(()=>{
    fetchData(page)
   },[page])

   const fetchData=(page)=>{
       console.log(page)
       axios(`https://morning-inlet-31230.herokuapp.com/projects?_limit=3&_page=${page}`)
       .then((res)=>setData(res.data)).catch((err)=>alert(err))
   }

   const handleChange=(value)=>{
    //    console.log(value)
       setPage(value)

   }
  return (
    <>
        <Box  >
        {
            data.map((el)=>
            <Box key={el.id} display="flex" >
               <Box>
                <Image width="90%" src={el.photo.little}/> 
               </Box>
               <Box>
                   <Center>
                  <Text fontWeight='bold' mb="0.5rem"  fontSize="13px">{el.name}</Text> 
                  </Center>
                  <Text  color="gray" fontSize="13px" size="md">{el.creator.name}</Text>
              
               </Box>
            </Box>)
        }
        </Box >
        <Box mt="20px" >
        <Paginate current={page} pageNumber={4} onchange={handleChange}/>
        </Box>
    </>
  )
}
