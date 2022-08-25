import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
import CaptionCarousel from './slider';
  
  export default function Secondone() {
    return (
        <>
      <Stack minH={'40vh'} border="1px solid black" py="3rem" width="90%" margin="auto" direction={{ base: 'column', md: 'row' }}>
           <Flex flex={1.4}>
          <Image
            alt={'Card Image'}
            objectFit={'cover'}
            src={
              'https://ksr-static.imgix.net/ZineQuest4-2022-homepage-module-1204x516-068c3e7.png?ixlib=rb-4.0.2&auto=compress%2Cformat&w=1000&fit=min&s=9ae0de42128499ce31a965fed2da316d'
            }
          />
        </Flex>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '2xl', md: '4xl', lg: '4xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  zIndex: -1,
                }}>
                Bring an RPG zine to life
              </Text>
              <br />{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} lineHeight="1.5rem"color={'gray.800'}>
            Our annual Zine Quest open call bestows creators with a valiant mission: Bring your RPG to life with maps, adventures, monsters, comics, articles, and interviews! Discover projects inspired by old-school tabletop RPGs, like early D&D.
            </Text>
          </Stack>
        </Flex>
       
      </Stack>
      <CaptionCarousel/>
      <Stack minH={'40vh'} border="1px solid black" py="3rem" width="90%" margin="auto" direction={{ base: 'column', md: 'row' }}>
           <Flex flex={1.4}>
          <Image
            alt={'Card Image'}
            objectFit={'cover'}
            src={
              'https://ksr-static.imgix.net/advisory-council-members-2022-2100x900-hp-1204x516-950df42.png?ixlib=rb-4.0.2&auto=compress%2Cformat&w=1000&fit=min&s=20191c765c9cd1fe244204bd836b5e46'
            }
          />
        </Flex>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '2xl', md: '4xl', lg: '4xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  zIndex: -1,
                }}>
               Meet Kickstarter’s Community Advisory Council
              </Text>
              <br />{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} lineHeight="1.5rem"color={'gray.800'}>
             
  The Kickstarter Community Advisory Council will offer insight across a range of creative disciplines and help us identify issues, questions, and opportunities we may not be able to see on our own.
            </Text>
          </Stack>
        </Flex>
       
      </Stack>


      </> 
    );
  }


 