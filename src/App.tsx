import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthGoogleProvider } from "./contexts/authGoogle";
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
import { ProdutoPage } from './components/produtoPage'
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
        <AuthGoogleProvider>
          <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/store" element={<Store />} />
            <Route path="/contact" element={<Contact />}  />
            <Route path="/abault" element={<Abault />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/produto" element={<ProdutoPage/>}></Route>
          </Routes>

        </AuthGoogleProvider>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
