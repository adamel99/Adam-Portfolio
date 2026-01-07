// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0A0903",
      paper: "rgba(220, 19, 108, 0.08)",
    },
    primary: {
      main: "#DC136C",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FDCFF3",
      contrastText: "#000000",
    },
    tertiary: {
      main: "#00BBF9",
    },
    muted: {
      main: "#FDCFF3",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
  },
  typography: {
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    h1: {
      fontWeight: 800,
      fontSize: "clamp(3.5rem, 7vw, 6rem)",
      letterSpacing: "-0.02em",
      lineHeight: 1.15,
    },
    h2: {
      fontWeight: 700,
      fontSize: "clamp(3rem, 6vw, 5rem)",
      letterSpacing: "-0.01em",
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 700,
      fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
      letterSpacing: "-0.01em",
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 600,
      fontSize: "clamp(1.875rem, 3.5vw, 2.5rem)",
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: "clamp(1.625rem, 3vw, 2.125rem)",
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 600,
      fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)",
      lineHeight: 1.6,
    },
    body1: {
      fontSize: "1.25rem",
      lineHeight: 1.8,
      letterSpacing: "0.01em",
    },
    body2: {
      fontSize: "1.125rem",
      lineHeight: 1.75,
    },
    subtitle1: {
      fontSize: "1.5rem",
      fontWeight: 500,
      color: "rgba(255,255,255,0.8)",
      lineHeight: 1.6,
    },
    subtitle2: {
      fontSize: "1.25rem",
      fontWeight: 500,
      color: "rgba(255,255,255,0.6)",
      lineHeight: 1.5,
    },
    button: {
      fontWeight: 600,
      fontSize: "1.125rem",
      letterSpacing: "0.02em",
    },
    caption: {
      fontSize: "1rem",
      color: "rgba(255,255,255,0.5)",
    },
  },
  shape: {
    borderRadius: 16,
  },
  shadows: [
    "none",
    "0 2px 4px rgba(220, 19, 108, 0.05)",
    "0 4px 8px rgba(220, 19, 108, 0.08)",
    "0 8px 16px rgba(220, 19, 108, 0.12)",
    "0 12px 24px rgba(220, 19, 108, 0.15)",
    "0 16px 32px rgba(220, 19, 108, 0.18)",
    "0 20px 40px rgba(220, 19, 108, 0.2)",
    "0 24px 48px rgba(220, 19, 108, 0.22)",
    "0 2px 8px rgba(0, 0, 0, 0.15)",
    "0 4px 12px rgba(0, 0, 0, 0.2)",
    "0 8px 20px rgba(0, 0, 0, 0.25)",
    "0 12px 28px rgba(0, 0, 0, 0.3)",
    "0 16px 36px rgba(0, 0, 0, 0.35)",
    "0 20px 44px rgba(0, 0, 0, 0.4)",
    "0 24px 52px rgba(0, 0, 0, 0.45)",
    "0 28px 60px rgba(0, 0, 0, 0.5)",
    "0 32px 72px rgba(220, 19, 108, 0.25)",
    "0 4px 16px rgba(220, 19, 108, 0.3)",
    "0 8px 24px rgba(220, 19, 108, 0.35)",
    "0 12px 32px rgba(220, 19, 108, 0.4)",
    "0 16px 40px rgba(220, 19, 108, 0.45)",
    "0 20px 48px rgba(220, 19, 108, 0.5)",
    "0 24px 56px rgba(220, 19, 108, 0.55)",
    "0 28px 64px rgba(220, 19, 108, 0.6)",
    "0 32px 72px rgba(220, 19, 108, 0.65)",
  ],
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
      smooth: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // scrollBehavior: "smooth",
          // "&::-webkit-scrollbar": {
          //   width: "10px",
          // },
          // "&::-webkit-scrollbar-track": {
          //   background: "rgba(220, 19, 108, 0.05)",
          // },
          // "&::-webkit-scrollbar-thumb": {
          //   background: "rgba(220, 19, 108, 0.3)",
          //   borderRadius: "5px",
          //   "&:hover": {
          //     background: "rgba(220, 19, 108, 0.5)",
          //   },
          // },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          backdropFilter: "blur(20px)",
          background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, rgba(220, 19, 108, 0.05) 100%)`,
          border: `1px solid rgba(220, 19, 108, 0.2)`,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(220, 19, 108, 0.1)",
          transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
            opacity: 0,
            transition: "opacity 0.3s ease",
          },
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 12px 48px rgba(0, 0, 0, 0.4), 0 4px 16px rgba(220, 19, 108, 0.2)",
            border: `1px solid rgba(220, 19, 108, 0.4)`,
            "&::before": {
              opacity: 1,
            },
          },
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 12,
          fontWeight: 600,
          textTransform: "none",
          padding: "10px 24px",
          transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "0",
            height: "0",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.1)",
            transform: "translate(-50%, -50%)",
            transition: "width 0.6s, height 0.6s",
          },
          "&:hover::before": {
            width: "300px",
            height: "300px",
          },
        }),
        contained: ({ theme }) => ({
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #A0104E 100%)`,
          boxShadow: "0 4px 16px rgba(220, 19, 108, 0.3)",
          "&:hover": {
            background: `linear-gradient(135deg, #A0104E 0%, ${theme.palette.primary.main} 100%)`,
            boxShadow: "0 6px 24px rgba(220, 19, 108, 0.4)",
            transform: "translateY(-2px)",
          },
          "&:active": {
            transform: "translateY(0)",
          },
        }),
        outlined: ({ theme }) => ({
          borderColor: theme.palette.primary.main,
          borderWidth: "2px",
          "&:hover": {
            borderWidth: "2px",
            backgroundColor: "rgba(220, 19, 108, 0.1)",
            borderColor: theme.palette.primary.main,
          },
        }),
        text: {
          "&:hover": {
            backgroundColor: "rgba(220, 19, 108, 0.08)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 8,
          fontWeight: 500,
          transition: "all 0.2s ease",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }),
        filled: ({ theme }) => ({
          background: `linear-gradient(135deg, rgba(220, 19, 108, 0.2) 0%, rgba(220, 19, 108, 0.1) 100%)`,
          border: `1px solid rgba(220, 19, 108, 0.3)`,
        }),
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundImage: "none",
          transition: "box-shadow 0.3s ease, transform 0.3s ease",
        }),
        elevation1: {
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15), 0 1px 4px rgba(220, 19, 108, 0.1)",
        },
        elevation2: {
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(220, 19, 108, 0.15)",
        },
        elevation3: {
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.25), 0 4px 12px rgba(220, 19, 108, 0.2)",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: "all 0.2s ease",
          "&:hover": {
            transform: "scale(1.1)",
            backgroundColor: "rgba(220, 19, 108, 0.1)",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "rgba(220, 19, 108, 0.15)",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          textDecoration: "none",
          position: "relative",
          transition: "color 0.2s ease",
          "&::after": {
            content: '""',
            position: "absolute",
            width: "0",
            height: "2px",
            bottom: "-2px",
            left: "0",
            backgroundColor: theme.palette.primary.main,
            transition: "width 0.3s ease",
          },
          "&:hover": {
            color: theme.palette.secondary.main,
            "&::after": {
              width: "100%",
            },
          },
        }),
      },
    },
  },
});

export default theme;
