import { createTheme } from "@mui/material/styles";
import { alpha, getContrastRatio } from "@mui/material/styles";

const maroonBase = "#AC2333";
const maroonMain = alpha(maroonBase, 0.7);

const theme = createTheme({
  palette: {
    maroon_primary: {
      main: maroonBase,
      light: alpha(maroonBase, 0.5),
      dark: "#6E000D",
      contrastText:
        getContrastRatio(maroonMain, "#fff") > 4.5 ? "#fff" : "#111",
    },
    maroon_secondary: {
      main: "#AC2333",
      light: "#E33045",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#6E000D",
    },

    white: {
      main: "#fff",
      light: "#f2f2f2",
      dark: "#AC2333",
      contrastText: "#000",
    },
  },

  typography: {
    fontFamily: "'Roboto', sans-serif", // Replace 'Your Custom Font' with your desired font
    h1: {
      fontFamily: "'Roboto', sans-serif", // Replace 'Your Heading Font' with your desired heading font
    },
    h2: {
      fontFamily: "'Roboto', sans-serif",
    },
    h3: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 800,
      lineHeight: "normal",
      fontSize: "2.7rem",
      color: "#AC2333"
    },
    body: {
      fontFamily: "'Roboto', sans-serif",
    },
    // Add more specific font styles as needed
  },
});

export default theme;
