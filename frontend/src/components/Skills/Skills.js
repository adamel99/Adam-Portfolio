import React from "react";
import { Box, Typography, Card, CardContent, Container } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

// === Styled Glass Card ===
const ProjectCard = styled(Card)(({ theme }) => ({
  maxWidth: 800,
  width: "100%",
  marginBottom: theme.spacing(4),
  padding: theme.spacing(2),
  backdropFilter: "blur(12px)",
  backgroundColor: `${theme.palette.background.paper}dd`,
  border: `1px solid ${theme.palette.primary.main}25`,
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.2)",
}));

// === Skill Bar with Animation ===
const SkillBar = ({ skill, level }) => {
  const theme = useTheme();
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle2" gutterBottom>
        {skill}
      </Typography>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1.2 }}
      >
        <Box
          sx={{
            height: 10,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 2,
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        />
      </motion.div>
    </Box>
  );
};

// === Skills Page ===
const Skills = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.background.default})`,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 10,
      }}
    >
      {/* Background blur blobs */}
      <Box
        sx={{
          position: "fixed",
          top: -100,
          left: -100,
          width: 280,
          height: 280,
          background: theme.palette.primary.main,
          opacity: 0.12,
          filter: "blur(140px)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "fixed",
          bottom: -100,
          right: -80,
          width: 260,
          height: 260,
          background: theme.palette.tertiary.main,
          opacity: 0.08,
          filter: "blur(120px)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <Container
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            mb: 6,
            textAlign: "center",
            fontWeight: 700,
            color: theme.palette.text.primary,
          }}
        >
          SKILLS // TECH STACK // PROJECTS
        </Typography>

        {[...projectData].map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <ProjectCard>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {project.description}
                </Typography>
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      maxHeight: 300,
                      objectFit: "contain",
                      borderRadius: 12,
                      marginBottom: 20,
                    }}
                  />
                )}
                {project.skills.map((skill, i) => (
                  <SkillBar key={i} skill={skill.label} level={skill.value} />
                ))}
              </CardContent>
            </ProjectCard>
          </motion.div>
        ))}
      </Container>
    </Box>
  );
};

// === Project Data ===
const projectData = [
  {
    title: "Imagination Stereo Imager (JUCE Plugin)",
    description:
      "A stereo imaging plugin that visually represents stereo spread and allows precise manipulation of a sound's width. Built with the JUCE framework in C++, it features a dynamic UI, FFT-based analysis, and real-time performance optimizations.",
    image: "/Images/Imager.jpg",
    skills: [
      { label: "JUCE Framework", value: 50 },
      { label: "C++", value: 100 },
    ],
  },
  {
    title: "Custom Reverb Plugin (JUCE Plugin)",
    description:
      "A reverb effect plugin created from scratch using JUCE and C++. It features custom parameter smoothing, modulation, early/late reflection simulation, and tailored UI elements with real-time responsiveness.",
    skills: [
      { label: "JUCE Framework", value: 50 },
      { label: "C++", value: 100 },
    ],
  },
  {
    title: "DoomsProd Music Store (Full-Stack)",
    description:
      "Created a full-stack e-commerce site for my music for artists looking for beats, loop kits, and drum kits! Utilizing backend and frontend tech stacks including React, Node.Js and MySQL helped create this project. The UI was implemented using CSS and MaterialUI! Used Stripe API's for purcahses.",
    skills: [
      { label: "React / Redux", value: 80 },
      { label: "Express / Node.js", value: 60 },
      { label: "PostgreSQL", value: 40 },
      { label: "Material UI", value: 30 },
    ],
  },
];

export default Skills;
