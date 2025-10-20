import React from "react";

function Keypad() {
  // Event handler for input change
  function handleChange() {
    console.log("Entering password...");
  }

  return (
    <div>
      <input
        type="password"
        onChange={handleChange} // Attach event handler
        placeholder="Enter password"
      />
    </div>
  );
}

export default Keypad;
