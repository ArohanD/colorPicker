import React from 'react';
import generateColors from '../hexColors.js'
import hslColors from '../hslColorNodes.js'

//colors = colors.slice(50).concat(colors.slice(0, 50))

const ColorDisplay = (props) => {
  const colors = hslColors //.slice(180).concat(hslColors.slice(0, 180))

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
        colors.map(col => {
          return(
              <div style={rowStyle}>
                {
                  col.map(color => <ColorCell color={color} />)
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
    width: '2.7px'
  }

  return (
    <div style={cellStyle}></div>
  )
}

export default ColorDisplay;