/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { Layout } from 'antd';
import CreateOsscPage from './pages/CreateOsscPage';


function App() {

  return (
    <Router>
      <main className='container p-4'>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/create" element={<CreateOsscPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
