import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import App from './components/app';

const store = createStore(reducer);

// const bindActionCreators = (creator, dispatch) => (...args) => {
//     dispatch(creator(...args));
// }

// function bindActionCreators(creator, dispatch) {
//     return function(...args) {
//         return dispatch(creator(...args));
//     };
// }

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));    
