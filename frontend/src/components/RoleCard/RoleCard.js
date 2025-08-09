import React from "react";
import {
  Card,
  Typography,
  Box,
  Button,
  Stack,
  useTheme,
} from "@mui/material";

const RoleCard = ({ image, icon: Icon, title, description, portfolioLink }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        position: "relative",
        height: "100%",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
        }}
      />

      {/* Full Blur Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backdropFilter: "blur(3px)",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 2,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 3,
          p: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Box>
          {Icon && (
            <Box mb={2}>
              <Icon sx={{ fontSize: 36, color: "#fff" }} />
            </Box>
          )}
          <Typography variant="h6" sx={{ fontWeight: 600, color: "#fff", mb: 1 }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "#f1f1f1", fontSize: "0.95rem" }}>
            {description}
          </Typography>
        </Box>

        {portfolioLink && (
          <Stack direction="row" justifyContent="flex-end" sx={{ mt: 3 }}>
            <Button
              href={portfolioLink}
              variant="outlined"
              sx={{
                fontWeight: 500,
                borderRadius: "999px",
                px: 3,
                py: 1,
                textTransform: "none",
                color: "#fff",
                borderColor: "rgba(255,255,255,0.5)",
                "&:hover": {
                  borderColor: "#fff",
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              View Work
            </Button>
          </Stack>
        )}
      </Box>
    </Card>
  );
};

export default RoleCard;
