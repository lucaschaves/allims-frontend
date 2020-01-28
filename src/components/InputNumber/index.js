import React from 'react';
import Input from './styled';

import { Add, Remove } from '@material-ui/icons';

const InputNumber = props => {
  let numberInput = null;

  return (
    <div className={`label-input ${props.hidden ? 'hidden' : ''}`}>
      <label htmlFor={props.id}>{props.title}</label>

      <div className="number-input">
        <button
          onClick={e => {
            e.preventDefault();
            numberInput.stepDown();
          }}
        >
          <Add />
        </button>

        <Input {...props} />
        {/* type='number'
          id={props.id}
          ref={input => {
            numberInput = input;
          }}
          name={props.field}
          placeholder={props.placeholder ? props.placeholder : props.title}
          pattern={props.regex}
          min={props.min}
          max={props.max}
          step={props.step}
          required={props.required ? props.required : false}
          disabled={props.disabled ? props.disabled : false}
          readOnly={props.readonly ? props.readonly : false}
          value={props.default}
        /> */}

        <button
          onClick={e => {
            e.preventDefault();
            numberInput.stepUp();
          }}
        >
          <Remove />
        </button>
      </div>
    </div>
  );
};

export default InputNumber;
