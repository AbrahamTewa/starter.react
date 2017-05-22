import App from './App';
import ReactDOM from 'react-dom';

function initialize() {

    console.log('DOMContentLoaded');

    ReactDOM.render( App()
                   , document.querySelector('body'));
}

document.addEventListener('DOMContentLoaded', initialize);
