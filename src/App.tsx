import React from 'react';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePeristedState from './utils/usePersistedState'

import light from './styles/themes/light';
import dark from './styles/themes/dark';   

import GlobalStyle from './styles/global';
import Header from './components/Header';

import Navbar from './components/Navbar'

import { Route, Routes } from 'react-router-dom';
import Store from './components/store';



import{ Footer } from './components/footer';


const App = () => {
  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Navbar />
        <Routes>
          <Route path="/"  />
          <Route path="/store" element={<Store />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
