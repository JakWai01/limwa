import React from "react";

export const Filter = ({ format, onChange }) => (
    <select selected={format} onChange={(e) => onChange(e.target.value)}>
      <option selected value="F">Fahrenheit</option>
      <option value="C">Celsius</option>
      <option value="K">Kelvin</option>
    </select>
  );

export default Filter;