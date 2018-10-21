import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppRouter from './AppRouter'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
