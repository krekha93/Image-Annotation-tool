import React, { useState } from "react";

function Color1() {
  const [selectedColor, setSelectedColor] = useState("#000000");

  // Function to handle color change
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div>
      <h2>Color Picker</h2>
      <input type="color" value={selectedColor} onChange={handleColorChange} />
    </div>
  );
}

export default Color1;
