import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App
    greeting="What's cookin' good lookin?"
  />,
  document.getElementById('root')
);
registerServiceWorker();
