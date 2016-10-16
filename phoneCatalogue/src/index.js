import React from 'react';
import ReactDOM from 'react-dom';
import PhoneCatalogueApp from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Phones from  './Data';

ReactDOM.render(
  <PhoneCatalogueApp phones={Phones}/>,
  document.getElementById('root')
);