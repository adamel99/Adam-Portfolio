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
  Card,
  CardContent,
  CardMedia,
  Chip,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion, useScroll, useTransform } from "framer-motion";
// import RoleCard from "../RoleCard/RoleCard";
import {
  Code,
  Security,
  MusicNote,
  Audiotrack,
  ArrowForward,
  Shield,
  VerifiedUser,
  CheckCircle,
  Terminal,
  VpnLock,
  AdminPanelSettings,
} from "@mui/icons-material";
import { useHistory } from "react-router-dom";

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

// Matrix-style code rain effect
const CodeRain = () => {
  const characters = "01アイウエオカキクケコサシスセソタチツテト";
  const [columns, setColumns] = React.useState([]);

  React.useEffect(() => {
    const columnCount = Math.floor(window.innerWidth / 20);
    const newColumns = Array.from({ length: columnCount }, (_, i) => ({
      x: i * 20,
      y: Math.random() * -1000,
      speed: Math.random() * 3 + 1,
      char: characters[Math.floor(Math.random() * characters.length)],
    }));
    setColumns(newColumns);
  }, []);

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
        opacity: 0.15,
      }}
    >
      {columns.map((col, i) => (
        <motion.div
          key={i}
          initial={{ y: col.y }}
          animate={{ y: "100vh" }}
          transition={{
            duration: 20 / col.speed,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            left: col.x,
            color: "#00FF41",
            fontFamily: "monospace",
            fontSize: "14px",
            textShadow: "0 0 5px #00FF41",
          }}
        >
          {col.char}
        </motion.div>
      ))}
    </Box>
  );
};

// Animated grid background
const GridBackground = () => {
  return (
    <Box
      sx={{
        position: "absolute",
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

// Cyber security themed particles
const SecurityParticles = () => {
  const theme = useTheme();
  const icons = [
    <Security sx={{ fontSize: 16 }} />,
    <VpnLock sx={{ fontSize: 25 }} />,
    <Shield sx={{ fontSize: 16 }} />,
    <Terminal sx={{ fontSize: 20 }} />,
    <AdminPanelSettings sx={{ fontSize: 45 }} />,

  ];

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
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0.1,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            position: "absolute",
            color: theme.palette.tertiary.main,
          }}
        >
          {icons[Math.floor(Math.random() * icons.length)]}
        </motion.div>
      ))}
    </Box>
  );
};

// Terminal-style gradient orb
const CyberOrb = ({ size = 400, top, left, delay = 0, color = "primary" }) => {
  const theme = useTheme();
  const orbColor = color === "primary" ? theme.palette.tertiary.main : theme.palette.primary.main;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: [0.2, 0.4, 0.2], scale: [0.8, 1.2, 0.8] }}
      transition={{
        duration: 10,
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
        background: `radial-gradient(circle, ${orbColor}25, transparent)`,
        filter: "blur(80px)",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
};

// Typing animation component
const TypingText = ({ texts, typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000 }) => {
  const [displayText, setDisplayText] = React.useState("");
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentText = texts[currentIndex];

    if (!isDeleting && displayText === currentText) {
      setTimeout(() => setIsDeleting(true), pauseDuration);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setDisplayText((prev) =>
          isDeleting
            ? currentText.substring(0, prev.length - 1)
            : currentText.substring(0, prev.length + 1)
        );
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      >
        |
      </motion.span>
    </span>
  );
};

const HeroSection = ({ user }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const history = useHistory();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const roles = [
    "Cybersecurity Professional",
    "Full-Stack Developer",
    "Security Analyst"
  ];

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
      {/* Layered background effects */}
      <GridBackground />
      <CodeRain />
      <SecurityParticles />
      <CyberOrb size={700} top="-15%" left="-15%" delay={0} color="primary" />
      <CyberOrb size={500} top="40%" left="65%" delay={3} color="secondary" />

      {/* Scanline effect */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "repeating-linear-gradient(0deg, rgba(0, 187, 249, 0.03) 0px, transparent 2px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              style={{ y, opacity }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Terminal-style header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    px: 2,
                    py: 1,
                    background: "rgba(0, 187, 249, 0.08)",
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
                    ~/portfolio$
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "0.85rem",
                      fontFamily: "monospace",
                    }}
                  >
                    cat intro.txt
                  </Typography>
                </Box>
              </motion.div>

              <Typography
                variant="h1"
                sx={{
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem", lg: "5rem" },
                  mb: 2,
                  lineHeight: 1.1,
                  color: "#FFFFFF",
                }}
              >
                Defending
                <br />
                <Box
                  component="span"
                  sx={{
                    background: `linear-gradient(135deg, ${theme.palette.tertiary.main} 0%, ${theme.palette.primary.main} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Ideas
                </Box>
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.tertiary.main,
                  fontSize: { xs: "1.25rem", md: "1.75rem" },
                  fontWeight: 600,
                  mb: 1,
                  fontFamily: "monospace",
                }}
              >
                <TypingText texts={roles} />
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  fontWeight: 400,
                  mb: 4,
                  lineHeight: 1.6,
                }}
              >
                CompTIA Security+ Certified • Incident Response Specialist • Full-Stack Developer
              </Typography>

              {/* Security Badges Row */}
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap sx={{ mb: 4 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1,
                      background: `linear-gradient(135deg, rgba(0, 187, 249, 0.15), rgba(0, 187, 249, 0.05))`,
                      backdropFilter: "blur(10px)",
                      border: `1px solid ${theme.palette.tertiary.main}60`,
                      borderRadius: "10px",
                      px: 2,
                      py: 1.5,
                      boxShadow: `0 0 20px ${theme.palette.tertiary.main}20`,
                    }}
                  >
                    <VerifiedUser sx={{ color: theme.palette.tertiary.main, fontSize: 24 }} />
                    <Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: theme.palette.tertiary.main,
                          fontWeight: 700,
                          fontSize: "0.65rem",
                          display: "block",
                          letterSpacing: "0.1em",
                        }}
                      >
                        CERTIFIED
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#fff",
                          fontWeight: 600,
                          fontSize: "0.9rem",
                        }}
                      >
                        CompTIA Security+
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1,
                      background: `linear-gradient(135deg, rgba(220, 19, 108, 0.15), rgba(220, 19, 108, 0.05))`,
                      backdropFilter: "blur(10px)",
                      border: `1px solid ${theme.palette.primary.main}60`,
                      borderRadius: "10px",
                      px: 2,
                      py: 1.5,
                      boxShadow: `0 0 20px ${theme.palette.primary.main}20`,
                    }}
                  >
                    <Shield sx={{ color: theme.palette.primary.main, fontSize: 24 }} />
                    <Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: theme.palette.primary.main,
                          fontWeight: 700,
                          fontSize: "0.65rem",
                          display: "block",
                          letterSpacing: "0.1em",
                        }}
                      >
                        EXPERT
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#fff",
                          fontWeight: 600,
                          fontSize: "0.9rem",
                        }}
                      >
                        TDX Arena
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${theme.palette.tertiary.main}40` }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    onClick={() => history.push("/skills")}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: "1.1rem",
                      background: `linear-gradient(135deg, ${theme.palette.tertiary.main}, ${theme.palette.tertiary.dark})`,
                      boxShadow: `0 0 20px ${theme.palette.tertiary.main}40`,
                      "&:hover": {
                        background: `linear-gradient(135deg, ${theme.palette.tertiary.light}, ${theme.palette.tertiary.main})`,
                      },
                    }}
                  >
                    View Security Portfolio
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => history.push("/resume")}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: "1.1rem",
                      borderColor: theme.palette.tertiary.main,
                      color: theme.palette.tertiary.main,
                      "&:hover": {
                        borderColor: theme.palette.tertiary.light,
                        background: `${theme.palette.tertiary.main}10`,
                      },
                    }}
                  >
                    View Resume
                  </Button>
                </motion.div>
              </Stack>
            </motion.div>
          </Grid>

          {/* Image Section with Cyber Frame */}
          <Grid item xs={12} md={3}>
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
                  // mx: "auto",
                }}
              >
                {/* Glowing cyber effect */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "110%",
                    height: "110%",
                    background: `radial-gradient(circle, ${theme.palette.tertiary.main}30, transparent 70%)`,
                    filter: "blur(50px)",
                    animation: "cyberpulse 3s ease-in-out infinite",
                    "@keyframes cyberpulse": {
                      "0%, 100%": { opacity: 0.3, transform: "translate(-50%, -50%) scale(1)" },
                      "50%": { opacity: 0.6, transform: "translate(-50%, -50%) scale(1.15)" },
                    },
                  }}
                />

                {/* Terminal-style frame */}
                <Box
                  sx={{
                    position: "relative",
                    padding: "3px",
                    background: `linear-gradient(135deg, ${theme.palette.tertiary.main}, ${theme.palette.primary.main})`,
                    boxShadow: `
                      0 0 30px ${theme.palette.tertiary.main}40,
                      0 20px 60px rgba(0,0,0,0.5),
                      inset 0 0 20px ${theme.palette.tertiary.main}20
                    `,
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: "inherit",
                      padding: "3px",
                      background: `linear-gradient(45deg, ${theme.palette.tertiary.main}, ${theme.palette.primary.main})`,
                      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    },
                  }}
                >
                  {/* Terminal header */}
                  <Box
                    sx={{
                      background: "rgba(0, 0, 0, 0.8)",
                      borderBottom: `2px solid ${theme.palette.tertiary.main}`,
                      px: 2,
                      py: 1,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Box sx={{ display: "flex", gap: 0.5 }}>
                      <Box sx={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F56" }} />
                      <Box sx={{ width: 10, height: 10, borderRadius: "50%", background: "#FFBD2E" }} />
                      <Box sx={{ width: 10, height: 10, borderRadius: "50%", background: "#27C93F" }} />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: "monospace",
                        fontSize: "0.75rem",
                        color: theme.palette.tertiary.main,
                        ml: 1,
                      }}
                    >
                      security_profile.exe
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      background: theme.palette.background.default,
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src="/Images/selfie.jpg"
                      alt="Security Professional"
                      style={{
                        width: "100%",
                        display: "block",
                      }}
                    />
                  </Box>
                </Box>

                {/* Status badge with glowing effect */}
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
                      background: `linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(0, 187, 249, 0.2))`,
                      backdropFilter: "blur(10px)",
                      border: `2px solid ${theme.palette.tertiary.main}`,
                      borderRadius: "12px",
                      px: 3,
                      py: 2,
                      boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 30px ${theme.palette.tertiary.main}40`,
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: "-100%",
                        width: "100%",
                        height: "100%",
                        background: `linear-gradient(90deg, transparent, ${theme.palette.tertiary.main}40, transparent)`,
                        animation: "scan 3s linear infinite",
                      },
                      "@keyframes scan": {
                        "0%": { left: "-100%" },
                        "100%": { left: "100%" },
                      },
                    }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: "#27C93F",
                          boxShadow: "0 0 10px #27C93F",
                          animation: "blink 2s ease-in-out infinite",
                          "@keyframes blink": {
                            "0%, 100%": { opacity: 1 },
                            "50%": { opacity: 0.3 },
                          },
                        }}
                      />
                      <Box>
                        <Typography
                          variant="caption"
                          sx={{
                            color: theme.palette.tertiary.main,
                            fontWeight: 700,
                            fontSize: "0.7rem",
                            display: "block",
                            fontFamily: "monospace",
                          }}
                        >
                          STATUS: ACTIVE
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#fff",
                            fontWeight: 600,
                            fontSize: "0.85rem",
                            fontFamily: "monospace",
                          }}
                        >
                          Open to Work
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Cyber scroll indicator */}
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
            width: 28,
            height: 45,
            border: `2px solid ${theme.palette.tertiary.main}80`,
            borderRadius: "14px",
            display: "flex",
            justifyContent: "center",
            pt: 1,
            boxShadow: `0 0 15px ${theme.palette.tertiary.main}30`,
          }}
        >
          <Box
            sx={{
              width: 4,
              height: 10,
              background: theme.palette.tertiary.main,
              borderRadius: "2px",
              boxShadow: `0 0 10px ${theme.palette.tertiary.main}`,
            }}
          />
        </Box>
      </motion.div>
    </Box>
  );
};

const CertificationShowcase = () => {
  const theme = useTheme();
  const history = useHistory();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, rgba(0, 187, 249, 0.03) 50%, ${theme.palette.background.default} 100%)`,
      }}
    >
      <GridBackground />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 1,
                background: "rgba(0, 187, 249, 0.08)",
                border: `1px solid ${theme.palette.tertiary.main}40`,
                borderRadius: "6px",
                mb: 3,
                fontFamily: "monospace",
              }}
            >
              <Shield sx={{ fontSize: 16, color: theme.palette.tertiary.main }} />
              <Typography
                sx={{
                  color: theme.palette.tertiary.main,
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  fontFamily: "monospace",
                }}
              >
                SECURITY_CREDENTIALS
              </Typography>
            </Box>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                fontWeight: 800,
                fontSize: { xs: "2rem", md: "3rem" },
                background: `linear-gradient(135deg, ${theme.palette.tertiary.main}, ${theme.palette.primary.main})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Certifications & Achievements
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.6)",
                maxWidth: 700,
                mx: "auto",
              }}
            >
              Industry-recognized certifications validating cybersecurity expertise
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {/* CompTIA Security+ Card */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <Card
                sx={{
                  height: "100%",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  border: `2px solid ${theme.palette.tertiary.main}40`,
                  boxShadow: `0 8px 32px rgba(0,0,0,0.3), 0 0 20px ${theme.palette.tertiary.main}20`,
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    borderColor: theme.palette.tertiary.main,
                    boxShadow: `0 12px 48px rgba(0,0,0,0.4), 0 0 40px ${theme.palette.tertiary.main}40`,
                  },
                }}
                onClick={() => history.push("/products")}
              >
                {/* Image Container with Fixed Aspect Ratio */}
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    paddingTop: "56.25%", // 16:9 aspect ratio - adjust as needed for your images
                    background: `linear-gradient(135deg, rgba(0, 187, 249, 0.1), rgba(0, 0, 0, 0.8))`,
                  }}
                >
                  <CardMedia
                    component="img"
                    image="/Images/Untitled.jpg"
                    alt="CompTIA Security+ Certificate"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "contain", // Shows full image
                      objectPosition: "center",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      background: `linear-gradient(135deg, ${theme.palette.tertiary.main}, ${theme.palette.tertiary.dark})`,
                      backdropFilter: "blur(10px)",
                      borderRadius: "8px",
                      px: 2,
                      py: 1,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      boxShadow: `0 0 20px ${theme.palette.tertiary.main}60`,
                    }}
                  >
                    <VerifiedUser sx={{ fontSize: 20 }} />
                    <Typography variant="caption" fontWeight={700} sx={{ fontFamily: "monospace" }}>
                      CERTIFIED
                    </Typography>
                  </Box>
                </Box>

                {/* Content Section */}
                <CardContent sx={{ p: 3, background: `linear-gradient(180deg, rgba(0, 187, 249, 0.05), transparent)`, flexGrow: 1 }}>
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    gutterBottom
                    sx={{
                      background: `linear-gradient(135deg, ${theme.palette.tertiary.main}, ${theme.palette.primary.main})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    CompTIA Security+
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Comprehensive cybersecurity certification covering threat management, cryptography, and network security
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    <Chip
                      label="Threat Detection"
                      size="small"
                      sx={{
                        borderColor: theme.palette.tertiary.main,
                        color: theme.palette.tertiary.main,
                      }}
                      variant="outlined"
                    />
                    <Chip
                      label="Network Security"
                      size="small"
                      sx={{
                        borderColor: theme.palette.tertiary.main,
                        color: theme.palette.tertiary.main,
                      }}
                      variant="outlined"
                    />
                    <Chip
                      label="Risk Management"
                      size="small"
                      sx={{
                        borderColor: theme.palette.tertiary.main,
                        color: theme.palette.tertiary.main,
                      }}
                      variant="outlined"
                    />
                    <Chip
                      label="Cryptography"
                      size="small"
                      sx={{
                        borderColor: theme.palette.tertiary.main,
                        color: theme.palette.tertiary.main,
                      }}
                      variant="outlined"
                    />
                  </Stack>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* TDX Arena Card */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <Card
                sx={{
                  height: "100%",
                  cursor: "pointer",
                  border: `2px solid ${theme.palette.primary.main}40`,
                  boxShadow: `0 8px 32px rgba(0,0,0,0.3), 0 0 20px ${theme.palette.primary.main}20`,
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    borderColor: theme.palette.primary.main,
                    boxShadow: `0 12px 48px rgba(0,0,0,0.4), 0 0 40px ${theme.palette.primary.main}40`,
                  },
                }}
                onClick={() => history.push("/products")}
              >
                {/* Image Container with Fixed Aspect Ratio */}
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    paddingTop: "56.25%", // 16:9 aspect ratio - matches first card
                    background: `linear-gradient(135deg, rgba(220, 19, 108, 0.1), rgba(0, 0, 0, 0.8))`,
                  }}
                >
                  <CardMedia
                    component="img"
                    image="/Images/cert.jpg"
                    alt="TDX Arena Certificate"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "contain", // Shows full image
                      objectPosition: "center",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                      backdropFilter: "blur(10px)",
                      borderRadius: "8px",
                      px: 2,
                      py: 1,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      boxShadow: `0 0 20px ${theme.palette.primary.main}60`,
                    }}
                  >
                    <Shield sx={{ fontSize: 20 }} />
                    <Typography variant="caption" fontWeight={700} sx={{ fontFamily: "monospace" }}>
                      ID: 1008363
                    </Typography>
                  </Box>
                </Box>

                {/* Content Section */}
                <CardContent sx={{ p: 3, background: `linear-gradient(180deg, rgba(220, 19, 108, 0.05), transparent)`, flexGrow: 1 }}>
                  <Typography variant="h5" fontWeight={700} gutterBottom>
                    TDX Arena Incident Response
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Hands-on cybersecurity training through real-world incident response simulations
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    <Chip
                      label="Incident Response"
                      size="small"
                      sx={{
                        borderColor: theme.palette.primary.main,
                        color: theme.palette.primary.main,
                      }}
                      variant="outlined"
                    />
                    <Chip
                      label="Threat Analysis"
                      size="small"
                      sx={{
                        borderColor: theme.palette.primary.main,
                        color: theme.palette.primary.main,
                      }}
                      variant="outlined"
                    />
                    <Chip
                      label="Security Operations"
                      size="small"
                      sx={{
                        borderColor: theme.palette.primary.main,
                        color: theme.palette.primary.main,
                      }}
                      variant="outlined"
                    />
                  </Stack>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const SkillsShowcase = () => {
  const theme = useTheme();

  const skills = [
    {
      category: "Cybersecurity",
      icon: Security,
      color: theme.palette.tertiary.main,
      items: [
        "Threat Detection & Analysis",
        "Digital Forensics",
        "Malware Analysis",
        "Vulnerability Assessment",
        "Network Security",
        "Incident Response",
        "Cryptography",
        "Security Operations",
      ],
    },
    {
      category: "Web Development",
      icon: Code,
      color: theme.palette.primary.main,
      items: [
        "Backend & Frontend",
        "React & Redux",
        "Node.js & Express",
        "PostgreSQL & Sequelize",
        "RESTful APIs",
        "AWS Deployment",
        "CI/CD Pipelines",
      ],
    },
    {
      category: "Audio Development",
      icon: Audiotrack,
      color: theme.palette.secondary.main,
      items: [
        "VST Plugin Development",
        "Digital Signal Processing",
        "Audio Engineering",
        "JUCE Framework",
        "C++ Programming",
        "Real-time Audio",
      ],
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        background: theme.palette.background.default,
      }}
    >
      <GridBackground />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 1,
              background: "rgba(220, 19, 108, 0.08)",
              border: `1px solid ${theme.palette.primary.main}40`,
              borderRadius: "6px",
              mb: 3,
              fontFamily: "monospace",
              mx: "auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Terminal sx={{ fontSize: 16, color: theme.palette.primary.main }} />
            <Typography
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 600,
                fontSize: "0.85rem",
                fontFamily: "monospace",
              }}
            >
              TECHNICAL_STACK
            </Typography>
          </Box>
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
            Technical Expertise
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
            Multi-disciplinary skill set spanning security, development, and creative technology
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      p: 3,
                      background: `linear-gradient(135deg, ${theme.palette.background.paper}, rgba(${
                        skill.color === theme.palette.tertiary.main
                          ? "0, 187, 249"
                          : skill.color === theme.palette.primary.main
                          ? "220, 19, 108"
                          : "253, 207, 243"
                      }, 0.05))`,
                      border: `2px solid ${skill.color}40`,
                      boxShadow: `0 8px 32px rgba(0,0,0,0.3), 0 0 20px ${skill.color}20`,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: skill.color,
                        transform: "translateY(-8px)",
                        boxShadow: `0 12px 48px rgba(0,0,0,0.4), 0 0 40px ${skill.color}40`,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: "12px",
                        background: `linear-gradient(135deg, ${skill.color}25, ${skill.color}10)`,
                        border: `2px solid ${skill.color}60`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 3,
                        boxShadow: `0 0 20px ${skill.color}30`,
                      }}
                    >
                      <IconComponent sx={{ fontSize: 32, color: skill.color }} />
                    </Box>
                    <Typography variant="h5" fontWeight={700} gutterBottom>
                      {skill.category}
                    </Typography>
                    <Stack spacing={1.5} sx={{ mt: 3 }}>
                      {skill.items.map((item, i) => (
                        <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                          <CheckCircle
                            sx={{
                              fontSize: 18,
                              color: skill.color,
                              flexShrink: 0,
                            }}
                          />
                          <Typography variant="body2" color="text.secondary">
                            {item}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Card>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
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
    </Box>
  );
};

const FooterCTA = () => {
  return null;
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
      <CertificationShowcase />
      <SkillsShowcase />
      <RolesGrid />
      {!user && <FooterCTA />}
    </Box>
  );
};

export default LandingPage;
