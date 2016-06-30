import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import _ from 'lodash';
import PixelBoard from './components/pixel-board/pixel-board';
import font from './font-data';
import ledApp from './app/reducers';
import { setSize } from './app/actions';

const store = createStore(ledApp);

const character = font['#'];
const matrix = character.map((row) => _.padStart(row.toString(2), 5, '0').split(''));

// store.dispatch(setMatrix(matrix));
store.dispatch(setSize(7, 30));

const App = () => {
  return (
    <div>
      <h1>Matrix test!</h1>
      <PixelBoard matrix={matrix} />
    </div>
  );
};

const appDiv = document.createElement('div');
appDiv.id = 'parrot-app';
document.body.appendChild(appDiv);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  appDiv
);
