import React, { useState } from "react";
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
  Chip,
  Stack,
  Fade,
  IconButton,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import CodeIcon from "@mui/icons-material/Code";
import SecurityIcon from "@mui/icons-material/Security";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import ExtensionIcon from "@mui/icons-material/Extension";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { Terminal, Shield, VerifiedUser } from "@mui/icons-material";

// Animated grid background component
const GridBackground = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `
          linear-gradient(rgba(0, 187, 249, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 187, 249, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
};

const AboutMe = () => {
  const theme = useTheme();
  const [hoveredCard, setHoveredCard] = useState(null);

  const glassStyle = {
    p: 4,
    borderRadius: 0,
    backdropFilter: "blur(14px)",
    backgroundColor: `${theme.palette.background.paper}dd`,
    border: `2px solid ${theme.palette.tertiary.main}40`,
    boxShadow: `0 8px 30px rgba(0,0,0,0.3), 0 0 20px ${theme.palette.tertiary.main}20`,
    transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    position: "relative",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "2px",
      background: `linear-gradient(90deg, transparent, ${theme.palette.tertiary.main}, transparent)`,
      opacity: 0,
      transition: "opacity 0.3s ease",
    },
    "&:hover": {
      borderColor: theme.palette.tertiary.main,
      boxShadow: `0 12px 40px rgba(0,0,0,0.4), 0 0 30px ${theme.palette.tertiary.main}30`,
      "&::before": {
        opacity: 1,
      },
    },
  };

  const sections = [
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: "Cybersecurity",
      subtitle: "Securing What I Build",
      body: `CompTIA Security+ certified, focused on secure networking, system hardening, threat detection, and incident response to ensure resilient, secure applications and infrastructure.`,
      skills: ["CompTIA Security+", "Network Security", "System Hardening", "Threat Analysis"],
      color: theme.palette.tertiary.main,
      statusLabel: "SECURITY",
    },
    {
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      title: "Full-Stack Developer",
      subtitle: "Building Across the Stack",
      body: `Skilled in React, Node.js, and SQL, I design robust web applications with clean code and seamless UI/UX. Experienced in REST APIs, cloud deployment, and scalable architecture.`,
      skills: ["React", "Node.js", "SQL", "REST APIs", "Cloud"],
      color: theme.palette.secondary.main,
      statusLabel: "DEV_OPS",
    },
    {
      icon: <ExtensionIcon sx={{ fontSize: 40 }} />,
      title: "Audio Plugin Development",
      subtitle: "Innovation Through Sound",
      body: `From audio plugin development using JUCE and C++ to professional mixing and mastering, I combine deep technical knowledge with creative sound design to deliver polished, production-ready audio.`,
      skills: ["JUCE", "C++", "DSP", "Granular Synthesis"],
      color: theme.palette.primary.main,
      statusLabel: "AUDIO_DEV",
    },
    {
      icon: <MusicNoteIcon sx={{ fontSize: 40 }} />,
      title: "Music Producer",
      subtitle: "Emotion in Every Frequency",
      body: `Producing emotionally-driven beats across genres, combining technical precision with creative sound design to craft professional-quality instrumentals.`,
      skills: ["Production", "Sound Design", "Mixing", "Mastering"],
      color: theme.palette.muted.main,
      statusLabel: "PRODUCTION",
    },
  ];

  const socialLinks = [
    { icon: <GitHubIcon />, url: "https://github.com/adamel99", label: "GitHub" },
    { icon: <LinkedInIcon />, url: "#", label: "LinkedIn" },
    { icon: <EmailIcon />, url: "mailto:adamelh1999@email.com", label: "Email" },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
      }}
    >
      {/* Grid background */}
      <GridBackground />

      {/* Glowing orbs */}
      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: "fixed",
          top: -80,
          left: -90,
          width: 300,
          height: 300,
          background: theme.palette.tertiary.main,
          opacity: 0.05,
          filter: "blur(120px)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: "fixed",
          bottom: -100,
          right: -80,
          width: 280,
          height: 280,
          background: theme.palette.primary.main,
          opacity: 0.05,
          filter: "blur(100px)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box display="flex" flexDirection="column" alignItems="center" mb={8}>
            {/* Terminal header */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 1,
                background: `rgba(0, 187, 249, 0.08)`,
                border: `1px solid ${theme.palette.tertiary.main}40`,
                borderRadius: "6px",
                mb: 3,
                fontFamily: "monospace",
              }}
            >
              <Terminal sx={{ fontSize: 16, color: theme.palette.tertiary.main }} />
              <Typography
                sx={{
                  color: theme.palette.tertiary.main,
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  fontFamily: "monospace",
                }}
              >
                ~/about$ cat profile.txt
              </Typography>
            </Box>

            {/* Avatar with terminal frame */}
            <Box sx={{ position: "relative", mb: 3 }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Avatar container with cyber frame */}
                <Box
                  sx={{
                    position: "relative",
                    padding: "3px",
                    background: `linear-gradient(135deg, ${theme.palette.tertiary.main}, ${theme.palette.primary.main})`,
                    borderRadius: "50%",
                    boxShadow: `0 0 30px ${theme.palette.tertiary.main}40`,
                  }}
                >
                  <Avatar
                    alt="Your Portrait"
                    src="/Images/selfie.jpg"
                    sx={{
                      width: { xs: 120, md: 160 },
                      height: { xs: 120, md: 160 },
                      border: `4px solid ${theme.palette.background.default}`,
                    }}
                  />
                </Box>

                {/* Corner brackets around avatar */}
                <Box
                  sx={{
                    position: "absolute",
                    top: -10,
                    left: -10,
                    width: 30,
                    height: 30,
                    borderTop: `2px solid ${theme.palette.tertiary.main}`,
                    borderLeft: `2px solid ${theme.palette.tertiary.main}`,
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: -10,
                    right: -10,
                    width: 30,
                    height: 30,
                    borderTop: `2px solid ${theme.palette.tertiary.main}`,
                    borderRight: `2px solid ${theme.palette.tertiary.main}`,
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -10,
                    left: -10,
                    width: 30,
                    height: 30,
                    borderBottom: `2px solid ${theme.palette.tertiary.main}`,
                    borderLeft: `2px solid ${theme.palette.tertiary.main}`,
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -10,
                    right: -10,
                    width: 30,
                    height: 30,
                    borderBottom: `2px solid ${theme.palette.tertiary.main}`,
                    borderRight: `2px solid ${theme.palette.tertiary.main}`,
                  }}
                />
              </motion.div>

              {/* Status indicator */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 5,
                  right: 5,
                  background: theme.palette.background.default,
                  borderRadius: "50%",
                  p: 0.5,
                  border: `2px solid ${theme.palette.tertiary.main}`,
                  boxShadow: `0 0 15px ${theme.palette.tertiary.main}40`,
                }}
              >
                <Box
                  component={motion.div}
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    backgroundColor: "#27C93F",
                    boxShadow: "0 0 10px #27C93F",
                  }}
                />
              </Box>
            </Box>

            <Typography
              variant="h2"
              fontWeight={900}
              textAlign="center"
              sx={{
                mb: 1,
                fontFamily: "'Courier New', monospace",
                background: `linear-gradient(135deg, ${theme.palette.tertiary.main}, ${theme.palette.primary.main})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "0.02em",
              }}
            >
              &gt; Tech & Creativity
            </Typography>

            <Typography
              sx={{
                fontFamily: "monospace",
                fontSize: "0.75rem",
                color: theme.palette.text.secondary,
                mb: 3,
                letterSpacing: "0.1em",
              }}
            >
              // Multi-disciplinary engineer
            </Typography>

            <Typography
              variant="h6"
              textAlign="center"
              sx={{
                mb: 4,
                color: theme.palette.text.secondary,
                maxWidth: 700,
                lineHeight: 1.8,
                fontFamily: "monospace",
                fontSize: "0.95rem",
              }}
            >
              Blending full-stack development, audio engineering, and cybersecurity to
              build secure and creative digital experiences.
            </Typography>

            {/* Social Links with cyber styling */}
            <Stack direction="row" spacing={2} mb={2}>
              {socialLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconButton
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                      background: `linear-gradient(135deg, ${theme.palette.tertiary.main}15, transparent)`,
                      border: `2px solid ${theme.palette.tertiary.main}40`,
                      color: theme.palette.tertiary.main,
                      boxShadow: `0 0 15px ${theme.palette.tertiary.main}10`,
                      "&:hover": {
                        background: `linear-gradient(135deg, ${theme.palette.tertiary.main}25, ${theme.palette.primary.main}15)`,
                        borderColor: theme.palette.tertiary.main,
                        boxShadow: `0 0 20px ${theme.palette.tertiary.main}30`,
                      },
                    }}
                  >
                    {link.icon}
                  </IconButton>
                </motion.div>
              ))}
            </Stack>
          </Box>
        </motion.div>

        {/* Expertise Cards */}
        <Grid container spacing={4}>
          {sections.map((section, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <Card
                  sx={{
                    ...glassStyle,
                    height: "100%",
                  }}
                >
                  {/* Terminal header for each card */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      background: theme.palette.background.default,
                      borderBottom: `1px solid ${theme.palette.tertiary.main}40`,
                      px: 2,
                      py: 0.75,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontFamily: "monospace",
                      fontSize: "0.7rem",
                    }}
                  >
                    <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f56" }} />
                      <Box sx={{ width: 8, height: 8, borderRadius: "50%", background: "#ffbd2e" }} />
                      <Box
                        component={motion.div}
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: section.color,
                          boxShadow: `0 0 8px ${section.color}`,
                        }}
                      />
                      <Typography sx={{ fontSize: "inherit", ml: 1, color: section.color }}>
                        [{section.statusLabel}]
                      </Typography>
                    </Box>
                    <Typography sx={{ fontSize: "inherit", color: theme.palette.text.secondary }}>
                      STATUS: ACTIVE
                    </Typography>
                  </Box>

                  <CardContent sx={{ pt: 5 }}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Box
                        sx={{
                          color: section.color,
                          mr: 2,
                          display: "flex",
                          alignItems: "center",
                          p: 1.5,
                          background: `${section.color}15`,
                          border: `1px solid ${section.color}40`,
                          borderRadius: "8px",
                        }}
                      >
                        {section.icon}
                      </Box>
                      <Box flex={1}>
                        <Typography
                          variant="h5"
                          fontWeight={700}
                          sx={{
                            color: section.color,
                            mb: 0.5,
                            fontFamily: "'Courier New', monospace",
                            letterSpacing: "0.02em",
                          }}
                        >
                          {section.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                            fontWeight: 600,
                            fontFamily: "monospace",
                            fontSize: "0.75rem",
                          }}
                        >
                          // {section.subtitle}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{
                        lineHeight: 1.8,
                        color: theme.palette.text.secondary,
                        mb: 3,
                        fontFamily: "monospace",
                        fontSize: "0.9rem",
                      }}
                    >
                      {section.body}
                    </Typography>

                    {/* Skills badges */}
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        pt: 2,
                        borderTop: `1px solid ${section.color}20`,
                      }}
                    >
                      <AnimatePresence>
                        {(hoveredCard === index || true) &&
                          section.skills.map((skill, i) => (
                            <motion.div
                              key={skill}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              transition={{ delay: i * 0.05 }}
                            >
                              <Chip
                                label={skill}
                                size="small"
                                sx={{
                                  background: `${section.color}15`,
                                  color: section.color,
                                  border: `1px solid ${section.color}40`,
                                  fontWeight: 600,
                                  fontFamily: "monospace",
                                  fontSize: "0.7rem",
                                }}
                              />
                            </motion.div>
                          ))}
                      </AnimatePresence>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section with terminal styling */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Box
            mt={8}
            sx={{
              ...glassStyle,
              textAlign: "center",
              background: `linear-gradient(135deg, ${theme.palette.background.paper}dd, ${theme.palette.tertiary.main}05)`,
            }}
          >
            {/* Terminal header */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                background: theme.palette.background.default,
                borderBottom: `1px solid ${theme.palette.tertiary.main}40`,
                px: 2,
                py: 0.75,
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontFamily: "monospace",
                fontSize: "0.7rem",
              }}
            >
              <Box sx={{ display: "flex", gap: 0.5 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f56" }} />
                <Box sx={{ width: 8, height: 8, borderRadius: "50%", background: "#ffbd2e" }} />
                <Box sx={{ width: 8, height: 8, borderRadius: "50%", background: "#27C93F" }} />
              </Box>
              <Typography sx={{ fontSize: "inherit", color: theme.palette.tertiary.main }}>
                [CONTACT_MODULE]
              </Typography>
            </Box>

            <Box sx={{ pt: 4 }}>
              <Typography
                variant="h4"
                fontWeight={700}
                sx={{
                  mb: 2,
                  fontFamily: "'Courier New', monospace",
                  background: `linear-gradient(135deg, ${theme.palette.tertiary.main}, ${theme.palette.primary.main})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "0.02em",
                }}
              >
                &gt; Let's Build Something Amazing
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: theme.palette.text.secondary,
                  maxWidth: 600,
                  mx: "auto",
                  fontFamily: "monospace",
                  fontSize: "0.9rem",
                }}
              >
                // Want to dive deeper into my work? Explore my projects or connect with me on
                GitHub to see what I'm building.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                justifyContent="center"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      background: `linear-gradient(135deg, ${theme.palette.tertiary.main}, ${theme.palette.tertiary.dark})`,
                      color: theme.palette.common.white,
                      fontWeight: 700,
                      fontFamily: "monospace",
                      boxShadow: `0 0 20px ${theme.palette.tertiary.main}40`,
                      px: 4,
                      py: 1.5,
                      border: `1px solid ${theme.palette.tertiary.main}`,
                      "&:hover": {
                        background: `linear-gradient(135deg, ${theme.palette.tertiary.light}, ${theme.palette.tertiary.main})`,
                        boxShadow: `0 0 30px ${theme.palette.tertiary.main}60`,
                      },
                    }}
                  >
                    &gt; View Projects
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outlined"
                    size="large"
                    href="https://github.com/adamel99"
                    target="_blank"
                    startIcon={<GitHubIcon />}
                    sx={{
                      borderColor: theme.palette.tertiary.main,
                      color: theme.palette.tertiary.main,
                      fontWeight: 700,
                      fontFamily: "monospace",
                      borderWidth: 2,
                      px: 4,
                      py: 1.5,
                      boxShadow: `0 0 15px ${theme.palette.tertiary.main}20`,
                      "&:hover": {
                        borderWidth: 2,
                        borderColor: theme.palette.tertiary.light,
                        background: `${theme.palette.tertiary.main}15`,
                        boxShadow: `0 0 25px ${theme.palette.tertiary.main}30`,
                      },
                    }}
                  >
                    GitHub Profile
                  </Button>
                </motion.div>
              </Stack>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutMe;
