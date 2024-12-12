import React, { useState } from "react";
import "./index.css"; // Импорт стилей

const Input = ({ 
  type = "text", 
  placeholder = "", 
  value, 
  onChange, 
  disabled = false, 
  label, 
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isDanger, setIsDanger] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue);
    setIsDanger(newValue === "Danger");
  };

  return (
    <div className="input-container">
      {label && <label className={`input-label ${isFocused ? "focused" : ""} ${isDanger ? "danger" : ""}`}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        className={`input-field ${isFocused ? "focused" : ""} ${isDanger ? "danger" : ""}`}
      />
    </div>
  );
};

export default Input;