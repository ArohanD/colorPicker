import React from 'react';
import generateColors from '../hexColors.js'
import colors from '../hslColorNodes.js'

//const colors = generateColors();

const ColorDisplay = (props) => {

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    //flexWrap: 'wrap',
    width: '80vw'
  }

  const rowStyle = {
    display: 'flex',
    flexDirection: 'row',
  }

  return (
    <div>
      {
        colors.map(row => {
          return(
            <div style={containerStyle}>
              <div style={rowStyle}>
                {
                  row.map(color => <ColorCell color={color} />)
                }
              </div>
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
    height: '10px',
    width: '10px'
  }

  return (
    <div style={cellStyle}></div>
  )
}

export default ColorDisplay;