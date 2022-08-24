import { ReactNode } from 'react';

import {
  Box,
  Container,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const Logo = () => {
  return (
      <img  height={32} viewBox="0 0 120 28" alt='logo' src="../Images/Screenshot 2022-08-24 at 3.06.50 PM.png"/>
    // <svg
    //   height={32}
    //   viewBox="0 0 120 28"
    //   xmlns="http://www.w3.org/2000/svg"
    //   >
  
  )
};


export default function LargeWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo  />
              {/* color={useColorModeValue('gray.700', 'white')} */}
            </Box>
            <Text fontSize={'sm'}>
              Kickstarter, PBC © 2022
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontWeight={'600'} fontSize={'md'} mb={2}>Product</Text>
            <Link href={'#'}>Overview</Link>
            <Link href={'#'}>Features</Link>
            <Link href={'#'}>Tutorials</Link>           

            <Link href={'#'}>Pricing</Link>
            <Link href={'#'}>Releases</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontWeight={'600'} fontSize={'md'} mb={2}>Company</Text>
            <Link href={'#'}>About</Link>
            <Link href={'#'}>Our charter</Link>
            <Link href={'#'}>Stats</Link>
            <Link href={'#'}>Press</Link>
            <Link href={'#'}>Jobs</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Text>Support</Text>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Legal</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Status</Link>
          </Stack>

{/* 
SUPPORT
Help Center
Our Rules
Creator Resources
Forward Funds
Brand assets */}
          <Stack align={'flex-start'}>
            <Text>Follow Us</Text>
            <Link href={'#'}>Facebook</Link>
            <Link href={'#'}>Twitter</Link>
            <Link href={'#'}>Dribbble</Link>
            <Link href={'#'}>Instagram</Link>
            <Link href={'#'}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}