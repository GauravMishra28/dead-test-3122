import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';


  
  export default function SplitScreen({image,title,desc}) {
 
    return (
      <>
      <Stack minH={'40vh'}  py="3rem" width="90%" margin="auto" direction={{ base: 'column', md: 'row' }}>
           <Flex flex={1.4}>
          <Image
            alt={'Card Image'}
            objectFit={'cover'}
            src={
              image
            }
          />
        </Flex>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading 
            fontSize= {['1rem', '1.5rem', '1.9rem']}>
            {/* // fontSize={{ base: '2xl', md: '4xl', lg: '4xl' }} */}
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
               {title}
              </Text>
              <br />{' '}
            </Heading>
            <Text fontSize= {['0.7rem', '1rem']} lineHeight="1.5rem"color={"white.600"}>
              {desc}
            </Text>
          </Stack>
        </Flex>
      </Stack>

      </>
    );
  }