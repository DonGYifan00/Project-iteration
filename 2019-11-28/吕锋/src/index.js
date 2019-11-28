import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './container/Login'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <App/>, 
    document.getElementById('root')
);
serviceWorker.unregister();
