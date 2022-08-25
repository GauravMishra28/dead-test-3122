import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
import Secondone from './2ndone';
import CaptionCarousel from './slider';
  
  export default function SplitScreen() {
    return (
      <>
      <Stack minH={'40vh'} border="1px solid black" py="3rem" width="90%" margin="auto" direction={{ base: 'column', md: 'row' }}>
           <Flex flex={1.4}>
          <Image
            alt={'Card Image'}
            objectFit={'cover'}
            src={
              'https://ksr-static.imgix.net/Witchstarter-opencall-IAM-600x210-357f722.png?ixlib=rb-4.0.2&s=4d1fff87d5ca2ac67a590b03fa979a6f'
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
               Ready to make magic?
              </Text>
              <br />{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} lineHeight="1.5rem"color={'gray.800'}>
            This October, take part in Witchstarter, our first open call for Magic & Divination projects. To participate, launch a project in the theme of magic and the occult, or discover new favorites to pledge to. Deck or dice, book or board game, ideas for Witchstarter campaigns can span any category on Kickstarter.
            </Text>
          </Stack>
        </Flex>
      </Stack>
      <CaptionCarousel/>
      <Secondone/>

      </>
    );
  }