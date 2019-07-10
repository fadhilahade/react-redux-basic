import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from './redux/reducers'
import ContactDetail from '../src/redux/containers/contactDetail';
import ContactList from '../src/redux/containers/index'
import * as serviceWorker from './serviceWorker';


const createStoreWithMiddleware = applyMiddleware()(createStore)
ReactDOM.render(
    <Provider store = {createStoreWithMiddleware(reducers)}>
        <ContactDetail />,<ContactList/>
    </Provider>, document.getElementById('root'))

serviceWorker.unregister();
