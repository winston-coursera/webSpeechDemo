import React from 'react';

const TextOutput = ({ text, onChange, attempt }) => {
  let computedText;
  
  if (text && text.length) {
    computedText = text.trim().split(/\s+/).map((x, i) => (<span key={`${attempt}~${i}`}><h2>{x}</h2></span>));
  } else {
    computedText = (<i><h2>Type Something or Say Something</h2> (after starting this duh)</i>);
  }

  return (
    <div
      className="magicspans"
      onChange={onChange}
    >
      {computedText}
    </div>
  )
};

export default TextOutput;