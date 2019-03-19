import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'index.css';
import App from 'components/App';

const root = document.getElementById('root');

ReactDOM.render(<App />, root);

registerServiceWorker();
