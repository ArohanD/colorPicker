import React, { useState, useEffect } from 'react';

const ColorDisplay = (props) => {
  let colors = props.hslColors;
  useEffect(() => {
    const newColors = props.baseColors.slice(props.offSet).concat(props.baseColors.slice(0, props.offSet))
    props.setColorWall(newColors)
  }, [props.offSet])

  return (
    <div
      onMouseDown={(e) => props.handleClick(e)}
      id={'colorContainer'}>
      {
        colors.map((col, y) => {
          return (
            <div className={'colorRow'} key={y}>
              {
                col.map((color, x) => <ColorCell
                  color={color.hslColor}
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
      style={{ '--color': props.color }}
      id={JSON.stringify(props.coordinates)}
      onMouseOver={(e) => props.handleMouseOver(e)}>
    </div>
  )
}

export default ColorDisplay;