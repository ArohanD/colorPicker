import React, { useState, useEffect } from 'react';

const ColorDisplay = (props) => {
  let colors = props.hslColors;
  // TODO: Offset
  useEffect(() => {
    const newColors = props.baseColors.slice(props.offSet).concat(props.baseColors.slice(0, props.offSet))
    props.setColorWall(newColors)
  }, [props.offSet])

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