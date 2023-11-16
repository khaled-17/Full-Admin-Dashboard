import React from 'react'

import {
    
    createTheme,
    styled,
    useTheme,
  } from "@mui/material/styles";
 const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            // primary: amber,
            // divider: amber[200],
            // text: {
            //   primary: grey[900],
            //   secondary: grey[800],
            // },
          }
        : {
            // palette values for dark mode
            // primary: deepOrange,
            // divider: deepOrange[700],
            // background: {
            //   default: deepOrange[900],
            //   paper: deepOrange[900],
            // },
            // text: {
            //   primary: '#fff',
            //   secondary: grey[500],
            // },
          }),
    },
  });
  
  import {ThemeProvider  } from "@mui/material/styles";


  
  function ThemeSwitcherProvider({children}) {

    const [mode, setMode] = React.useState(localStorage.getItem("currentMode")?localStorage.getItem("currentMode"):"Dark");
  
    const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>

      {children}

     </ThemeProvider>
   )
}

export default ThemeSwitcherProvider






