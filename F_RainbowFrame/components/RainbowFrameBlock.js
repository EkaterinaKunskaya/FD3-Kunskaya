import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrameBlock.css';

import RainbowFrame from './RainbowFrame';

class RainbowFrameBlock extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
    colors:PropTypes.array.isRequired,
  };

  render() {
    
    let text = this.props.text;
    this.props.colors.forEach((color)=> {
      text = <RainbowFrame color={color}>{text}</RainbowFrame>
    });

    return (
      <div className='RainbowFrameBlock'>{text}</div>
    );

  }

}

export default RainbowFrameBlock;