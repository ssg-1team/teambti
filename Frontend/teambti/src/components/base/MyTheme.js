import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

const myTheme = createTheme({
    palette : {
        primary: {
            main : '#86C8BC',
            light : '#CEEDC7',
        },

        secondary: {
            main : '#FFF6BD',
            light : '#FFD4B2',
        }
    }
});

export default myTheme;