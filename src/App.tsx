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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ4MJHCQtsLnuYG3oy1f9RGTRJefRPkWc",
  authDomain: "portfolio-3e8aa.firebaseapp.com",
  projectId: "portfolio-3e8aa",
  storageBucket: "portfolio-3e8aa.appspot.com",
  messagingSenderId: "817770619179",
  appId: "1:817770619179:web:188a4db6eb297fbc03a56e",
  measurementId: "G-ETN5EK5VG2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);



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
