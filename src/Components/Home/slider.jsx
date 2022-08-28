import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  IconButton,
  useBreakpointValue,
 
  Text,

  Image,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

const settings = {
  dots: true,
  autoplay: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
};

export default function CaptionCarousel({ productFunc, cards }) {
                 
  const [slider, setSlider] = React.useState(null);


  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });



  return (
    <Box
      position={"relative"}
      //   height={'400px'}
      //   border="1px solid black"
      width={"100%"}
      margin="auto"
      overflow={"hidden"}
    >
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
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="30px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="30px" />
      </IconButton>
      {/* Slider */}

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards?.map((card, index) => (
          <Box key={index} onClick={()=>productFunc(card.id)}>

            <Box width="70%" margin="auto" mb="2rem">
              <Image margin="auto" src={card.image} />
            </Box>
            <Box width="70%" margin="auto">
              <Text
                mb="1rem"
                fontSize={["12px", "16px", "16px", "1.2rem"]}
                lineHeight="1.7rem"
              >
                {card.title}
              </Text>
              <Text mb="2rem" noOfLines={[6, 5, 3]}>
                {card.text}
              </Text>
              <Text color="GrayText">{card.creator}</Text>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
