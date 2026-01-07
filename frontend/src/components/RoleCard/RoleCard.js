import React from "react";
import {
  Card,
  Typography,
  Box,
  Button,
  useTheme,
} from "@mui/material";

const RoleCard = ({ image, icon: Icon, title, description, portfolioLink }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: "100%", // ensures equal height in flex parent
        borderRadius: 4,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.08)",
        backgroundColor: theme.palette.background.paper,
        transition: "transform 0.4s ease, border-color 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          borderColor: "rgba(255,255,255,0.25)",
        },
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "transform 0.5s ease",
          "&:hover": { transform: "scale(1.05)" },
        }}
      />

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.25))",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          p: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1, // pushes footer button down
        }}
      >
        <Box>
          {Icon && <Icon sx={{ fontSize: 38, color: "#fff", mb: 1 }} />}
          <Typography variant="h6" sx={{ fontWeight: 700, color: "#fff", mb: 1 }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.85)", fontSize: "0.95rem" }}>
            {description}
          </Typography>
        </Box>

        {portfolioLink && (
          <Button
            href={portfolioLink}
            variant="text"
            sx={{
              mt: 2,
              px: 0,
              color: "#fff",
              fontWeight: 500,
              "&:hover": { textDecoration: "underline" },
            }}
          >
            View Work →
          </Button>
        )}
      </Box>
    </Card>
  );
};


export default RoleCard;
