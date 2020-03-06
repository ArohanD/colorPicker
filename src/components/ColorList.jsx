import React, { useState, useEffect } from 'react'
import convert from 'color-convert'

const ColorList = (props) => {
  const [quotes, setQuotes] = useState(true)
  const [colorList, setColorList] = useState([])

  const reRender = () => {
    let newColorList;
    if (props.colorType === 'hex') {
      newColorList = props.colorArray
        .map(color => convert.hsl.hex(color.H, color.S, color.L))
        .map(raw => `#${raw}`)
    } else if (props.colorType === 'hsl') {
      newColorList = props.colorArray
        .map(color => color.hslColor)
    } else if (props.colorType === 'rgb') {
      newColorList = props.colorArray
        .map(color => convert.hsl.rgb(color.H, color.S, color.L))
        .map(raw => `rgb(${raw[0]}, ${raw[1]}, ${raw[2]})`)
    }

    if (quotes) {
      newColorList = newColorList.map(raw => `"${raw}"`)
    }
    setColorList(newColorList)
  }

  useEffect(() => {
    reRender()
  }, [props.colorArray, quotes, props.colorType])




  return (
    <div>
      <div>
        <label className='switch'>
          <input type="checkbox" onChange={() => setQuotes(!quotes)} defaultChecked/>
        </label>
      </div>
      <div id='ColorList'>
        {
          colorList.join(', ')
        }
      </div>
    </div>
  )
}

export default ColorList;