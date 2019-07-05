import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import BasicRedux from './BasicRedux';

const Basic2 = () => (
    <Provider store={store}>
        <BasicRedux />
    </Provider>
);

export default Basic2;
