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
        background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.background.default})`,
        color: theme.palette.text.primary,
        py: 10,
      }}
    >
      {/* Parallax blur blobs */}
      <Box
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

      <Container sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 800,
              textAlign: "center",
              mb: 6,
              color: theme.palette.text.primary,
              textShadow: `0 0 10px ${theme.palette.primary.main}80`,
            }}
          >
            Personal Projects
          </Typography>
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
            >
              <ProductCard customProduct={product} />
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ProductList;
