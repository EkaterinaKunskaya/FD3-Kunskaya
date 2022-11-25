import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrameHOCBlock.css';

import DoubleButton from './DoubleButton';
import { withRainbowFrame } from './withRainbowFrame';

class RainbowFrameHOCBlock extends React.Component {

  static propTypes = {
    text1: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
    colors:PropTypes.array.isRequired,
  };

  render() {
    let FramedDoubleButton=withRainbowFrame(this.props.colors)(DoubleButton);
   
    return (
      <div className='RainbowFrameHOCBlock'>
        <DoubleButton caption1='однажды' caption2='пору' cbPressed={ num => alert(num) } >{this.props.text1}</DoubleButton>
        <FramedDoubleButton caption1='я из лесу' caption2='мороз' cbPressed={ num => alert(num) }>{this.props.text2}</FramedDoubleButton>
      </div>
    );

  }

}

export default RainbowFrameHOCBlock;