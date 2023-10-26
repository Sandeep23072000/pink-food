import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Womenhome from "../../Assets/homewomen.png";
import Scalepng from "../../Assets/scale.png";
import VerifyIcon from "../../Assets/vefificationhome.png";
import Saveearth from "../../Assets/saveearth.png";

const Experience = () => {
  return (
    <>
      <Container sx={{ marginBlock: "4rem" }}>
        <Grid container>
          <Grid item lg={8} sx={{ order: { xs: 2, md: 2, lg: 1 } }}>
            <Box sx={{ display: "block" }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: "64px",
                  fontWeight: "700",
                  fontFamily: "Montserrat",
                  letterSpacing: "-0.5px",
                  color: "#383033",
                }}
              >
                Creating a delightful{" "}
                <span style={{ color: "#e44b99" }}>food experience.</span>
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
                Food is an experience, and we are here to make it delightful. We
                create this delight by standardising the food experience in an
                impeccable way. Our focus is to provide options that are
                specially curated for you, by handpicking the best from the
                rest.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                sx={{ backgroundColor: "#e44b99", marginTop: "2rem" }}
              >
                Explore Pink Adrak
              </Button>
            </Box>
          </Grid>
          <Grid item lg={4} sx={{ order: { xs: 1, md: 1, lg: 2 } }}>
            <Box>
              <img src={Womenhome} alt="" width={400} />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Box sx={{ flexGrow: 1, marginBlock: "5rem" }}>
          <Grid
            container
            columns={{ xs: 4, sm: 12, md: 12 }}
            spacing={{ xs: 3, sm: 6, md: 6 }}
          >
            <Grid item xs={12} sm={6} md={4}>
              <Box>
                <img src={Scalepng} alt="" width={80} />
              </Box>
              <Typography
                sx={{
                  paddingTop: "10px",
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily: "Montserrat",
                }}
              >
                Incubation
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontFamily: "Montserrat",
                  lineHeight: "180%",
                  paddingTop: "10px",
                }}
              >
                Proudly incubating unique brands with distinct identities to
                reshape the culinary world.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box>
                <img src={VerifyIcon} alt="" width={80} />
              </Box>
              <Typography
                sx={{
                  paddingTop: "10px",
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily: "Montserrat",
                }}
              >
                Sustained-innovations
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontFamily: "Montserrat",
                  lineHeight: "180%",
                  paddingTop: "10px",
                }}
              >
                Long-lasting innovations that benefit our ecosystem.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box>
                <img src={Saveearth} alt="" width={80} />
              </Box>
              <Typography
                sx={{
                  paddingTop: "10px",
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily: "Montserrat",
                }}
              >
                Purposeful journey
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontFamily: "Montserrat",
                  lineHeight: "180%",
                  paddingTop: "10px",
                }}
              >
                We believe in spreading kindness through our CSR activities and
                giving back to our community.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Experience;
