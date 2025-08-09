import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  Grid,
  Link as MuiLink,
  Button,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutMe = () => {
  const theme = useTheme();

  const glassStyle = {
    p: 3,
    borderRadius: 3,
    backdropFilter: "blur(14px)",
    backgroundColor: `${theme.palette.background.paper}ee`,
    border: `1px solid ${theme.palette.primary.main}25`,
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
  };

  const sections = [
    {
      title: "🧑‍💻 About Me",
      body: `Multidisciplinary technologist blending full-stack development, audio engineering, and cybersecurity. Passionate about building scalable, secure, and creative digital experiences.`,
    },
    {
      title: "👨‍🔧 Full-Stack Developer: Building Across the Stack",
      body: `Skilled in React, Node.js, and SQL, I design robust web applications with clean code and seamless UI/UX. Experienced in REST APIs, cloud deployment, and scalable architecture.`,
    },
    {
      title: "🎛️ Audio Plugin Development: Innovation Through Sound",
      body: `Developing Aurora, a granular synthesis plugin using JUCE, delivering real-time expressive audio tools for music producers and sound designers.`,
    },
    {
      title: "🎶 Music Producer: Emotion in Every Frequency",
      body: `Producing emotionally-driven beats across genres, combining technical precision with creative sound design to craft professional-quality instrumentals.`,
    },
    {
      title: "🔐 Cybersecurity: Securing What I Build",
      body: `Pursuing Security+ certification, focused on secure networking, system hardening, and threat mitigation to ensure resilient, secure applications and infrastructure.`,
    },
  ];


  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.background.default})`,
        color: theme.palette.text.primary,
        position: "relative",
        overflow: "hidden",
        py: theme.spacing(10),
        px: theme.spacing(2),
      }}
    >
      {/* Blurred background blobs for depth */}
      <Box
        sx={{
          position: "fixed",
          top: -80,
          left: -90,
          width: 300,
          height: 300,
          background: theme.palette.primary.main,
          opacity: 0.1,
          filter: "blur(120px)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "fixed",
          bottom: -100,
          right: -80,
          width: 280,
          height: 280,
          background: theme.palette.tertiary.main,
          opacity: 0.08,
          filter: "blur(100px)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Box display="flex" justifyContent="center" mb={6}>
          <Avatar
            alt="Your Portrait"
            src="/Images/selfie.jpg"
            sx={{
              width: 140,
              height: 140,
              boxShadow: theme.shadows[5],
              border: `3px solid ${theme.palette.primary.main}`,
            }}
          />
        </Box>

        <Grid container spacing={4}>
          {sections.map((section, index) => (
            <Grid item xs={12} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card sx={glassStyle}>
                  <CardContent>
                    <Typography
                      variant="h5"
                      fontWeight={800}
                      sx={{
                        mb: 1,
                        color: theme.palette.primary.light,
                        textShadow: `0 1px 3px ${theme.palette.common.black}99`,
                      }}
                    >
                      {section.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ lineHeight: 1.8, color: theme.palette.text.secondary }}
                    >
                      {section.body}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box mt={6} textAlign="center">
          <Typography
            variant="body1"
            sx={{ mb: 2, color: theme.palette.text.secondary }}
          >
            Want to dive deeper? Check out my{" "}
            <MuiLink
              component={Link}
              to="/skills"
              underline="hover"
              sx={{ color: theme.palette.secondary.light, fontWeight: "bold" }}
            >
              projects
            </MuiLink>{" "}
            or visit my{" "}
            <MuiLink
              href="https://github.com/adamel99"
              target="_blank"
              rel="noreferrer"
              sx={{ color: theme.palette.secondary.light, fontWeight: "bold" }}
            >
              GitHub profile!
            </MuiLink>
          </Typography>

          <Button
            component={Link}
            to="/skills"
            variant="contained"
            size="large"
            sx={{
              mt: 2,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
              color: theme.palette.common.white,
              fontWeight: "bold",
              boxShadow: theme.shadows[3],
              px: 4,
              py: 1.5,
              "&:hover": {
                background: `linear-gradient(45deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
              },
            }}
          >
            Explore My Work
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutMe;
