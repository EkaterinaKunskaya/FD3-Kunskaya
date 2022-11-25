import React from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {

  static propTypes = {
    color: PropTypes.string.isRequired,
  };
  
  render() {
    return (
      <div style={{border:'solid 2px '+this.props.color, padding:'10px'}}>
        {this.props.children}
      </div>
    );
  }

}

export default RainbowFrame;