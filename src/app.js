import React from 'react';
import { Provider } from 'react-redux';
import { store } from './source/init/store';
import { Source } from './source';

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <Source />
      </Provider>
    </>
  )
};
