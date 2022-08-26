import React from 'react'

import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';


export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [data,setData]= useState({email:"", password:""})
    const navigate= useNavigate()
    const parseddata= JSON.parse(localStorage.getItem("userdetails")) || {} 
    const handleInput = (e) => {
           const {name, value}= e.target
          setData({...data,[name]:value })   
          };

        const handleSubmit=()=>{
          if(data.email.length<1 && data.password.length<1)
          {
           alert("Field's cant be empty")
          }
       else if(parseddata.email !== data.email) 
        {alert("No Account Found")}
          else if(parseddata.password !== data.password ){
            alert("Password Wrong")
          }
        else if(parseddata.email === data.email && parseddata.password === data.password){
            alert("fetching data")
            setTimeout(() => {
                alert("Welcome")
             navigate("/")
            }, 500);    
        }
        setData({email:"", password:""}) 
        }
           
     console.log(data)
    console.log(parseddata)
  return (

    <Flex
// minH={'100vh'}
align={'center'}
justify={'center'}
bgGradient='linear(to-r, green.200, pink.500)'>
<Stack spacing={2} mx={'auto'} maxW={'lg'} py={12} px={6}>
  <Box
    rounded={'lg'}
    bg={useColorModeValue('white', 'gray.700')}
    boxShadow={'lg'}
    p={10}>
    <Stack spacing={4}>

    <Heading fontSize={'2xl'} textAlign={'center'}>
    Login
    </Heading>
     

      <FormControl isRequired>
        <FormLabel>Email address</FormLabel>
        <Input

onChange={handleInput}
value={data.email}
name="email"
autoComplete="off"
type="email"

/>
      </FormControl>
    
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input type={showPassword ? 'text' : 'password'}  onChange={handleInput}
value={data.password}
name="password"
autoComplete="off" />
          <InputRightElement h={'full'}>
    
            <Button
              variant={'ghost'}
              onClick={() =>
                setShowPassword((showPassword) => !showPassword)
              }>
              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Stack spacing={10} pt={2}>
        <Button
        type="submit"
         onClick={handleSubmit}
          loadingText="Submitting"
          size="lg"
          bg={'whatsapp.400'}
          color={'white'}
          _hover={{
            bg: 'blue.500',
          }}>
      Login
        </Button>
      </Stack>
      <Stack pt={6}>
      </Stack>
    </Stack>
    <Text>New to website?
     <Link to="/signup">Signup</Link>
     
  </Text>
  </Box>
</Stack>
</Flex> 


  )
}


{/* <div>
<h1>LOGIN</h1>
 <Box>
  <Stack>
    <Input
     onChange={handleInput}
      value={data.email}
      name="email"
      autoComplete="off"
      type="email"
      placeholder="Email"
    />
    <Input
    
      value={data.password}
      onChange={handleInput}
      name="password"
      autoComplete="off"
      type="password"
      placeholder="Password"
    />
    <Button onClick={handleSubmit} colorScheme="green">
      Login
    </Button>
  </Stack>
  <Text>New to website? Signup
      <Link to="/signup">Signup</Link>
  </Text>
</Box>
</div>
) */}

