// ColorPicker.jsx
import React, { useState } from 'react';
import { CirclePicker } from 'react-color';
import './ColorPicker.css';

// ColorPicker component
const ColorPicker = ({ colors = defaultColors, circleSize = 28, circleSpacing = 8 }) => {
  // State to store the selected color and the copied status
  const [selectedColor, setSelectedColor] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  // Function to handle color change
  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
    navigator.clipboard.writeText(color.hex);
    setIsCopied(true);
  };


  return (
    <div className="color-picker">
      <h2>Color Picker Widget</h2>
      <div className="color-section">
        {/* Map through the colors array and render each color item */}
        {colors.map((color) => (
          <div key={color.name} className="color-item">
            <h3>{color.name}</h3>
            {/* CirclePicker component to display the main color and its shades */}
            <CirclePicker
              color={selectedColor}
              onChangeComplete={handleColorChange}
              colors={[color.main, ...color.shades]}
              circleSize={circleSize}
              circleSpacing={circleSpacing}
            />
          </div>
        ))}
      </div>
      <div className="selected-color-section">
        <h3>Selected Color:</h3>
        <div className="selected-color">
          {/* Display the selected color preview */}
          <div
            className="color-preview"
            style={{ backgroundColor: selectedColor }}
          ></div>
          {/* Display the selected color hex value */}
          <span>{selectedColor}</span>
        </div>
        {/* Display the copied message when a color is clicked */}
        {isCopied && <span className="copied-message">Copied to clipboard!</span>}
      </div>
    </div>
  );
};

// Default colors
const defaultColors = [
  { name: 'Red', main: '#FF0000', shades: ['#FF4D4D', '#FF8080', '#FFB3B3', '#FFE6E6'] },
  { name: 'Blue', main: '#0000FF', shades: ['#4D4DFF', '#8080FF', '#B3B3FF', '#E6E6FF'] },
  { name: 'Yellow', main: '#FFFF00', shades: ['#FFFF4D', '#FFFF80', '#FFFFB3', '#FFFFE6'] },
  { name: 'Green', main: '#008000', shades: ['#00B300', '#00CC00', '#00E600', '#80FF80'] },
  { name: 'Orange', main: '#FFA500', shades: ['#FFB84D', '#FFCC80', '#FFE0B3', '#FFF5E6'] },
  { name: 'Purple', main: '#800080', shades: ['#B300B3', '#CC00CC', '#E600E6', '#FF80FF'] },
];

// Set default props
ColorPicker.defaultProps = {
  colors: defaultColors,
  circleSize: 28,
  circleSpacing: 8,
};

export default ColorPicker;