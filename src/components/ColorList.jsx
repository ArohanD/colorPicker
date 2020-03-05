import React from 'react'

const ColorList = (props) => {

  let hslString = props.colorArray.join(', ');

  return (
    <div id='ColorList'>
      {
        hslString
      }
    </div>
  )
}

export default ColorList;