import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import rootReducer from './reducers/root_reducer';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

let unsubscribe = store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
