
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
    <>
    
    </>
    
  )
};


export default function LargeWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'8xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={16}>
            <Box>
              {/* <Image src={"../Images/Screenshot 2022-08-24 at 3.06.50 PM.png"}/> */}
              {/* <Logo  /> */}
              {/* color={useColorModeValue('gray.700', 'white')} */}
              
            </Box>
            <Text fontSize={'sm'}>
              Kickstarter, PBC © 2022
            </Text>
          </Stack>
    
          <Stack align={'flex-start'}>
            <Text fontWeight={'600'} fontSize={'md'} mb={2}>ABOUT</Text>
            <Link href={'#'}>About us</Link>
            <Link href={'#'}>Our charter</Link>
            <Link href={'#'}>Stats</Link>
            <Link href={'#'}>Press</Link>
            <Link href={'#'}>Jobs</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontWeight={'600'} fontSize={'md'} mb={2}>SUPPORT</Text>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Our Rules</Link>
            <Link href={'#'}>Creator Resources</Link>
            <Link href={'#'}>Forward Funds</Link>
            <Link href={'#'}>Brand Assets</Link>
          </Stack>
           <Stack align={'flex-start'}>
            <Text fontWeight={'600'} fontSize={'md'} mb={2}>MORE FROM KICKSTARTER</Text>
            <Link href={'#'}>Kickstarter Magazine</Link>
            <Link href={'#'}>The Creative Independent</Link>
            <Link href={'#'}>The Kickstarter Blog</Link>           
            <Link href={'#'}>Mobile apps</Link>
            <Link href={'#'}>Research</Link>
          </Stack>
    
          <Stack align={'flex-start'}>
            <Text fontWeight={'600'} fontSize={'md'} mb={2}>Follow Us</Text>
            <Link href={'https://www.facebook.com/Kickstarter/'}>Facebook</Link>
            <Link href={'https://twitter.com/kickstarter'}>Twitter</Link>
            <Link href={'https://www.youtube.com/user/kickstarter'}>Youtube</Link>
            <Link href={'https://www.instagram.com/kickstarter/'}>Instagram</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}