import React from 'react';
import { render } from 'react-dom';
import App from '@/App';
import '@Lib'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
render((
        <BrowserRouter>
            <App />
        </BrowserRouter>), document.getElementById('root'));

serviceWorker.unregister();
