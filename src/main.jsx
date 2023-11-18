// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


import React from 'react';
import { createRoot } from 'react-dom/client';
import ContactApp from './components/ContactApp';

// styling
import './styles/style.css'
 
 
const root = createRoot(document.getElementById('root'));
root.render(<ContactApp />);