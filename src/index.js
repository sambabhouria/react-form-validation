import React from 'react';
import ReactDOM from 'react-dom';
import RegisterForm from './registrationForm/RegisterForm';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
  <React.StrictMode>
    <RegisterForm />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
