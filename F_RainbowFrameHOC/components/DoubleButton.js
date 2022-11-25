import React from 'react';
import PropTypes from 'prop-types';

class DoubleButton extends React.Component {

  static propTypes = {
    caption1: PropTypes.string.isRequired,
    caption2: PropTypes.string.isRequired,
    cbPressed: PropTypes.func.isRequired,
  };

  showCaption1 = (e) => {
    this.props.cbPressed(this.props.caption1);
  };

  showCaption2 = () => {
    this.props.cbPressed(this.props.caption2);
  };

  render() {
    return (
      <div className='DoubleButton'>
        <input type='button' value={this.props.caption1} onClick={this.showCaption1} style={{margin: '5px'}}></input>
          {this.props.children}
        <input type='button' value={this.props.caption2} onClick={this.showCaption2} style={{margin: '5px'}}></input>
      </div>
    );
  }

}

export default DoubleButton;