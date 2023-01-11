/* Entry point for react application */
// imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/Globals.module.css';

// changed to querySelector for personal convenience, id-ed root
// check ReactDOM
// console.log(ReactDOM); // provides an object with two methods: createRoot and hydrateRoot.

// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = ReactDOM.createRoot(document.querySelector('#root'));

// trying out hydrateRoot
// const root = ReactDOM.hydrateRoot(document.querySelector('#root'));

// render through ReactDOM API
root.render(<App />);
