import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ToDo from './MyToDo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>TODO</h1>
    <ToDo />
  </React.StrictMode>
);