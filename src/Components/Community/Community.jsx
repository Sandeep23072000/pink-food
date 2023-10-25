import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Businesswomen from "../../Assets/Businesswomen.png";

const Community = () => {
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
            Giving back
            <span style={{ color: "#e44b99" }}> to the community</span>
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
            We take pride in building a food experience company and spreading
            kindness through our CSR activities at the "Pink Adrak Foundation".
            Our promise to society is to create a sustainable work culture to
            balance people & profit, producing success and viability in the long
            term.
          </Typography>
        </Box>
        <Box sx={{paddingBlock:'1.4rem', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <img src={Businesswomen} alt="" width={500}/>
        </Box>
      </Container>
    </>
  );
};

export default Community;
