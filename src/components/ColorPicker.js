import React, { useState } from 'react';
import { CirclePicker } from 'react-color';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorPicker.css';

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
    setIsCopied(false);
  };

  const handleCopy = () => {
    setIsCopied(true);
  };

  return (
    <div className="color-picker">
      <CirclePicker
        color={selectedColor}
        onChangeComplete={handleColorChange}
        colors={['#FF0000', '#0000FF', '#FFFF00', '#008000', '#FFA500', '#800080']}
      />
      <div>
        <CopyToClipboard text={selectedColor} onCopy={handleCopy}>
          <button className="copy-button">Copy Color</button>
        </CopyToClipboard>
        {isCopied && <span className="copied-message">Copied!</span>}
      </div>
      <div className="selected-color">Selected Color: {selectedColor}</div>
    </div>
  );
}

export default ColorPicker;