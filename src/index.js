import React from 'react';
import ReactDOM from 'react-dom';
import Details from './Screens/Details/Details';
import Home from './Screens/Home/Home';
import BookShow from './Screens/Bookshow/BookShow';
import Confirmation from './Screens/Confirmation/Confirmation';

ReactDOM.render(
  <React.StrictMode>
    <Home/>
    <Details/>
    <BookShow />
    <Confirmation/>
  </React.StrictMode>,
  document.getElementById('root')
);
