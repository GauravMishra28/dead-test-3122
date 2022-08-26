import { Button, Flex, useColorMode } from '@chakra-ui/react';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';
import Fetch from '../Home/data';
import ProductPage from '../Home/ProductPage';

export default function Artspage() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
   
     <Flex justifyContent="center" alignItems="center">
      <Button
        aria-label="Toggle Color Mode"
        onClick={toggleColorMode}
        _focus={{ boxShadow: 'none' }}
        w="fit-content"
       >
        {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
      </Button>
    </Flex>
    <ProductPage/>
    </>
  );
}