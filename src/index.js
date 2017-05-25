import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore
       , getStore} from './redux';

function initialize() {
    configureStore({action: {title: 'React 21'}});

    ReactDOM.render( <Provider store={getStore()}>
                        <App />
                     </Provider>
                   , document.querySelector('#root'));
}

document.addEventListener('DOMContentLoaded', initialize);
