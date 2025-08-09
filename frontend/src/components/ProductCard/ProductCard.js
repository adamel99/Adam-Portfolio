import React, { useEffect } from "react";
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

  const isStandalone = !!productId;
  const product = useSelector((state) => state.products.singleProduct);

  useEffect(() => {
    if (isStandalone) {
      dispatch(getSingleProductThunk(productId));
    }
  }, [dispatch, productId, isStandalone]);

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
    >
      <Box
        onClick={handleClick}
        sx={{
          cursor: isStandalone ? "default" : "pointer",
          display: "flex",
          flexDirection: "column",
          borderRadius: 4,
          overflow: "hidden",
          backdropFilter: "blur(14px)",
          backgroundColor: `${theme.palette.background.paper}ee`,
          border: `1px solid ${theme.palette.primary.main}25`,
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          color: theme.palette.text.primary,
          "&:hover": !isStandalone && {
            transform: "translateY(-6px)",
            boxShadow: "0 16px 40px rgba(0, 0, 0, 0.2)",
          },
          maxWidth: 720,
          margin: "0 auto",
          p: 4,
        }}
      >
        <Box
          component="img"
          src={filePath}
          alt={`Product: ${productName}`}
          sx={{
            width: "100%",
            height: 320,
            objectFit: "contain",
            backgroundColor: "#111",
            p: 2,
            borderRadius: 2,
          }}
        />
        <Box sx={{ px: 2, py: 3, textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{
              mb: 1,
              fontWeight: 600,
              color: theme.palette.text.primary,
            }}
          >
            {productName}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 2,
              color: theme.palette.text.secondary,
              fontSize: "1rem",
              lineHeight: 1.7,
            }}
          >
            {description}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: theme.palette.primary.main,
              fontSize: "1.2rem",
            }}
          >
            ${price}
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );

  // 👉 STANDALONE FULL PAGE WRAP
  if (isStandalone) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.background.default})`,
          py: 10,
          px: 2,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Blur blobs */}
        <Box
          sx={{
            position: "fixed",
            top: -80,
            left: -90,
            width: 300,
            height: 300,
            background: theme.palette.primary.main,
            opacity: 0.12,
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
        <Container sx={{ position: "relative", zIndex: 1 }}>{cardContent}</Container>
      </Box>
    );
  }

  // 👉 Embedded in a list/grid context
  return cardContent;
};

export default ProductCard;
