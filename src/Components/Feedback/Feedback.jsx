import { Box, Container, Grid, Rating, Typography } from "@mui/material";
import React from "react";
import Costumer1 from "../../Assets/Customer1.webp";
import Costumer2 from "../../Assets/Customer2.webp";
import Costumer3 from "../../Assets/Customer3.webp";
import StarIcon from "@mui/icons-material/Star";

const Feedback = () => {
  return (
    <>
      <Container>
        <Box sx={{ marginTop: "3rem" }}>
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
      <Box sx={{paddingBlock: "5rem" }}>
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container columns={12} spacing={4}>
              <Grid item sm={12} md={6} lg={4}>
                <Box
                  sx={{
                    display: "block",
                    padding: "3rem 2rem",
                    backgroundColor: "#fdf2fa",
                    borderRadius: "8px",
                    height:'319px',
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
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: "15px",
                        fontFamily: "Montserrat",
                        lineHeight: "22px",
                      }}
                    >
                      Pink Adrak is my go-to place for an amazing food
                      experience. The diverse menu options from Everyday9,
                      Sattva, Coldplay, and Whichwich never cease to impress.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      paddingTop: "2rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: "600" }}>
                      4.0<span style={{ fontSize: "16px" }}>/5.0 rating</span>
                    </Typography>
                    <Rating defaultValue={4} />
                  </Box>
                </Box>
              </Grid>
              <Grid item sm={12} md={6} lg={4}>
                <Box
                  sx={{
                    display: "block",
                    padding: "3rem 2rem",
                    backgroundColor: "#fdf2fa",
                    borderRadius: "8px",
                    height:'319px',
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <img src={Costumer2} alt="" width={100} />
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
                      Saksham Chauhan
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      paddingTop: "1rem",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: "15px",
                        fontFamily: "Montserrat",
                        lineHeight: "22px",
                      }}
                    >
                      It is a culinary haven! The attention to detail is
                      remarkable. I always leave with a satisfied palate and a
                      smile.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      paddingTop: "4.5rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: "600" }}>
                      3.0<span style={{ fontSize: "16px" }}>/5.0 rating</span>
                    </Typography>
                    <Rating defaultValue={3} />
                  </Box>
                </Box>
              </Grid>
              <Grid item sm={12} md={6} lg={4}>
                <Box
                  sx={{
                    display: "block",
                    padding: "3rem 2rem",
                    backgroundColor: "#fdf2fa",
                    borderRadius: "8px",
                    height:'319px',
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <img src={Costumer3} alt="" width={100} />
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
                      Pallavi Guram
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      paddingTop: "1rem",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: "15px",
                        fontFamily: "Montserrat",
                        lineHeight: "22px",
                      }}
                    >
                      As a corporate employee, Pink Adrak's lunch options have
                      been a delicious delight.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      paddingTop: "4.5rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: "600" }}>
                      4.0<span style={{ fontSize: "16px" }}>/5.0 rating</span>
                    </Typography>
                    <Rating defaultValue={4} />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Feedback;
