import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './store/reducers';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpics } from './store/epics';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
//npm install @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit'

const composeEnhancer = composeWithDevTools({
  name: 'Employee Management'
});

const epicMiddleware = createEpicMiddleware();
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(epicMiddleware)));
epicMiddleware.run(rootEpics);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
        <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
