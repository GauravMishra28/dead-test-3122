import {
  Box,
  chakra,
  SimpleGrid,
  Text,

} from "@chakra-ui/react";


export default function StatisticsCard() {
  return (
    <Box maxW="5xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h2
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}>
        Bring a creative project to life.
      </chakra.h2>
      <Text color="rgb(101, 105, 105)" textAlign="center">ON KICKSTARTER:</Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 1, lg: 2}}>
        <Box px={{ base: 4, md: 8 }} py={"5"} shadow={"2xl"}>
          <Text textAlign="center" fontSize={`3xl`} color="rgb(3, 115, 98)">
            225,492
          </Text>
          <Text color="rgb(101, 105, 105)" textAlign="center">
            projects funded
          </Text>
        </Box>
        <Box px={{ base: 4, md: 8 }} py={"5"} shadow={"2xl"}>
          <Text textAlign="center" fontSize={`3xl`} color="rgb(3, 115, 98)">
          $6,212,934,519
          </Text>
          <Text color="rgb(101, 105, 105)" textAlign="center">
          towards creative work
          </Text>
        </Box>
        <Box px={{ base: 4, md: 8 }} py={"5"} shadow={"2xl"}>
          <Text textAlign="center" fontSize={`3xl`} color="rgb(3, 115, 98)">
          69,383,940
          </Text>
          <Text color="rgb(101, 105, 105)" textAlign="center">
          pledges
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
