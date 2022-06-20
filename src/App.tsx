import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ThemeProvider, DefaultTheme } from 'styled-components';

import usePeristedState from './utils/usePersistedState'

import light from './styles/themes/light';
import dark from './styles/themes/dark';   

import GlobalStyle from './styles/global';
import Header from './components/Header';

import Navbar from './components/Navbar'
import Home from './components/home';
import Store from './components/store';
import Abault from './components/abault';
import Contact from './components/contact';
import {LoginPage} from './components/login';

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
          <Route path="/" element={<Home />}  />
          <Route path="/store" element={<Store />} />
          <Route path="/contact" element={<Contact />}  />
          <Route path="/abault" element={<Abault />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
