import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Bondi, sans-serif',
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode> */}
  </ThemeProvider>
);










