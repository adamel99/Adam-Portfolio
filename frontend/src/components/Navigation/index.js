import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Navigation({ isLoaded }) {
  const theme = useTheme();
  const sessionUser = useSelector((state) => state.session.user);

  const navLinks = [
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/products", label: "Projects" },
    { to: "/resume", label: "Resume" }, // ✅ New link
  ];

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: "blur(12px)",
        backgroundColor: "theme.palette.background.default", // you can also use theme.palette.background.default with alpha if you want
        borderBottom: `1px solid ${theme.palette.divider}`,
        px: { xs: 2, md: 4 },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: 64,
          px: 0,
        }}
      >
        <Typography
          variant="h6"
          component={NavLink}
          to="/"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: "bold",
            textDecoration: "none",
            "&:hover": { color: theme.palette.primary.light },
          }}
        >
          Adam's Hub
        </Typography>

        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          {navLinks.map(({ to, label }) => (
            <Button
              key={to}
              component={NavLink}
              to={to}
              sx={{
                color: theme.palette.text.primary,
                textTransform: "none",
                fontWeight: 600,
                fontSize: "1rem",
                "&.active": {
                  color: theme.palette.primary.main,
                  borderBottom: `2px solid ${theme.palette.primary.main}`,
                  borderRadius: 0,
                },
                "&:hover": {
                  color: theme.palette.primary.light,
                  backgroundColor: "transparent",
                },
              }}
            >
              {label}
            </Button>
          ))}

          {/* {isLoaded && <ProfileButton user={sessionUser} />} */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
