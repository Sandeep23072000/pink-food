import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Feedback = () => {
  return (
    <>
      <Container>
        <Box sx={{marginBlock:'3rem'}}>
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
            Our customer <span style={{ color: "#e44b99" }}> feedback</span>
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
            Don’t take our word for it. Trust our customers
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Feedback;
