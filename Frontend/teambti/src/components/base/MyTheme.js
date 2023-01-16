import { Height } from "@mui/icons-material";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

const myTheme = createTheme({
    palette : {
        primary: {
            main : '#ffffff',
            light : '#CEEDC7',
        },

        secondary: {
            main : '#FFF6BD',
            light : '#FFD4B2',
        }
    },
});

export default myTheme;