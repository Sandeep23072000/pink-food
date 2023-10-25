import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Delight = () => {
  return (
    <>
      <Container>
        <Box sx={{ padding: "1rem" }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: "11rem",
              fontWeight: "700",
              transform: "uppercase",
              color: "#fdf2facc",
            }}
          >
            PINK ADRAK
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: "30px",
                color: "#e44b99",
                transform: "uppercase",
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
    </>
  );
};

export default Delight;
