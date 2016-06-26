import React from 'react';
import ReactDOM from 'react-dom';
import Pixel from './components/pixel/pixel';
const TestApp = () => {
  return (
    <div>
      <h1>SUP!</h1>
      <Pixel />
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
