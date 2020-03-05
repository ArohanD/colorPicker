import React from 'react'
import convert from 'color-convert'

const ColorList = (props) => {

  let hslColors = props.colorArray
  .map(color => color.hslColor)
  .join(', ');

  let rgbColors = props.colorArray
  .map(color => convert.hsl.rgb(color.H, color.S, color.L))
  .map(raw => `rgb(${raw[0]}, ${raw[1]}, ${raw[2]})`)
  .join(', ')

  let hexColors = props.colorArray
  .map(color => convert.hsl.hex(color.H, color.S, color.L))
  .map(raw => `#${raw}`)
  .join(', ')

  return (
    <div id='ColorList'>
      {
        hexColors
      }
    </div>
  )
}

export default ColorList;