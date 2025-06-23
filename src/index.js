import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Tic_Tac_Toe_3D from './Tic_Tac_Toe_3D';
import reportWebVitals from './reportWebVitals';
import Tic_Tac_Toe from './Tic_Tac_Toe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Tic_Tac_Toe />
  </React.StrictMode>
);

reportWebVitals();
