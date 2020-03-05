import React from 'react'

const ColorPreview = (props) => {
  return (
    <div id='preview'>
      {
        props.colorArray.map(color => <ColorCell 
        key={color.hslColor}
        color={color.hslColor} />)
      }
    </div>
  )
}

const ColorCell = (props) => {
  return (
    <div
      className={'previewCell'}
      style={{ '--color': props.color }}>
    </div>
  )
}

export default ColorPreview;