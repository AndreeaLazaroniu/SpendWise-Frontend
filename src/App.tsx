import React, {FC} from 'react';
import './App.css';
import { Outlet } from 'react-router';
import { AppHeader } from './Components/AppHeader';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

const App: FC = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#d1cd00",
      },
      secondary: {
        main: "#ffffff",
      },
    },
  });

  return (
  <ThemeProvider theme={theme}>
    <AppHeader/>
    <Outlet />
  </ThemeProvider>
  );
};

export default App;
