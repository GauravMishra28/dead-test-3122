import React from 'react'
import { Button, Flex, useColorMode } from '@chakra-ui/react';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';


export default function Darkmode() {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
      <>
         
     <Flex justifyContent="flex-end" alignItems="">
      <Button
        aria-label="Toggle Color Mode"
        onClick={toggleColorMode}
        _focus={{ boxShadow: 'none' }}
        w="fit-content"
       >
        {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
      </Button>
    </Flex>
      </>
    
  )
}




 
