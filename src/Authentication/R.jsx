// import React from 'react'
// import { useState } from 'react';
// import { Box, Button, Input, Stack } from "@chakra-ui/react";
// import { useNavigate } from 'react-router-dom';


// export default function Registration() {
//     const [data,setData]= useState({username:"", email:"", phone:"", password:"",id:""})
//     const navigate= useNavigate()


//   const handleInput = (e) => {
//    const {name, value}= e.target
//   setData({...data,[name]:value ,id: new Date().getTime()})   
//   };
// //   console.log(data)
// // let localarr=[]
// const handleSubmit=(e)=>{
//     e.preventDefault()
//     // localarr.push(data)
//     localStorage.setItem("userdetails", JSON.stringify(data))
//     setData({username:"", email:"", phone:"", password:"",id:""})
//     navigate("/login")
// }

//   return (
//     <div>
//       <Box>
//         <form onSubmit={handleSubmit}>
//           <Stack>
//             <Input
//               id="name"
//               onChange={handleInput}
//               value={data.username}
//               name="username"
//               autoComplete="off"
//               type="text"
//               placeholder="Name"
//             />
//             <Input
//               id="email"
//               onChange={handleInput}
//               value={data.email}
//               name="email"
//               autoComplete="off"
//               type="email"
//               placeholder="Email"
//             />
//             <Input
//               id="password"
//               onChange={handleInput}
//               value={data.password}
//               name="password"
//               autoComplete="off"
//               type="password"
//               placeholder="Password"
//             />
//              <Input
//               id="phone"
//               onChange={handleInput}
//               value={data.phone}
//               name="phone"
//               autoComplete="off"
//               type="number"
//               placeholder="Phone Number"
//             />
//             <Button type="submit" colorScheme="blue">
//               Signup
//             </Button>
//           </Stack>
//         </form>
//       </Box>
//     </div>
//   );
// }

