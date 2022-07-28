import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import Todo from './components/'

// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(<App />);
root.render(<Todo />);