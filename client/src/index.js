import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import AppRoutes from './routes/AppRouter';

const store = configureStore();

//const state = store.getState();

//console.log(state);

const SchoolApp = () => {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <SchoolApp />
  </React.StrictMode>,
  document.getElementById('root'),
);
