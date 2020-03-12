import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import hslColors from './hslColorNodes'
import ColorDisplay from './components/ColorDisplay.jsx';
import ColorPreview from './components/ColorPreview.jsx'
import ColorList from './components/ColorList.jsx'
import { Line } from 'react-lineto'

// Remove for local testing
import { analytics } from './firebase.js'

const App = () => {
  const baseColors = hslColors;
  const [colorWall, setColorWall] = useState(hslColors)
  const [colorArray, setColorArray] = useState([])
  const [startPoint, setStartPoint] = useState([])
  const [endPoint, setEndPoint] = useState([])
  const [adjustFirstCoordinate, setAdjustFirstCoordinate] = useState(true)
  const [colorType, setColorType] = useState('hex')
  const [lineCoordinates, setLineCoordinates] = useState([[0, 0], [0, 0]])
  const [offSet, setOffSet] = useState(0)
  const newOffSet = useRef(offSet);

  const handleClick = (e) => {
    console.log(e.target)
    const coordinates = JSON.parse(e.target.id);
    if (startPoint.length === 0 || adjustFirstCoordinate) {
      setStartPoint(coordinates)
      setAdjustFirstCoordinate(false)
      setLineCoordinates([[e.pageX, e.pageY], [e.pageX, e.pageY]]);
    } else {
      setEndPoint(coordinates)
      setAdjustFirstCoordinate(true)
      let newCoordinates = JSON.parse(JSON.stringify(lineCoordinates));
      newCoordinates[1] = [e.pageX, e.pageY];
      setLineCoordinates(newCoordinates)
    }
  }

  useEffect(() => {
    connect()
  }, [endPoint, colorWall])

  const connect = () => {
    let [startX, startY] = startPoint;
    let [endX, endY] = endPoint;

    /// SLOPE CALCULATIONS ///
    // y = mx + b
    // b = -1(mx - y)
    // x = (y - b) / m
    const slope = (endY - startY) / (endX - startX);
    const slopeB = ((slope * startX) - startY) * -1;

    const xArray = [];
    const yArray = [];

    for (let y = startY;
      endY > startY ? y <= endY : y >= endY;
      endY > startY ? y++ : y--) {
      let x = Math.floor((y - slopeB) / slope)
      yArray.push([x, y])
    }

    for (let x = startX;
      endX > startX ? x <= endX : x >= endX;
      endX > startX ? x++ : x--) {
      let y = Math.floor(slope * x + slopeB)
      xArray.push([x, y])
    }

    const coordinateList = xArray.length > yArray.length ? xArray : yArray;
    const colorList = coordinateList.map(coordinates => colorWall[coordinates[0]][coordinates[1]])
    setColorArray(colorList)

  }

  const handleMouseOver = (e) => {
    if (!adjustFirstCoordinate) {
      let newCoordinates = JSON.parse(JSON.stringify(lineCoordinates));
      newCoordinates[1] = [e.pageX, e.pageY];
      ReactDOM.render(<Line
        x0={lineCoordinates[0][0]}
        y0={lineCoordinates[0][1]}
        x1={newCoordinates[1][0]}
        y1={newCoordinates[1][1]} />, document.getElementById('line'))
    }
  }

  const shiftWall = (e) => {
    let shift = +e.target.value
    newOffSet.current = shift
    setTimeout(() => {
      setOffSet(newOffSet.current)
    }, 1000);
  }

  return (
    <div id={'app'}>
      <h1>Web Color Generator</h1>
      <p id='description'>Generate an array of browser-friendly colors based on lines you draw.</p>
      <div id={'options'}>
        <span id={'format'}>Color Format:</span>
        <button
          style={colorType === 'hex' ? { 'background': '#FFB8EE' } : null}
          onClick={() => setColorType('hex')}>
          Hex
        </button>
        <button
          style={colorType === 'rgb' ? { 'background': '#FFB8EE' } : null}
          onClick={() => setColorType('rgb')}>
          RGB
        </button>
        <button
          style={colorType === 'hsl' ? { 'background': '#FFB8EE' } : null}
          onClick={() => setColorType('hsl')}>
          HSL
        </button>
      </div>
      <div id={'colorDisplays'}>
        <ColorDisplay
          handleClick={handleClick.bind(this)}
          baseColors={baseColors}
          hslColors={colorWall}
          setColorWall={setColorWall.bind(this)}
          handleMouseOver={handleMouseOver.bind(this)}
          offSet={offSet}
        />
        <ColorPreview colorArray={colorArray} />
      </div>
      <div>
        <label htmlFor="offset">Offset:</label>
        <input
          type="range"
          name="offset"
          id="offset"
          min="0"
          max="180"
          step="10"
          defaultValue={offSet}
          onChangeCapture={(e) => shiftWall(e)} />
      </div>
      <ColorList
        colorArray={colorArray}
        colorType={colorType} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));