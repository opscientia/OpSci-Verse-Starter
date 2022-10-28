import React from "react";
import DonateStyled from "./overrides/donateStyle";
import { Container, Box, Typography, Button, Stack } from "@mui/material";
import { DonateCard } from "../features/cards";
import Slider from "react-slick";
import useWindowSize from "../hooks/windowResize";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  arrows: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 765,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
function Donate() {
  const [offSetLeft, setOffSetLeft] = React.useState(0);
  const left = React.useRef(null);
  const windowSize = useWindowSize();
  React.useEffect(() => {
    setOffSetLeft(left.current.getBoundingClientRect().left);
  }, [windowSize]);
  return (
    <DonateStyled component="section" offsetWidth={offSetLeft}>
      <Container maxWidth="lg">
        <Stack
          spacing={0}
          alignItems="flex-start"
          justifyContent="flex-start"
          position="relative"
        >
          <Typography
            ref={left}
            variant="h1"
            fontFamily="'Exo 2'"
            className="title"
            fontWeight={500}
          >
            Discover
          </Typography>
          <Typography
            color="primary"
            variant="h1"
            fontFamily="'Exo 2'"
            fontWeight={500}
          >
            Impact Certificates
          </Typography>
          <Typography variant="h1" fontFamily="'Exo 2'" fontWeight={500}>
            for Open Science
          </Typography>
          <Typography
            variant="h3"
            fontWeight={500}
            fontStyle="italic"
            className="comming-soon"
          >
            *coming soon
          </Typography>
        </Stack>
      </Container>
      <Box
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          display: { xs: "none", md: "block" },
        }}
        component="img"
        src="/static/images/right.png"
        alt=""
      />
      <Box className="slider-container">
        <Slider {...settings}>
          {Array.from({ length: 6 }).map((_, idx) => (
            <Box px={1} key={idx}>
              <DonateCard />
            </Box>
          ))}
        </Slider>
        <Box
          sx={{
            mx: "auto",
            display: "flex",
            justifyContent: "center",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            direction: "row-reverse",
            mt: 3,
          }}
        >
          <Button
            sx={{ mt: 2, mx: 1, fontFamily: "'Exo 2'" }}
            fontWeight={500}
            size="small"
            variant="contained"
          >
            Learn More
          </Button>
          <Button
            sx={{
              mx: 1,
              mt: 2,
              borderColor: "#fff",
              fontFamily: "'Exo 2'",
              ":hover": {
                background: "#FFf",
              },
            }}
            fontWeight={500}
            size="small"
          >
            Load More
          </Button>
        </Box>
      </Box>
    </DonateStyled>
  );
}

export default Donate;
