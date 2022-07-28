import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import Todo from './components/Todo' // goes hand-in-hand with 

// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
// root.render(<Todo />); // just observing the rendering of Todo after importation.