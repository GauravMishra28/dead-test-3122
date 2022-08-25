import { Button } from '@chakra-ui/react'
import React from 'react'

export default function Paginate({current, pageNumber, onchange}) {
        //  console.log(current, pageNumber, onchange)
      let pages= new Array(pageNumber).fill(0).map((item,index)=>
         
          <Button
          color="black.500"
          variant='link'
          disabled={current === index + 1}
          onClick={() => onchange(index + 1)}
          key={`page-${index + 1}`}>
          {index + 1}
          </Button>
      )
      
        return pageNumber !== 0 && pages;
}
