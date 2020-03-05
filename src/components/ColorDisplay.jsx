import React, { useState } from 'react';
import generateColors from '../hexColors.js'
import convert from 'color-convert';

//colors = colors.slice(50).concat(colors.slice(0, 50))

const ColorDisplay = (props) => {
  const colors = props.hslColors //.slice(180).concat(hslColors.slice(0, 180))

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '80vw'
  }

  const rowStyle = {
    display: 'flex',
    flexDirection: 'column',
  }

  return (
    <div style={containerStyle}>
      {
        colors.map((col, y) => {
          return(
              <div style={rowStyle} key={y}>
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