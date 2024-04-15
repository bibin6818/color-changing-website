import React, { useState } from 'react';
import './App.css';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#fff');
  const [selectedColor, setSelectedColor] = useState(null);
  const [clickedButton, setClickedButton] = useState(null);

  const handleColorChange = (color) => {
    setBackgroundColor(color);
    setSelectedColor(color);
    setClickedButton(color);
    setTimeout(() => setClickedButton(null), 500); // Reset the clicked button after 500ms
  };

  const handleReset = () => {
    setBackgroundColor('#fff'); // Reset background color to white
    setSelectedColor(null); // Reset selected color
  };

  const getColorButtonStyle = (color) => {
    if (selectedColor === color) {
      return { backgroundColor: 'black', color: '#fff' };
    } else {
      return {};
    }
  };

  return (
    <div className="app" style={{ backgroundColor }}>
      <div className="color-buttons">
        <button
          style={getColorButtonStyle('#9400D3')}
          onClick={() => handleColorChange('#9400D3')}
          className={clickedButton === '#9400D3' ? 'button-animation' : ''}
        >
          Violet
        </button>
        <button
          style={getColorButtonStyle('#4B0082')}
          onClick={() => handleColorChange('#4B0082')}
          className={clickedButton === '#4B0082' ? 'button-animation' : ''}
        >
          Indigo
        </button>
        <button
          style={getColorButtonStyle('#0000FF')}
          onClick={() => handleColorChange('#0000FF')}
          className={clickedButton === '#0000FF' ? 'button-animation' : ''}
        >
          Blue
        </button>
        <button
          style={getColorButtonStyle('#00FF00')}
          onClick={() => handleColorChange('#00FF00')}
          className={clickedButton === '#00FF00' ? 'button-animation' : ''}
        >
          Green
        </button>
        <button
          style={getColorButtonStyle('#FFFF00')}
          onClick={() => handleColorChange('#FFFF00')}
          className={clickedButton === '#FFFF00' ? 'button-animation' : ''}
        >
          Yellow
        </button>
        <button
          style={getColorButtonStyle('#FF7F00')}
          onClick={() => handleColorChange('#FF7F00')}
          className={clickedButton === '#FF7F00' ? 'button-animation' : ''}
        >
          Orange
        </button>
        <button
          style={getColorButtonStyle('#FF0000')}
          onClick={() => handleColorChange('#FF0000')}
          className={clickedButton === '#FF0000' ? 'button-animation' : ''}
        >
          Red
        </button>
      </div>
      <div className="reset-button">
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
