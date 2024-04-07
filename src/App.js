import React from 'react';
import './App.css';
import 'react-notifications-component/dist/theme.css';
import $ from 'jquery';
import { Navigate, Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import { ReactNotifications } from 'react-notifications-component';
import Layout from './components/layout-page/Layout';
import Homepage from './components/home-page/Homepage';
import Pagenotfound from './components/common-page/page-not-found/Pagenotfound';
import Sesstiontimeout from './components/common-page/sesstion-time-out-page/Sesstiontimeout';
import Undermaintenance from './components/common-page/under-maintenance-page/Undermaintenance';
import useDidMountEffect from './hooks/useDidMountEffect';
import AdminRegister from './components/home-page/AdminRegister';
function App() {
  useDidMountEffect(() => {
    let uselang = sessionStorage.getItem('lang')
    if (uselang == null) {
      $("html").attr("lang", 'en');
      sessionStorage.setItem('lang', 'en')
    } else {
      $("html").attr("lang", uselang);
      sessionStorage.setItem('lang', uselang)
    }
  }, [])

  return (
    <div className="App">
      <ReactNotifications />
      <DataProvider>
        <Routes>
          <Route path="" element={<Layout />} >
            <Route path="" element={<Navigate replace to="/home" />} />
            <Route path='/home' element={<Homepage />} />
            <Route path='/signUp' element={<AdminRegister/>}/>
           
          </Route>         
          <Route path='/under-maintenance' element={<Undermaintenance />} />
          <Route path='/sesstion-timeout' element={<Sesstiontimeout />} />
          <Route path='*' element={<Pagenotfound />} />
        </Routes>
      </DataProvider>
    </div >
  );
}

export default App;