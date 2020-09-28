import React from "react";

export const FilterWindspeed = ({ windspeedFormat, onChange }) => (
  <select value={windspeedFormat} onChange={(e) => onChange(e.target.value)}>
    <option value="m/s">m/s</option>
    <option value="mph">mph</option>
  </select>
);

export default FilterWindspeed;
