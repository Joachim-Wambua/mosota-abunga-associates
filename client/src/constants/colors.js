import { createTheme } from "@mui/material/styles";
import { alpha, getContrastRatio } from "@mui/material/styles";

const maroonBase = "#AC2333";
const maroonMain = alpha(maroonBase, 0.7);

const theme = createTheme({
  palette: {
    maroon_primary: {
      main: maroonMain,
      light: alpha(maroonBase, 0.5),
      dark: alpha(maroonBase, 0.9),
      contrastText:
        getContrastRatio(maroonMain, "#fff") > 4.5 ? "#fff" : "#111",
    },
    maroon_secondary: {
      main: "#AC2333",
      light: "#E33045",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#6E000D",
    },
  },
});

export default theme;
