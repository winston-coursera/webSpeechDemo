import React from 'react';

const VoiceDropdown = ({ voices, onSelect }) => {
  const options = voices.map((x, i) => <option key={`${x.name}~${i}`}value={i}>{x.name}</option>);

  return (
    <select onChange={onSelect}>
      {options}
    </select>
  )
}

export default VoiceDropdown;