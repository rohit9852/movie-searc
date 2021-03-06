import React from 'react';

const Toggles = ({ checked, onChange }) => (
  <span className="toggle-control">
    toggle
    <input
      className="dmcheck"
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id="dmcheck"
    />
    <label htmlFor="dmcheck" />
  </span>
);

export default Toggles;