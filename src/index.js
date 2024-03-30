import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './Home';
import Source from './components/Source';
import App from './components/App';
import Blog from './components/Blog';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/navbar';
import Copyright from './components/bottomcopyright';


export default function Index() {
  return (
    <BrowserRouter>
        <Navbar />
    <Routes>
      <Route path="/" exact element={<Home />} />
        <Route path="/source" element={<Source />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/app" element={<App />} />
      </Routes>
      <Copyright />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
