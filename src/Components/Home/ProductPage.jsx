import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
  
  export default function ProductPage() {
      const {id}= useParams()
      const[data,setData]= useState({})
      // console.log("props", props)
      const goBack= useNavigate()
      useEffect(()=>{
        getData()
        // getData2()
      },[])

      const getData=()=>{
        axios(` http://localhost:8080/cards/${id}`)
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err))
      }

      // const getData2=()=>{
      //   axios(` http://localhost:8080/cards2/${props}`)
      //   .then((res)=>console.log(res))
      // }
    return (
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={
                data.image
              }
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
               {data.title}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={400}
                marginLeft={"5px"}
                fontSize={'xl'}>
               {data.creator}
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                noOfLines={[5, 4, 3]}
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                 {data.text}
                </Text>
                <Text fontSize={'lg'}>
                  {data.desc}
                </Text>
              </VStack>
              <Box>
                <Text
                  noOfLines={[5, 4, 3]}
                  fontSize={{ base: '16px', lg: '24px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  mb={'4'}>
                    <Text color="darkgreen" as="span">$12,559</Text> 
                   <Text as="span" color="black"> pledged of</Text> $8,212 
                   <Text as="span" color="black"> goal</Text>
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem fontSize={"22px"}>Backed by <Text fontWeight={700} as="span" color="purple">{data.backers} </Text>benefactors</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
     
            </Stack>
  
            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={["xs","md","lg"]}
              py={'7'}
              bg={useColorModeValue('green.900', 'orange.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Back this Project
            </Button>
            <Button 
             
              mt={2}
              size={["xs","md","lg"]}
              py={'1'}
              bg={useColorModeValue('yellow', 'orange')}
              color={useColorModeValue('tomato', 'blue')}           
            onClick={()=>goBack(-1)}>GO BACK </Button>
           
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }