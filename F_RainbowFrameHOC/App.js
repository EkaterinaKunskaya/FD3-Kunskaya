import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrameHOCBlock from './components/RainbowFrameHOCBlock';

let text1='в студёную зимнюю';
let text2='вышел, был сильный';
let colors=['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

ReactDOM.render(
  <RainbowFrameHOCBlock 
    text1={text1}
    text2={text2}
    colors={colors}
  />
  , document.getElementById('container') 
);