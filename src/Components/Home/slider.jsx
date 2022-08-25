import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Image,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  };

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  

  const cards = [
    {
      title: 'World of Anterra',
      text:
        "Skyrim with pixel art. Influenced by classic and modern games, World of Anterra is an innovative, open world roleplaying game.",
      image:
        'https://ksr-ugc.imgix.net/assets/038/341/360/f7c3d22a5ee47d4f66e7f3ab2038f497_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1661027665&auto=format&frame=1&q=92&s=68d189c98c7672b315a01b54b3eb8330',
       creator:"By 81monkeys", 
    },
    
    {
      title: 'Star Stuff-ies',
      text:
        "Cuddle the constellations with a zodiac-inspired stuffed toy.",
      image:
        'https://ksr-ugc.imgix.net/assets/038/368/086/41e5f512ae7e43281111287bafde3974_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1661272961&auto=format&frame=1&q=92&s=e82bef9417986b92ddcecbbb357a7bcd',
        creator:"Emily Fischer", 
    },
    {
      title: 'Bleeding Edges: The Art of Danni Shinya Luo',
      text:
        "A 120-page deluxe hardcover featuring the art of Danni Shinya Luo, echoing the idea of “bleeding edges” through watercolor blooms.",
      image:
        'https://ksr-ugc.imgix.net/assets/038/155/137/f2189b9c3ced7decca3b610df56de9eb_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1659470884&auto=format&frame=1&q=92&s=7c6754b9090ca1037fc54c8c71022c55',
        creator:"By Rocketship", 
    },
    {
        title: 'Company of the Eagle #1-3 — A Harrowing Anticolonial Fantasy',
        text:
          "The Lord of the Rings meets The Last of the Mohicans in a 35 page anticolonial, flintlock fantasy comic.",
        image:
          'https://ksr-ugc.imgix.net/assets/037/710/699/e4f49a44389f45a91e12112893be508e_original.png?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1655787417&auto=format&frame=1&q=92&s=c4d6083c3d3ba332288a5f157c873cf8',
         creator:"By John J. Perez", 
      },
      {
        title: ' NASA Automatic Watch Can Withstand 100 Earth Atmospheres',
        text:
          " NASA Automatic Watch Can Withstand 100 Earth Atmospheres 🚀 Commemorating the farthest human-made object in space, the individually numbered Voyager Automatic Deep Space Diver can go anywhere",
        image:
          'https://ksr-ugc.imgix.net/assets/038/069/397/4cb3fbba5ea235d1de70afde77cc6268_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1658792407&auto=format&frame=1&q=92&s=3ad6002098fcb63ada9ab1a4d3e6f1c8',
         creator:"By Xeric", 
      },
      {
        title: 'TEMUDJIN by Ozanam and Carrion',
        text:
          "A gallery-sized fantasy graphic novel about a man who could be the reborn Genghis Khan lushly illustrated by Antoine Carrion.",
        image:
          'https://ksr-ugc.imgix.net/assets/038/368/223/60c27b9c201a0e2511b26660beb3fe25_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1661274011&auto=format&frame=1&q=92&s=ac0d40a42cb7ab44059d714cfd05e94c',
         creator:"By Neurobellum Productions", 
      },
  ];

  return (
    <Box
      position={'relative'}
    //   height={'400px'}
    //   border="1px solid black"
      width={'100%'}
      margin="auto"
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="30px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="30px" />
      </IconButton>
      {/* Slider */}

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            >
           <Box width="70%" margin="auto" mb="2rem">
               <Image  margin="auto"src={card.image}/>
           </Box>
           <Box width="70%" margin="auto">
               <Text mb="1rem" fontSize= {["12px","16px", "16px", "1.5rem"] }  lineHeight= "1.7rem">{card.title}</Text>
               <Text mb="2rem" noOfLines={[6, 5, 3]}>{card.text}</Text>
               <Text color="GrayText">{card.creator}</Text>
           </Box>



            {/* <Container size="32rem" height="250px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                  {card.text}
                </Text>
              </Stack>
            </Container> */}
          </Box>
        ))}
      </Slider>
    </Box>
  );
}