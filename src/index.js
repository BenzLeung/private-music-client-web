import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware  from 'redux-logger';
import reducer from './redux/reducer';
import App from './presentation/App/App';
import 'normalize.css';
import './index.css';

let store = createStore(reducer, applyMiddleware(thunkMiddleware/*, loggerMiddleware*/));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
