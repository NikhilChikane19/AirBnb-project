import './App.css';
import Listing from './component/Listing';
import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';
import { CssBaseline, createTheme } from '@mui/material';
import NavBar from './component/NavBar';
import { amber, grey, red, lime, indigo } from '@mui/material/colors';



function App() {
  const [mode, setMode] = useState(false)
  const THEME = createTheme({
    palette: {
      mode: mode ? 'dark' : 'light',
      ...(mode? {
        secondary: amber,
        background: {
          default: '#000000',
          paper: '#000000'
        },
      } : {
        primary: indigo,
        secondary : {
          main : '#fff'
        },
        text: {
          primary: red[500],
          secondary: grey[900]
        }
        
      })
    },
    typography: {
      fontFamily: 'Inter'
    }
  })
  return (
    <>

      <ThemeProvider theme={THEME} >
        <CssBaseline />
        <NavBar darkMode={mode} setDarkMode={setMode} />
        <Listing />
      </ThemeProvider>
    </>


  );
}

export default App;
