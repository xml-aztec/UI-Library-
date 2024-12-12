import React, { useState } from "react";
import "./index.css"; 

const Tooltip = ({ text, position = "top", children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && <div className={`tooltip ${position}`}>{text}</div>}
    </div>
  );
};

export default Tooltip;
