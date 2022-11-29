﻿import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrame from './components/RainbowFrame';

let text='Hello!';
let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

ReactDOM.render(
  <RainbowFrame colors={colors}>
    {text}
  </RainbowFrame>
  , document.getElementById('container') 
);