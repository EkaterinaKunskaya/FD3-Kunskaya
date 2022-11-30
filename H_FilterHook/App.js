import React from 'react';
import ReactDOM from 'react-dom';

import Filter from './components/Filter';

var wordsList=['california', 'everything', 'aboveboard',
 'washington', 'basketball', 'weathering', 'characters',
  'literature', 'contraband', 'appreciate'];
  
ReactDOM.render(
  <Filter 
    words={wordsList}
  />
  , document.getElementById('container') 
);