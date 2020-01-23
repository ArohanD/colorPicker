import React from 'react';
import ReactDOM from 'react-dom';
import ColorDisplay from './components/ColorDisplay.jsx';

const App = () => {

  const appStyle = {
    padding: '10px'
  }

  return (
    <div style={appStyle}>
      <h1>Color Generator</h1>
      <p>Generate an array of browser-friendly colors based on lines you draw.</p>
      <ColorDisplay />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));