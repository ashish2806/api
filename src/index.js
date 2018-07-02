import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import axios from 'axios';
axios.defaults.baseURL='http://local.demo1.com/api/';
//axios.defaults.headers.common['Authorization']='AUTH TOKN 22222';

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
