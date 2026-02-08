import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProductThunk } from "../../store/products";
import { Box, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

const ProductCard = ({ customProduct }) => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const history = useHistory();
  const theme = useTheme();
  const [scanProgress, setScanProgress] = useState(0);

  const isStandalone = !!productId;
  const product = useSelector((state) => state.products.singleProduct);

  useEffect(() => {
    if (isStandalone) {
      dispatch(getSingleProductThunk(productId));
    }
  }, [dispatch, productId, isStandalone]);

  // Simulate security scan animation
  useEffect(() => {
    const interval = setInterval(() => {
      setScanProgress((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const displayedProduct = isStandalone ? product : customProduct;

  if (!displayedProduct) return null;

  const { productName, price, description, filePath, id } = displayedProduct;

  const handleClick = () => {
    if (!isStandalone) {
      history.push(`/products/${id}`);
    }
  };

  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ width: "100%" }}
    >
      <Box
        onClick={handleClick}
        sx={{
          cursor: isStandalone ? "default" : "pointer",
          display: "flex",
          flexDirection: "column",
          borderRadius: 0,
          overflow: "hidden",
          backgroundColor: theme.palette.background.paper,
          border: `2px solid ${theme.palette.tertiary.main}`,
          boxShadow: `
            0 0 20px ${theme.palette.tertiary.main}30,
            inset 0 0 30px ${theme.palette.tertiary.main}05
          `,
          transition: "all 0.3s ease",
          color: theme.palette.text.primary,
          position: "relative",
          "&:hover": !isStandalone && {
            transform: "translateY(-4px)",
            boxShadow: `
              0 0 30px ${theme.palette.tertiary.main}50,
              inset 0 0 40px ${theme.palette.tertiary.main}08
            `,
            borderColor: theme.palette.primary.main,
          },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: `linear-gradient(90deg,
              transparent ${scanProgress - 10}%,
              ${theme.palette.tertiary.main} ${scanProgress}%,
              transparent ${scanProgress + 10}%
            )`,
            opacity: 0.8,
          },
          maxWidth: 720,
          margin: "0 auto",
          p: 0,
        }}
      >
        {/* Card header - terminal style */}
        <Box
          sx={{
            backgroundColor: theme.palette.background.default,
            borderBottom: `1px solid ${theme.palette.tertiary.main}`,
            px: 2,
            py: 1,
            fontFamily: "monospace",
            fontSize: "0.7rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: theme.palette.tertiary.main,
          }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            <Box sx={{ display: "flex", gap: 0.5 }}>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "#ff5f56",
                }}
              />
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "#ffbd2e",
                }}
              />
              <Box
                component={motion.div}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: theme.palette.tertiary.main,
                  boxShadow: `0 0 8px ${theme.palette.tertiary.main}`,
                }}
              />
            </Box>
            <Typography sx={{ fontSize: "inherit", ml: 1 }}>
              [PROJ_{id}]
            </Typography>
          </Box>
          <Typography sx={{ fontSize: "inherit" }}>
            STATUS: ACTIVE
          </Typography>
        </Box>

        {/* Image container with scan overlay */}
        <Box sx={{ position: "relative" }}>
          <Box
            component="img"
            src={filePath}
            alt={`Project: ${productName}`}
            sx={{
              width: "100%",
              height: 280,
              objectFit: "contain",
              backgroundColor: theme.palette.background.default,
              p: 2,
              filter: "brightness(0.9) contrast(1.1)",
            }}
          />

          {/* Scan line overlay */}
          <Box
            component={motion.div}
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            sx={{
              position: "absolute",
              left: 0,
              right: 0,
              height: "2px",
              background: `linear-gradient(90deg, transparent, ${theme.palette.tertiary.main}, transparent)`,
              boxShadow: `0 0 10px ${theme.palette.tertiary.main}`,
              opacity: 0.4,
              pointerEvents: "none",
            }}
          />

          {/* Corner brackets overlay */}
          <Box
            sx={{
              position: "absolute",
              top: 10,
              left: 10,
              width: 30,
              height: 30,
              borderTop: `2px solid ${theme.palette.tertiary.main}`,
              borderLeft: `2px solid ${theme.palette.tertiary.main}`,
              opacity: 0.6,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              width: 30,
              height: 30,
              borderTop: `2px solid ${theme.palette.tertiary.main}`,
              borderRight: `2px solid ${theme.palette.tertiary.main}`,
              opacity: 0.6,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 10,
              left: 10,
              width: 30,
              height: 30,
              borderBottom: `2px solid ${theme.palette.tertiary.main}`,
              borderLeft: `2px solid ${theme.palette.tertiary.main}`,
              opacity: 0.6,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 10,
              right: 10,
              width: 30,
              height: 30,
              borderBottom: `2px solid ${theme.palette.tertiary.main}`,
              borderRight: `2px solid ${theme.palette.tertiary.main}`,
              opacity: 0.6,
            }}
          />
        </Box>

        {/* Content section */}
        <Box
          sx={{
            px: 3,
            py: 3,
            background: `linear-gradient(180deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
          }}
        >
          {/* Title with hex styling */}
          <Box sx={{ mb: 2 }}>
            <Typography
              sx={{
                fontFamily: "monospace",
                fontSize: "0.65rem",
                color: theme.palette.tertiary.main,
                mb: 0.5,
                letterSpacing: "0.1em",
              }}
            >
              0x{id?.toString(16).padStart(4, "0").toUpperCase()}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                background: theme.palette.tertiary.main,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "'Courier New', monospace",
                letterSpacing: "0.02em",
              }}
            >
              {productName}
            </Typography>
          </Box>

          {/* Description */}
          <Typography
            variant="body2"
            sx={{
              mb: 2,
              color: theme.palette.text.secondary,
              fontSize: "0.9rem",
              lineHeight: 1.6,
              fontFamily: "monospace",
            }}
          >
            {description}
          </Typography>

          {/* Tech stack / metadata bar */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
              pt: 2,
              borderTop: `1px solid ${theme.palette.tertiary.main}40`,
            }}
          >
            <Box
              sx={{
                fontSize: "0.7rem",
                fontFamily: "monospace",
                color: theme.palette.tertiary.main,
                backgroundColor: `${theme.palette.tertiary.main}10`,
                px: 1.5,
                py: 0.5,
                border: `1px solid ${theme.palette.tertiary.main}30`,
              }}
            >
              VULNERABILITY: LOW
            </Box>
            <Box
              sx={{
                fontSize: "0.7rem",
                fontFamily: "monospace",
                color: theme.palette.primary.main,
                backgroundColor: `${theme.palette.primary.main}10`,
                px: 1.5,
                py: 0.5,
                border: `1px solid ${theme.palette.primary.main}30`,
              }}
            >
              BUILD: STABLE
            </Box>
            <Box
              component={motion.div}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              sx={{
                fontSize: "0.7rem",
                fontFamily: "monospace",
                color: "#27C93F",
                backgroundColor: "rgba(39, 201, 63, 0.1)",
                px: 1.5,
                py: 0.5,
                border: "1px solid rgba(39, 201, 63, 0.3)",
              }}
            >
              MONITORING
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );

  // Standalone full page wrap with enhanced cybersecurity theme
  if (isStandalone) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          background: theme.palette.background.default,
          py: 10,
          px: 2,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid background */}
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              linear-gradient(rgba(0, 187, 249, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 187, 249, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            zIndex: 0,
          }}
        />

        {/* Glowing orbs */}
        <Box
          sx={{
            position: "fixed",
            top: -100,
            left: -100,
            width: 300,
            height: 300,
            background: theme.palette.tertiary.main,
            opacity: 0.05,
            filter: "blur(100px)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "fixed",
            bottom: -100,
            right: -100,
            width: 300,
            height: 300,
            background: theme.palette.primary.main,
            opacity: 0.05,
            filter: "blur(100px)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        />

        <Container sx={{ position: "relative", zIndex: 1 }}>
          {cardContent}
        </Container>
      </Box>
    );
  }

  return cardContent;
};

export default ProductCard;
