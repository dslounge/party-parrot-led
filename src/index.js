import React from 'react';
import ReactDOM from 'react-dom';
import Pixel from './components/pixel/pixel';
import font from './font-data';

const TestApp = () => {
  const character = font['&'];
  const matrix = character.map((row) => parseInt(row, 16).toString(2).split(''));

  const rows = matrix.map((row) => {
    const pixels = row.map((val) => {
      return (
        <Pixel on={val === '1'} />
      );
    });

    return (
      <div>
        {pixels}
      </div>
    );
  });

  return (
    <div>
      <h1>Pixel test!</h1>
      {rows}
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
