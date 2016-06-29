import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import PixelBoard from './components/pixel-board/pixel-board';
import font from './font-data';

const TestApp = () => {
  const character = font['#'];
  const matrix = character.map((row) => _.padStart(row.toString(2), 5, '0').split(''));
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
  React.createElement(TestApp, null),
  appDiv
);
