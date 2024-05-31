import React, { useState } from 'react';
import { CirclePicker } from 'react-color';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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
    <div>
      <CirclePicker
        color={selectedColor}
        onChangeComplete={handleColorChange}
        colors={['#FF0000', '#0000FF', '#FFFF00', '#008000', '#FFA500', '#800080']}
      />
      <div>
        <CopyToClipboard text={selectedColor} onCopy={handleCopy}>
          <button>Copy Color</button>
        </CopyToClipboard>
        {isCopied && <span>Copied!</span>}
      </div>
      <div>Selected Color: {selectedColor}</div>
    </div>
  );
};

export default ColorPicker;