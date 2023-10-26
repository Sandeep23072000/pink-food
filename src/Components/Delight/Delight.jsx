import { Box, Container, Typography, Grid, Button } from "@mui/material";
import React from "react";
import Delighteveryday from "../../Assets/Delighteveryday.webp";
import Delightsattava from "../../Assets/Delightsattava.webp";
import Delightwhich from "../../Assets/Delightwhich.webp";
import Delightcold from "../../Assets/Delightcold.webp";

const Delight = () => {
  const Array = [
    {
      id: 1,
      image: Delighteveryday,
      text: 'We believe that "good food begins with good intentions." Meals are crafted with hand-picked ingredients and ethical practices to share the warmth of clean, homely food.',
    },
    {
      id: 2,
      image: Delightsattava,
      text: "Wholesome is awesome! Sattva, where with each bite, you get to experience purity wrapped in goodness that fuels you in the most nourishing way possible. Food so good. It loves you right back! ",
    },
    {
      id: 3,
      image: Delightwhich,
      text: "Knock knock. Who’s there? Wich. Wich who? Wichwich. A wide selection of handcrafted vegetarian rolls and sandwiches! Enjoy a world of savour where each bite brings a smile.",
    },
    {
      id: 4,
      image: Delightcold,
      text: "Ever wish your drinks could groove? Coldplay–a remix of flavours to keep your rhythm going. Not just a beverage but a whole vibe.",
    },
  ];

  return (
    <>
      <Container>
        <Box sx={{ padding: "1rem" }}>
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              justifyContent: "center",
              fontSize: "11rem",
              fontWeight: "700",
              transform: "uppercase",
              color: "#fdf2facc",
              "@media (max-width: 1200px)": {
                fontSize: "9rem",
              },
              "@media (max-width: 992px)": {
                fontSize: "7rem",
              },
              "@media (max-width: 768px)": {
                fontSize: "5rem",
              },
              "@media (max-width: 567px)": {
                fontSize: "4rem",
              },
            }}
          >
            PINK ADRAK
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h3"
              sx={{
                marginTop: "-7.5rem",
                fontSize: "30px",
                color: "#e44b99",
                transform: "uppercase",
                "@media (max-width: 1200px)": {
                  fontSize: "25px",
                  marginTop: "0",
                },
                "@media (max-width: 768px)": {
                  fontSize: "15px",
                  marginTop: "0",
                },
              }}
            >
              CREATING A DELIGHTFUL FOOD EXPERIENCE
            </Typography>
          </Box>
        </Box>
        <Box sx={{ marginBlock: "3rem" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: "44px",
              fontWeight: "700",
              fontFamily: "Montserrat",
              letterSpacing: "-0.5px",
              color: "#383033",
            }}
          >
            Indulge in an array of culinary wonders through{" "}
            <span style={{ color: "#e44b99" }}>our beloved brands.</span>
          </Typography>
          <Typography
            variant="h5"
            sx={{
              paddingTop: "1.5rem",
              fontSize: "18px",
              fontFamily: "Montserrat",
              lineHeight: "180%",
            }}
          >
            Through Pink Adrak, we foster the growth of multiple brands,
            moulding them from inception to making them market-ready and
            successful. Our unwavering dedication is reinforced by strategic
            guidance from Ripplewalk.
          </Typography>
        </Box>
      </Container>
      <Box sx={{ backgroundColor: "#fdf2f9" }}>
        <Container>
          <Box sx={{ flexGrow: 1, paddingBlock: "10rem" }}>
            <Grid container columns={12} spacing={2}>
              {Array.map((item, i) => {
                return (
                  <Grid item sm={12} md={6} lg={3}>
                    <Box sx={{ height:'4rem'}}>
                      <img src={item?.image} alt="" width={250} />
                    </Box>
                    <Box sx={{ height:'10rem'}}>
                      <Typography
                        sx={{
                          color: "#0f172a",
                          fontSize: "16px",
                          fontFamily: "Montserrat",
                          lineHeight: "160%",
                        }}
                      >
                        {item?.text}
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{
                        marginTop: "3.7rem",
                        backgroundColor: "#383033",
                        padding: "16px",
                        width: "70%",
                        fontSize: "18px",
                        fontWeight: "600",
                      }}
                    >
                      Know More
                    </Button>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Delight;

// <Grid item sm={12} md={6} lg={3}>
//   <Box>
//     <img src={Delightsattava} alt="" width={250} />
//   </Box>
//   <Box sx={{ paddingTop: "3rem" }}>
//     <Typography
//       sx={{
//         colorL: "#0f172a",
//         fontSize: "16px",
//         fontFamily: "Montserrat",
//         lineHeight: "160%",
//       }}
//     >
//       Wholesome is awesome! Sattva, where with each bite, you get
//       to experience purity wrapped in goodness that fuels you in
//       the most nourishing way possible. Food so good. It loves you
//       right back!
//     </Typography>
//   </Box>
//   <Button
//     variant="contained"
//     color="secondary"
//     sx={{
//       marginTop: "2rem",
//       backgroundColor: "#383033",
//       padding: "16px",
//       width: "70%",
//       fontSize: "18px",
//       fontWeight: "600",
//     }}
//   >
//     Know More
//   </Button>
// </Grid>
// <Grid item sm={12} md={6} lg={3}>
//   <Box sx={{ paddingTop: "1.3rem" }}>
//     <img src={Delightwhich} alt="" width={250} />
//   </Box>
//   <Box sx={{ paddingTop: "4.2rem" }}>
//     <Typography
//       sx={{
//         colorL: "#0f172a",
//         fontSize: "16px",
//         fontFamily: "Montserrat",
//         lineHeight: "160%",
//       }}
//     >
//       Knock knock. Who’s there? Wich. Wich who? Wichwich. A wide
//       selection of handcrafted vegetarian rolls and sandwiches!
//       Enjoy a world of savour where each bite brings a smile.
//     </Typography>
//   </Box>
//   <Button
//     variant="contained"
//     color="secondary"
//     sx={{
//       marginTop: "3.6rem",
//       backgroundColor: "#383033",
//       padding: "16px",
//       width: "70%",
//       fontSize: "18px",
//       fontWeight: "600",
//     }}
//   >
//     Know More
//   </Button>
// </Grid>
// <Grid item sm={12} md={6} lg={3}>
//   <Box>
//     <img src={Delightcold} alt="" width={250} />
//   </Box>
//   <Box sx={{ paddingTop: "3rem" }}>
//     <Typography
//       sx={{
//         colorL: "#0f172a",
//         fontSize: "16px",
//         fontFamily: "Montserrat",
//         lineHeight: "160%",
//       }}
//     >
//       Ever wish your drinks could groove? Coldplay–a remix of
//       flavours to keep your rhythm going. Not just a beverage but
//       a whole vibe.
//     </Typography>
//   </Box>
//   <Button
//     variant="contained"
//     color="secondary"
//     sx={{
//       marginTop: "5.3rem",
//       backgroundColor: "#383033",
//       padding: "16px",
//       width: "70%",
//       fontSize: "18px",
//       fontWeight: "600",
//     }}
//   >
//     Know More
//   </Button>
// </Grid>
