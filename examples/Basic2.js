import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

const Basic2 = () => (
    <Provider store={store}>
        <div>Redux form testing</div>
    </Provider>
);

export default Basic2;
