import React, { useState, useEffect } from 'react';
import ThemeProvider from './theme';
import ThemeContext from './theme/ThemeContext';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './store/actions';
import { Alert } from './components';
import Routes from './Routes';

import './assets/scss/index.css';
import 'typeface-montserrat';
import { CssBaseline } from '@material-ui/core';

function App() {
  const [theme, setTheme] = useState('crane');
  useEffect(() => {
    store.dispatch(loadUser());
  }, [])
    return (
      <Provider store={store}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Alert />
            <Routes />
        </ThemeProvider>
        </ThemeContext.Provider>    
      </Provider>
    );
  }
export default App;
