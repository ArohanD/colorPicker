import React, { useState, useEffect } from 'react';
import generateColors from '../hexColors.js'
import convert from 'color-convert';

//colors = colors.slice(50).concat(colors.slice(0, 50))

const ColorDisplay = (props) => {
  let colors = props.hslColors;
  // TODO: Offset
  // useEffect(() => {
  //   colors = colors.slice(90).concat(props.hslColors.slice(0, 90))
  //   props.setColorWall(colors)
  // }, [])

  return (
    <div id={'colorContainer'}>
      {
        colors.map((col, y) => {
          return(
              <div className={'colorRow'} key={y}>
                {
                  col.map((color, x) => <ColorCell 
                                    color={color.hslColor}
                                    handleClick={props.handleClick} 
                                    coordinates={[y, x]}
                                    handleMouseOver={props.handleMouseOver}
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

  return (
    <div
      className={'colorCell'} 
      style={{'--color': props.color}} 
      id={JSON.stringify(props.coordinates)} 
      onClick={(e) => props.handleClick(e)}
      onMouseOver={(e) => props.handleMouseOver(e)}>
    </div>
  )
}

export default ColorDisplay;