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

const AboutMe = () => {
  const theme = useTheme();
  const [hoveredCard, setHoveredCard] = useState(null);

  const glassStyle = {
    p: 4,
    borderRadius: 3,
    backdropFilter: "blur(14px)",
    backgroundColor: `${theme.palette.background.paper}ee`,
    border: `1px solid ${theme.palette.primary.main}25`,
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
    transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    position: "relative",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "3px",
      background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
      opacity: 0,
      transition: "opacity 0.3s ease",
    },
  };

  const sections = [
    {
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      title: "Full-Stack Developer",
      subtitle: "Building Across the Stack",
      body: `Skilled in React, Node.js, and SQL, I design robust web applications with clean code and seamless UI/UX. Experienced in REST APIs, cloud deployment, and scalable architecture.`,
      skills: ["React", "Node.js", "SQL", "REST APIs", "Cloud"],
      color: theme.palette.secondary.main,
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: "Cybersecurity",
      subtitle: "Securing What I Build",
      body: `Pursuing Security+ certification, focused on secure networking, system hardening, and threat mitigation to ensure resilient, secure applications and infrastructure.`,
      skills: ["Security+", "Network Security", "System Hardening", "Threat Analysis"],
      color: theme.palette.tertiary.main,
    },
    {
      icon: <ExtensionIcon sx={{ fontSize: 40 }} />,
      title: "Audio Plugin Development",
      subtitle: "Innovation Through Sound",
      body: `From audio plugin development using JUCE and C++ to professional mixing and mastering, I combine deep technical knowledge with creative sound design to deliver polished, production-ready audio.`,
      skills: ["JUCE", "C++", "DSP", "Granular Synthesis"],
      color: theme.palette.primary.main,
    },
    {
      icon: <MusicNoteIcon sx={{ fontSize: 40 }} />,
      title: "Music Producer",
      subtitle: "Emotion in Every Frequency",
      body: `Producing emotionally-driven beats across genres, combining technical precision with creative sound design to craft professional-quality instrumentals.`,
      skills: ["Production", "Sound Design", "Mixing", "Mastering"],
      color: theme.palette.muted.main,
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
        background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.background.default})`,
        color: theme.palette.text.primary,
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
      }}
    >
      {/* Animated background blobs */}
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
          background: theme.palette.primary.main,
          opacity: 0.1,
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
          background: theme.palette.tertiary.main,
          opacity: 0.08,
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
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Avatar
                alt="Your Portrait"
                src="/Images/selfie.jpg"
                sx={{
                  width: { xs: 120, md: 160 },
                  height: { xs: 120, md: 160 },
                  boxShadow: `0 8px 40px ${theme.palette.primary.main}40`,
                  border: `4px solid ${theme.palette.primary.main}`,
                  mb: 3,
                }}
              />
            </motion.div>

            <Typography
              variant="h2"
              fontWeight={900}
              textAlign="center"
              sx={{
                mb: 2,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Multidisciplinary Technologist
            </Typography>

            <Typography
              variant="h6"
              textAlign="center"
              sx={{
                mb: 4,
                color: theme.palette.text.secondary,
                maxWidth: 700,
                lineHeight: 1.8,
              }}
            >
              Blending full-stack development, audio engineering, and cybersecurity to
              build secure and creative digital experiences.
            </Typography>

            {/* Social Links */}
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
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.tertiary.main}20)`,
                      border: `2px solid ${theme.palette.primary.main}40`,
                      color: theme.palette.primary.main,
                      "&:hover": {
                        background: `linear-gradient(135deg, ${theme.palette.primary.main}40, ${theme.palette.tertiary.main}40)`,
                        borderColor: theme.palette.primary.main,
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
                    "&:hover::before": {
                      opacity: 1,
                    },
                  }}
                >
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Box
                        sx={{
                          color: section.color,
                          mr: 2,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {section.icon}
                      </Box>
                      <Box flex={1}>
                        <Typography
                          variant="h5"
                          fontWeight={800}
                          sx={{
                            color: theme.palette.text.primary,
                            mb: 0.5,
                          }}
                        >
                          {section.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: section.color,
                            fontWeight: 600,
                            opacity: 0.9,
                          }}
                        >
                          {section.subtitle}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{
                        lineHeight: 1.8,
                        color: theme.palette.text.secondary,
                        mb: 3,
                      }}
                    >
                      {section.body}
                    </Typography>

                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      <AnimatePresence>
                        {hoveredCard === index &&
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
                                  background: `${section.color}20`,
                                  color: section.color,
                                  border: `1px solid ${section.color}40`,
                                  fontWeight: 600,
                                }}
                              />
                            </motion.div>
                          ))}
                      </AnimatePresence>
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Box
            mt={8}
            p={6}
            sx={{
              ...glassStyle,
              textAlign: "center",
              background: `linear-gradient(135deg, ${theme.palette.background.paper}dd, ${theme.palette.primary.main}10)`,
            }}
          >
            <Typography
              variant="h4"
              fontWeight={800}
              sx={{ mb: 2, color: theme.palette.text.primary }}
            >
              Let's Build Something Amazing
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 4, color: theme.palette.text.secondary, maxWidth: 600, mx: "auto" }}
            >
              Want to dive deeper into my work? Explore my projects or connect with me on
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
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                    color: theme.palette.common.white,
                    fontWeight: "bold",
                    boxShadow: theme.shadows[3],
                    px: 4,
                    py: 1.5,
                    "&:hover": {
                      background: `linear-gradient(45deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
                      boxShadow: theme.shadows[6],
                    },
                  }}
                >
                  View Projects
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
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                    fontWeight: "bold",
                    borderWidth: 2,
                    px: 4,
                    py: 1.5,
                    "&:hover": {
                      borderWidth: 2,
                      borderColor: theme.palette.primary.light,
                      background: `${theme.palette.primary.main}15`,
                    },
                  }}
                >
                  GitHub Profile
                </Button>
              </motion.div>
            </Stack>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutMe;
