import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

class RainbowFrame extends React.Component {

  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  render() {
    
    let text = this.props.children;
    this.props.colors.forEach((color)=> {
      text = <div style={{border:'solid 2px '+color, padding:'10px'}}>{text}</div>
    });

    return (
      <div className='RainbowFrame'>{text}</div>
    );

  }

}

export default RainbowFrame;