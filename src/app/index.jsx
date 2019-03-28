import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import store from '../store/configureStore';
import HomePage from '../pages/HomePage';

import styles from './styles.less';

const App = () => (
  <Provider store={store}>
    <HomePage />
  </Provider>
);

ReactDOM.render(
  <App className={styles} />,
  document.getElementById('root'),
);
