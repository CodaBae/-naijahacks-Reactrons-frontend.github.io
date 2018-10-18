import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DashBoard from './components/DashBoard'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<DashBoard />, document.getElementById('root'));
registerServiceWorker();
