import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
/* OWN */
import App from './App';
import DrawerProvider from './Context/DrawerContext';
import BackendDataProvider from './Containers/BackendDataProvider';
import ImageViewerProvider from './Context/ImageViewerContext';
/* SASS */
import './index.scss';




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BackendDataProvider>
        <ImageViewerProvider>
          <DrawerProvider>
            <App />
          </DrawerProvider>
        </ImageViewerProvider>
      </BackendDataProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
