import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import hslColors from './hslColorNodes'
import ColorDisplay from './components/ColorDisplay.jsx';
import ColorPreview from './components/ColorPreview.jsx'

const App = () => {
  const [colorArray, setColorArray] = useState([])
  const [startPoint, setStartPoint] = useState([])
  const [endPoint, setEndPoint] = useState([])
  const [adjustFirstCoordinate, setAdjustFirstCoordinate] = useState(true)

  const handleClick = (e) => {
    const coordinates = JSON.parse(e.target.id);
    if(startPoint.length === 0 || adjustFirstCoordinate) {
      setStartPoint(coordinates)
      setAdjustFirstCoordinate(false)
    } else {
      setEndPoint(coordinates)
      setAdjustFirstCoordinate(true)
    }
  }

  useEffect(() => {
    connect(startPoint, endPoint)
  }, [endPoint])

  const connect = (start, end) => {
    let [startX, startY] = start;
    let [endX, endY] = end;

    /// SLOPE CALCULATIONS ///
    // y = mx + b
    // b = -1(mx - y)
    // x = (y - b) / m
    const slope = (endY - startY) / (endX - startX);
    const slopeB = ((slope * startX) - startY) * -1;

    const xArray = [];
    const yArray = [];

    for(let y = startY; endY > startY ? y <= endY : y >= endY; endY > startY ? y++ : y--) {
      let x = Math.floor((y - slopeB) / slope)
      yArray.push([x, y])
    }
    
    for(let x = startX; endX > startX ? x <= endX : x >= endX; endX > startX ? x++ : x--) {
      let y = Math.floor(slope * x + slopeB)
      xArray.push([x, y])
    }

    const coordinateList = xArray.length > yArray.length ? xArray : yArray;
    const colorList = coordinateList.map(coordinates => hslColors[coordinates[0]][coordinates[1]])
    setColorArray(colorList)

  }

  return (
    <div id={'app'}>
      <h1>Color Generator</h1>
      <p>Generate an array of browser-friendly colors based on lines you draw.</p>
      <ColorDisplay 
        handleClick={handleClick.bind(this)}
        hslColors={hslColors}
        />
      <ColorPreview colorArray={colorArray}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));