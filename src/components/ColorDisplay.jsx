import React from 'react';
import generateColors from '../hexColors.js'

const colors = generateColors();

const ColorDisplay = (props) => {

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '80vw'
  }

  return (
    <div style={containerStyle}>
      {
        colors.map(color => <ColorCell color={color} />)
      }
    </div>
  )
}

const ColorCell = (props) => {

  const cellStyle = {
    backgroundColor: props.color,
    height: '10px',
    width: '10px'
  }

  return (
    <div style={cellStyle}></div>
  )
}

export default ColorDisplay;