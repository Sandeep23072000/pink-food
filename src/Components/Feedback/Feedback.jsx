import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Costumer1 from "../../Assets/Customer1.webp";
import Costumer2 from "../../Assets/Customer2.webp";
import Costumer3 from "../../Assets/Customer3.webp";

const Feedback = () => {
  return (
    <>
      <Container>
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
      <Box sx={{ height: "30rem", paddingBlock: "5rem" }}>
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container columns={12} spacing={2}>
              <Grid item sm={12} md={6} lg={4}>
                <Box
                  sx={{
                    display: "block",
                    padding: "2rem 1rem",
                    backgroundColor: "#fdf2fa",
                    borderRadius: "8px",
                    height: "419px",
                    width: "319px",
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <img src={Costumer1} alt="" width={100} />
                  </Box>
                  <Box
                    sx={{
                      paddingTop: "1rem",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: "600", fontSize: "24px" }}
                    >
                      Sameena Shad
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      paddingTop: "1rem",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Typography>
                      Pink Adrak is my go-to place for an amazing food
                      experience. The diverse menu options from Everyday9,
                      Sattva, Coldplay, and Whichwich never cease to impress.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item sm={12} md={6} lg={4}></Grid>
              <Grid item sm={12} md={6} lg={4}></Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Feedback;
