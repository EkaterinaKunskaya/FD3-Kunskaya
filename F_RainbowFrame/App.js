import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrameBlock from './components/RainbowFrameBlock';

let text='Hello!';
let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

ReactDOM.render(
  <RainbowFrameBlock 
    text={text}
    colors={colors}
  />
  , document.getElementById('container') 
);