import React from 'react';

const Textarea = props => {
  const style = {
    width: props.width ? props.width + 'rem' : 'auto',
    height: props.height ? props.height + 'rem' : 'auto'
  };
  return (
    <div className={`label-input ${props.hidden ? 'hidden' : ''}`}>
      <label htmlFor={props.field}>{props.title}</label>
      <textarea
        id={props.field}
        name={props.field}
        maxLength={props.max}
        placeholder={props.placeholder ? props.placeholder : props.title}
        required={props.required ? 'required' : ''}
        style={style}
        disabled={props.disabled ? props.disabled : ''}
      >
        {props.default}
      </textarea>
    </div>
  );
};

export default Textarea;
