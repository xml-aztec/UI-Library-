import React from "react";
import "./index.css";

const Button = ({ size = "md", variant = "primary", children }) => {
  const className = `button ${size} ${variant} `;
  return <button className={className}>{children}</button>;
};

export default Button;