import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <BrowserRouter> */}
      <HashRouter>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </HashRouter>
      {/* </BrowserRouter> */}
    </Provider>
  </React.StrictMode>,
);
