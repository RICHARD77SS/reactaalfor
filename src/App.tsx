import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { AuthGoogleProvider } from "./contexts/authGoogle";

import { ThemeProvider, DefaultTheme } from 'styled-components';

import usePeristedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';
import Header from './components/header';
import Navbar from './components/Navbar'
import { Footer } from './components/footer';
import Home from './components/home';
import Store from './components/store';
import Abault from './components/abault';
import Contact from './components/contact';
import { LoginPage } from './components/login';
import { RegisterPage } from './components/register'
import { ProdutoPage } from './components/produtoPage';
import { AreaAdmin } from './components/areAdm';
import { PrivateRoutes } from "../src/routes";
import { GradientGenerator } from './components/gradiente';
import { Perfil } from './components/perfil';
import { Carrinho } from './components/carrinho';

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
                <Route path="/" element={<Home />} />
                <Route path="/store" element={<Store />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/abault" element={<Abault />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/gradientGenerator" element={<GradientGenerator />} />
                <Route path="/produto" element={<ProdutoPage />}></Route>
                <Route path="/register" element={<RegisterPage />}></Route>
                <Route path="/perfil" element={<Perfil />}/>
                <Route path="/carrinho" element={<Carrinho />}/>
                <Route path="/admi" element={<PrivateRoutes />}>
                  <Route path="/admi" element={<AreaAdmin />} />
                </Route>
              </Routes>
        </AuthGoogleProvider>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
