import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, Container } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import * as productActions from "../../store/products";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

const ProductList = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.allProducts);
  const theme = useTheme();

  useEffect(() => {
    dispatch(productActions.getAllProductsThunk());
  }, [dispatch]);

  const allProductsArray = allProducts ? Object.values(allProducts) : [];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
        py: 10,
      }}
    >
      {/* Animated grid background - SOC monitor aesthetic */}
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
          opacity: 0.4,
        }}
      />

      {/* Scanning lines effect */}
      <Box
        component={motion.div}
        animate={{
          y: ["0vh", "100vh"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        sx={{
          position: "fixed",
          left: 0,
          right: 0,
          height: "2px",
          background: `linear-gradient(90deg, transparent, ${theme.palette.tertiary.main}, transparent)`,
          boxShadow: `0 0 20px ${theme.palette.tertiary.main}`,
          zIndex: 0,
          opacity: 0.3,
        }}
      />

      <Container sx={{ position: "relative", zIndex: 1 }}>
        {/* Terminal-style header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              mb: 6,
              fontFamily: "monospace",
              textAlign: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.tertiary.main,
                mb: 1,
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
              }}
            >
              [PORTFOLIO_SYSTEM]$ ls -la /projects/
            </Typography>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 700,
                fontFamily: "'Courier New', monospace",
                background: `linear-gradient(135deg, ${theme.palette.tertiary.main}, ${theme.palette.primary.main})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "none",
                letterSpacing: "0.05em",
                mb: 2,
              }}
            >
              &gt; SECURITY PROJECTS
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                fontFamily: "monospace",
                fontSize: "0.8rem",
              }}
            >
              // Monitoring {allProductsArray.length} active repositories
            </Typography>
          </Box>
        </motion.div>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
            },
            gap: 4,
            justifyItems: "center",
            zIndex: 1,
          }}
        >
          {allProductsArray.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              style={{ width: "100%" }}
            >
              <ProductCard customProduct={product} />
            </motion.div>
          ))}
        </Box>

        {/* Footer - system status */}
        <Box
          sx={{
            mt: 8,
            pt: 4,
            borderTop: `1px solid ${theme.palette.tertiary.main}40`,
            textAlign: "center",
            fontFamily: "monospace",
            fontSize: "0.75rem",
            color: theme.palette.tertiary.main,
            opacity: 0.6,
          }}
        >
          SYSTEM STATUS: OPERATIONAL | LAST SCAN: {new Date().toISOString().split('T')[0]}
        </Box>
      </Container>
    </Box>
  );
};

export default ProductList;
