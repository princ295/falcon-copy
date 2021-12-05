import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
// import { store } from './store/store';

import "./styles/styles.scss";

ReactDOM.render(
  
  // <Provider store={store}>
  //   <I18nextProvider i18n={i18next}>
   <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
      </ThemeProvider>
   // {/* </I18nextProvider>
 // </Provider> */}
  ,
  document.getElementById('root')
);

