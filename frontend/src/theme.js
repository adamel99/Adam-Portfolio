// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0A0903",
      paper: "rgba(220, 19, 108, 0.08)", // DC136C with transparency
    },
    primary: {
      main: "#DC136C", // bold pink
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FDCFF3", // soft pink
      contrastText: "#000000",
    },
    tertiary: {
      main: "#00BBF9", // bright cyan/blue
    },
    muted: {
      main: "#FDCFF3", // reusing soft pink as a light accent
    },
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
  },
  typography: {
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    h2: {
      fontWeight: 700,
      fontSize: "3.5rem",
    },
    h5: {
      fontWeight: 700,
    },
    body1: {
      lineHeight: 1.8,
    },
    subtitle1: {
      color: "rgba(255,255,255,0.7)",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          backdropFilter: "blur(10px)",
          background: theme.palette.background.paper,
          border: `1px solid ${theme.palette.primary.main}40`, // 25% alpha
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          fontWeight: 600,
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
