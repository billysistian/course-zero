import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./main.css";
import ScrollToTOp from './components/ScrollToTop.jsx';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTOp />
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
