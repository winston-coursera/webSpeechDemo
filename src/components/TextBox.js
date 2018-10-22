import React from 'react';

const TextBox = ({ text, onchangeCallback, talking }) => {

  return (
    <textarea onChange={onchangeCallback} disabled={talking} value={text} />
  );
};

export default TextBox;