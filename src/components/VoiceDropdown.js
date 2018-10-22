import React from 'react';

const VoiceDropdown = ({ voices, onSelect }) => {
  const options = voices.map((x, i) => <option value={i}>{i}</option>);
  return (
    <select onChange={onSelect}>
      {options}
    </select>
  )
}

export default VoiceDropdown;