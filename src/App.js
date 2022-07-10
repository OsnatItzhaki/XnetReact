import * as React from 'react';
import './App.css';
import { useState,useEffect} from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { useHistory ,BrowserRouter,Routes,Redirect,Route,Navigate} from 'react-router-dom';
import ClientTable from './component/Client/ClientTableView'

const theme = createTheme({
    direction: 'rtl', // Both here and <body dir="rtl">
  });
  // Create rtl cache
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });
 

export default function App() {
 
  return (
   
    <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={theme}>
    <div  dir="rtl" className="App">
      
       
       <BrowserRouter>
      
        <Routes>
          
        <Route  path="/" element={<ClientTable/>}>
          </Route>
         
        </Routes>
      </BrowserRouter>
    </div>
    </ThemeProvider>
    </CacheProvider>

  );
}


