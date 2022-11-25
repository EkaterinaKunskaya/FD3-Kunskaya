import React from 'react';
import ReactDOM from 'react-dom';

import Br2jsxBlock from './components/Br2jsxBlock';

let text="первый<br>второй<br/>третий<br />последний";

ReactDOM.render(
  <Br2jsxBlock 
    text={text}
  />
  , document.getElementById('container') 
);