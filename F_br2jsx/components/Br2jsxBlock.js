import React from 'react';
import PropTypes from 'prop-types';

import './Br2jsxBlock.css';

class Br2jsxBlock extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  render() {
    let textArr = this.props.text.split(/<br *\/?>/);
    let resultTextArr = [];
    textArr.forEach((element, index)=> {
      if (index) resultTextArr.push(<br/>);
      resultTextArr.push(element);
    });

    return <div className='Br2jsxBlock'>{resultTextArr}</div>;
    
  }

}

export default Br2jsxBlock;