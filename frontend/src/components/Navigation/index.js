import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { Terminal, Shield } from "@mui/icons-material";

function Navigation({ isLoaded }) {
  const theme = useTheme();
  const sessionUser = useSelector((state) => state.session.user);
  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/products", label: "Projects" },
    { to: "/resume", label: "Resume" },
  ];

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: "blur(20px)",
        backgroundColor: `${theme.palette.background.default}ee`,
        borderBottom: `2px solid ${theme.palette.tertiary.main}40`,
        boxShadow: `0 0 20px ${theme.palette.tertiary.main}10`,
        px: { xs: 2, md: 4 },
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: `linear-gradient(90deg, transparent, ${theme.palette.tertiary.main}80, ${theme.palette.primary.main}80, transparent)`,
          opacity: 0.6,
        },
      }}
    >
      {/* Scanning line animation */}
      <Box
        component={motion.div}
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        sx={{
          position: "absolute",
          top: 0,
          width: "30%",
          height: "100%",
          background: `linear-gradient(90deg, transparent, ${theme.palette.tertiary.main}15, transparent)`,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: 64,
          px: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Logo / Brand with Terminal Icon */}
        <Box
          component={NavLink}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            textDecoration: "none",
            position: "relative",
            "&:hover .logo-text": {
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.tertiary.main})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            },
            "&:hover .terminal-icon": {
              color: theme.palette.primary.main,
            },
          }}
        >
          {/* Terminal icon with glow */}
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: "8px",
              background: `linear-gradient(135deg, ${theme.palette.tertiary.main}20, ${theme.palette.primary.main}10)`,
              border: `1px solid ${theme.palette.tertiary.main}60`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 0 15px ${theme.palette.tertiary.main}20`,
              transition: "all 0.3s ease",
            }}
          >
            <Terminal
              className="terminal-icon"
              sx={{
                fontSize: 22,
                color: theme.palette.tertiary.main,
                transition: "color 0.3s ease",
              }}
            />
          </Box>

          <Box>
            <Typography
              className="logo-text"
              variant="h6"
              sx={{
                fontWeight: 700,
                fontFamily: "'Courier New', monospace",
                background: `linear-gradient(135deg, ${theme.palette.tertiary.main}, ${theme.palette.primary.main})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "0.05em",
                transition: "all 0.3s ease",
                fontSize: { xs: "1rem", md: "1.25rem" },
              }}
            >
              Adam's Hub
            </Typography>
            <Typography
              sx={{
                fontSize: "0.65rem",
                fontFamily: "monospace",
                color: theme.palette.text.secondary,
                letterSpacing: "0.1em",
                mt: -0.5,
              }}
            >
              [SECURITY_PORTFOLIO]
            </Typography>
          </Box>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          {navLinks.map(({ to, label }) => (
            <Button
              key={to}
              component={NavLink}
              to={to}
              sx={{
                color: theme.palette.text.secondary,
                textTransform: "none",
                fontWeight: 600,
                fontSize: "0.95rem",
                fontFamily: "monospace",
                px: 2.5,
                py: 1,
                position: "relative",
                transition: "all 0.3s ease",
                "&::before": {
                  content: '">"',
                  position: "absolute",
                  left: 8,
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  color: theme.palette.tertiary.main,
                },
                "&.active": {
                  color: theme.palette.tertiary.main,
                  background: `linear-gradient(135deg, ${theme.palette.tertiary.main}15, ${theme.palette.primary.main}10)`,
                  border: `1px solid ${theme.palette.tertiary.main}40`,
                  borderRadius: "6px",
                  boxShadow: `0 0 15px ${theme.palette.tertiary.main}20`,
                  "&::before": {
                    opacity: 1,
                  },
                  pl: 3.5,
                },
                "&:hover": {
                  color: theme.palette.tertiary.main,
                  background: `linear-gradient(135deg, ${theme.palette.tertiary.main}10, transparent)`,
                  borderRadius: "6px",
                  "&::before": {
                    opacity: 1,
                  },
                  pl: 3.5,
                },
              }}
            >
              {label}
            </Button>
          ))}

          {/* System Status Indicator */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
              ml: 2,
              px: 2,
              py: 0.75,
              background: `linear-gradient(135deg, ${theme.palette.tertiary.main}10, transparent)`,
              border: `1px solid ${theme.palette.tertiary.main}30`,
              borderRadius: "6px",
              fontFamily: "monospace",
              fontSize: "0.7rem",
            }}
          >
            <Box
              component={motion.div}
              animate={{
                opacity: [1, 0.3, 1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              sx={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "#27C93F",
                boxShadow: "0 0 8px #27C93F",
              }}
            />
            <Typography
              sx={{
                color: theme.palette.tertiary.main,
                fontSize: "inherit",
                fontFamily: "inherit",
              }}
            >
              {currentTime.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
              })}
            </Typography>
          </Box>

          {/* Security Badge */}
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
              gap: 0.75,
              ml: 1,
              px: 1.5,
              py: 0.75,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}15, ${theme.palette.primary.main}05)`,
              border: `1px solid ${theme.palette.primary.main}40`,
              borderRadius: "6px",
              boxShadow: `0 0 15px ${theme.palette.primary.main}10`,
            }}
          >
            <Shield
              sx={{
                fontSize: 16,
                color: theme.palette.primary.main,
              }}
            />
            <Typography
              sx={{
                fontFamily: "monospace",
                fontSize: "0.7rem",
                color: theme.palette.primary.main,
                fontWeight: 700,
                letterSpacing: "0.05em",
              }}
            >
              SEC+
            </Typography>
          </Box>

          {/* {isLoaded && <ProfileButton user={sessionUser} />} */}
        </Box>
      </Toolbar>

      {/* Bottom accent line with gradient */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: `linear-gradient(90deg,
            transparent 0%,
            ${theme.palette.tertiary.main}40 25%,
            ${theme.palette.primary.main}40 75%,
            transparent 100%
          )`,
          opacity: 0.6,
        }}
      />
    </AppBar>
  );
}

export default Navigation;
