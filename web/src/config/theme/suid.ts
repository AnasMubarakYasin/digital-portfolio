import { createTheme } from "@suid/material/styles";

export default {
  dark: createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#3b82f6",
        contrastText: "#fff",
      },
      secondary: {
        main: "#ff8743",
        contrastText: "#000",
      },
      background: {
        paper: "#1e293b",
        default: "#0f172a",
      },
      common: {
        black: "#0f172a",
        white: "#f1f5f9",
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1500,
      },
    },
  }),
  light: createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#3b82f6",
        contrastText: "#fff",
      },
      secondary: {
        main: "#ff8743",
        contrastText: "#000",
      },
      background: {
        paper: "#fff",
        default: "#f1f5f9",
      },
      common: {
        black: "#0f172a",
        white: "#f1f5f9",
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1500,
      },
    },
  }),
};