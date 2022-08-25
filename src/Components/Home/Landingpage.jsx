import { Box, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import ToughPage from './ToughPage'

export default function Landingpage() {
  return (
    <div>
    <SimpleGrid border="1px solid black" width="90%" margin="auto"columns={[1, null, 2]} spacing={10}>
        <Box>
          <Stack height="70%">
              <Text>Featured Project</Text>
              <Image src="https://ksr-ugc.imgix.net/assets/038/186/573/056b53f3b328bd6b2e892d29b7795bc0_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1659710974&auto=format&frame=1&q=92&s=9e7430ed956984458d85e65918513dc5"
              alt="capitalism"/>
        <Heading size="lg">Chokepoint Capitalism</Heading>
          <Text>An audiobook about big tech’s influence on creative labor markets</Text>
          <Text>By Cory Doctorow</Text>
          </Stack>
        </Box>
        <Box>
        <Text>RECOMMENDED FOR YOU</Text>
         <ToughPage/>
        </Box>
    </SimpleGrid>
    </div>
  )
}
