import React from 'react';
import ReactDOM from 'react-dom';

const TestApp = () => {
  return (
    <div>
      <h1>SUP!</h1>
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
