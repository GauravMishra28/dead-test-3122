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
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { useNavigate } from 'react-router-dom';
  
  export default function Registration() {
    const [showPassword, setShowPassword] = useState(false);
    //
    const [data,setData]= useState({username:"", email:"", phone:"", password:"",id:""})
    const navigate= useNavigate()


  const handleInput = (e) => {
   const {name, value}= e.target
  setData({...data,[name]:value ,id: new Date().getTime()})   
  };
//   console.log(data)
// let localarr=[]
const handleSubmit=(e)=>{
    e.preventDefault()
    if(data.username.length<1 && data.email.length<1 && data.password.length<1)
    {
     alert("Field's cant be empty")
    }
    else{
    // localarr.push(data)
    localStorage.setItem("userdetails", JSON.stringify(data))
    setData({username:"", email:"", phone:"", password:"",id:""})
    navigate("/login")
  }
}
    return (
      <Flex
        // minH={'100vh'}
        align={'center'}
        justify={'center'}
        bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'>
        <Stack spacing={2} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={10}>
            <Stack spacing={4}>

            <Heading fontSize={'2xl'} textAlign={'center'}>
              Sign up
            </Heading>
             
                <Box>
                  <FormControl id="Name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
        id="name"
        onChange={handleInput}
        value={data.username}
        name="username"
        autoComplete="off"
        type="text"
      />
                  </FormControl>
                </Box>
            
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
        id="email"
        onChange={handleInput}
        value={data.email}
        name="email"
        autoComplete="off"
        type="email"
       
      />
              </FormControl>
              <Box>
                  <FormControl id="lastName">
                    <FormLabel>Phone Number</FormLabel>
                    <Input
        id="phone"
        onChange={handleInput}
        value={data.phone}
        name="phone"
        autoComplete="off"
        type="number"
      
      />
                  </FormControl>
                </Box>
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
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }

   
