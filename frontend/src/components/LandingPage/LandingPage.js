import React from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Button,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import RoleCard from "../RoleCard/RoleCard";
import { Code, Security, MusicNote, Audiotrack } from "@mui/icons-material";

const roles = [
  {
    title: "Full Stack Developer",
    description: "Building modern web applications with scalable and reusable code.",
    icon: Code,
    image: "/Images/web-development-coding-programming-futuristic-banner-computer-code-laptop_3482-5572.avif",
    portfolioLink: "/resume",
  },
  {
    title: "Cybersecurity Student",
    description: "Protecting systems and networks with cutting-edge security knowledge.",
    icon: Security,
    image: "/Images/adobestock_857262714.jpeg",
    portfolioLink: "/resume",
  },
  {
    title: "Audio Plugin Developer",
    description: "Creating powerful audio tools for sound designers and musicians.",
    icon: Audiotrack,
    image: "/Images/istockphoto-1287065554-612x612.jpg",
    portfolioLink: "/products",
  },
  {
    title: "Music Producer",
    description: "Crafting music and instrumentals that inspire and connect with audiences.",
    icon: MusicNote,
    image: "/Images/tumblr_428a8b79bdec68abd26b37ba2ca5c6d3_e1932f4c_1280.jpg",
    portfolioLink: "https://www.youtube.com/@DoomsProduction",
  },
];

const HeroSection = ({ user }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  color: theme.palette.secondary.main,
                  mb: 2,
                }}
              >
                Explore. Create. Protect.
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: "1.15rem",
                  mb: 4,
                }}
              >
                Full-Stack Developer • Cybersecurity Student • Music Producer
              </Typography>

              {/* {!user && (
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: "999px",
                    boxShadow: "none",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: theme.palette.primary.dark,
                      transform: "scale(1.03)",
                    },
                  }}
                  onClick={() =>
                    document.querySelector("#cta-footer").scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Join the Magic
                </Button>
              )} */}
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
            <motion.img
              src="/Images/selfie.jpg"
              alt="Hero"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{
                width: "100%",
                maxWidth: 280,
                borderRadius: theme.shape.borderRadius * 2,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const RolesGrid = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {roles.map((role, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <RoleCard {...role} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const FooterCTA = () => {
  const theme = useTheme();

  return (
    <Box
      id="cta-footer"
      sx={{
        py: 10,
        textAlign: "center",
        backgroundColor: theme.palette.background.default,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Typography
        variant="h5"
        sx={{ mb: 2, fontWeight: 500 }}
      >
        Ready to explore?
      </Typography>
      <Typography
        variant="body2"
        sx={{ mb: 3, color: theme.palette.text.secondary }}
      >
        Start building something magical today.
      </Typography>

      {/* <Button
        variant="contained"
        color="primary"
        sx={{
          borderRadius: "999px",
          px: 4,
          py: 1.5,
          fontWeight: 600,
          boxShadow: "none",
          textTransform: "none",
          "&:hover": {
            backgroundColor: theme.palette.primary.dark,
            transform: "scale(1.03)",
          },
        }}
      >
        Create an account
      </Button> */}
    </Box>
  );
};

const LandingPage = () => {
  const user = useSelector((state) => state.session.user);
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative", // Required for absolute positioning of blobs inside
        overflow: "hidden",   // Prevent scrollbars from blobs
        backgroundColor: theme.palette.background.default,
        width: "100vw",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      {/* === Content === */}
      <HeroSection user={user} />
      <RolesGrid />
      {!user && <FooterCTA />}
    </Box>
  );
};


export default LandingPage;
