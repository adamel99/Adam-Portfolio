import React from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Typography,
  Grid,
  Container,
  Button,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion, useScroll, useTransform } from "framer-motion";
import RoleCard from "../RoleCard/RoleCard";
import { Code, Security, MusicNote, Audiotrack, ArrowForward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal, Paper } from "@mui/material";

const roles = [
  {
    title: "Full Stack Developer",
    description: "Building modern web applications with scalable, reusable code.",
    icon: Code,
    image: "/Images/web-development-coding-programming-futuristic-banner-computer-code-laptop_3482-5572.avif",
    portfolioLink: "/resume",
  },
  {
    title: "Cybersecurity Expert",
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

// Animated background particles
const BackgroundParticles = () => {
  const theme = useTheme();
  const particles = Array.from({ length: 20 });

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            x: [null, Math.random() * window.innerWidth],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            position: "absolute",
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${theme.palette.primary.main}40, transparent)`,
            boxShadow: `0 0 ${Math.random() * 20 + 10}px ${theme.palette.primary.main}60`,
          }}
        />
      ))}
    </Box>
  );
};

// Animated gradient orb
const GradientOrb = ({ size = 400, top, left, delay = 0 }) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.8, 1.2, 0.8] }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      style={{
        position: "absolute",
        width: size,
        height: size,
        top,
        left,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${theme.palette.primary.main}30, ${theme.palette.tertiary.main}10, transparent)`,
        filter: "blur(60px)",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
};

const HeroSection = ({ user }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
        overflow: "hidden",
      }}
    >
      {/* Animated background elements */}
      <BackgroundParticles />
      <GradientOrb size={600} top="-10%" left="-10%" delay={0} />
      <GradientOrb size={400} top="50%" left="70%" delay={2} />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={8} alignItems="center">
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              style={{ y, opacity }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    fontSize: "0.875rem",
                    mb: 2,
                    display: "block",
                  }}
                >
                  WELCOME TO MY WORLD
                </Typography>
              </motion.div>

              <Typography
                variant="h1"
                sx={{
                  background: `linear-gradient(135deg, ${theme.palette.muted.main} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.tertiary.main} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem", lg: "5.5rem" },
                  mb: 3,
                  lineHeight: 1.1,
                }}
              >
                Explore.
                <br />
                Create.
                <br />
                Protect.
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: { xs: "1rem", md: "1.25rem" },
                  fontWeight: 400,
                  mb: 5,
                  lineHeight: 1.6,
                }}
              >
                Full-Stack Developer • Cybersecurity Expert • Music Producer
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: "1.1rem",
                    }}
                  >
                    View My Work
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: "1.1rem",
                    }}
                  >
                    Get in Touch
                  </Button>
                </motion.div>
              </Stack>
            </motion.div>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              style={{ position: "relative" }}
            >
              <Box
                sx={{
                  position: "relative",
                  display: "inline-block",
                  width: "100%",
                  maxWidth: 400,
                  mx: "auto",
                }}
              >
                {/* Glowing background effect */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "110%",
                    height: "110%",
                    background: `radial-gradient(circle, ${theme.palette.primary.main}40, transparent 70%)`,
                    filter: "blur(40px)",
                    animation: "pulse 3s ease-in-out infinite",
                    "@keyframes pulse": {
                      "0%, 100%": { opacity: 0.5, transform: "translate(-50%, -50%) scale(1)" },
                      "50%": { opacity: 0.8, transform: "translate(-50%, -50%) scale(1.1)" },
                    },
                  }}
                />

                {/* Image container with border effect */}
                <Box
                  sx={{
                    position: "relative",
                    padding: "4px",
                    borderRadius: "24px",
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.tertiary.main})`,
                    boxShadow: `0 20px 60px rgba(0,0,0,0.3), 0 0 40px ${theme.palette.primary.main}30`,
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "20px",
                      overflow: "hidden",
                      background: theme.palette.background.default,
                      padding: "4px",
                    }}
                  >
                    <img
                      src="/Images/selfie.jpg"
                      alt="Portfolio Hero"
                      style={{
                        width: "100%",
                        display: "block",
                        borderRadius: "16px",
                      }}
                    />
                  </Box>
                </Box>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  style={{
                    position: "absolute",
                    bottom: -20,
                    right: -20,
                  }}
                >
                  <Box
                    sx={{
                      background: `linear-gradient(135deg, ${theme.palette.background.paper}, rgba(220, 19, 108, 0.15))`,
                      backdropFilter: "blur(10px)",
                      border: `1px solid ${theme.palette.primary.main}40`,
                      borderRadius: "16px",
                      px: 3,
                      py: 2,
                      boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: theme.palette.primary.main,
                        fontWeight: 700,
                        fontSize: "0.75rem",
                        display: "block",
                        mb: 0.5,
                      }}
                    >
                      AVAILABLE FOR
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                      }}
                    >
                      Work
                    </Typography>
                  </Box>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.5 },
          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
        }}
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            width: 24,
            height: 40,
            border: `2px solid ${theme.palette.primary.main}60`,
            borderRadius: "12px",
            display: "flex",
            justifyContent: "center",
            pt: 1,
          }}
        >
          <Box
            sx={{
              width: 4,
              height: 8,
              background: theme.palette.primary.main,
              borderRadius: "2px",
            }}
          />
        </Box>
      </motion.div>
    </Box>
  );
};

const RolesGrid = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, rgba(220, 19, 108, 0.03) 50%, ${theme.palette.background.default} 100%)`,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              mb: 2,
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "3rem" },
              background: `linear-gradient(135deg, ${theme.palette.muted.main}, ${theme.palette.primary.main})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            What I Do
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "rgba(255,255,255,0.6)",
              mb: 8,
              maxWidth: 600,
              mx: "auto",
            }}
          >
            Crafting digital experiences at the intersection of code, security, and creativity
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {roles.map((role, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={index}
              sx={{ display: "flex" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                style={{ flex: 1, display: "flex" }}
              >
                <RoleCard {...role} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

const FooterCTA = () => {
};

const LandingPage = () => {
  const user = useSelector((state) => state.session.user);
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        width: "100%",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <HeroSection user={user} />
      <RolesGrid />
      {!user && <FooterCTA />}
    </Box>
  );
};

export default LandingPage;
