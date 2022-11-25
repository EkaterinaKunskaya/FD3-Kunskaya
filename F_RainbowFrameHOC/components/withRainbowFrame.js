import React from 'react';

let withRainbowFrame = colors => Comp => props => {

  let comp = <Comp {...props} />
  colors.forEach((color)=> {
    comp = <div style={{border:`solid 2px ${color}`, padding:'10px'}}>{comp}</div>
  });

  return (
    <div className='RainbowFrameHOC' style={{padding:'20px'}}>{comp}</div>
  );

};

export { withRainbowFrame };