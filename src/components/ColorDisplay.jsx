import React, { useState } from 'react';
import generateColors from '../hexColors.js'
import convert from 'color-convert';

//colors = colors.slice(50).concat(colors.slice(0, 50))

const ColorDisplay = (props) => {
  const colors = props.hslColors //.slice(180).concat(hslColors.slice(0, 180))

  return (
    <div id={'colorContainer'}>
      {
        colors.map((col, y) => {
          return(
              <div class={'colorRow'} key={y}>
                {
                  col.map((color, x) => <ColorCell 
                                    color={color}
                                    handleClick={props.handleClick} 
                                    coordinates={[y, x]}
                                    key={[y, x]}
                                    />)
                }
              </div>
          )
        })
      }
    </div>
  )
}

const ColorCell = (props) => {

  const cellStyle = {
    backgroundColor: props.color,
    height: '8px',
    width: '4px'
  }

  return (
    <div style={cellStyle} id={JSON.stringify(props.coordinates)} onClick={(e) => props.handleClick(e)}>

    </div>
  )
}

export default ColorDisplay;