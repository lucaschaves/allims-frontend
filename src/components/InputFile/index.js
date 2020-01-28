import React from 'react';
import './style.css';

const InputFile = props => {
  console.log('InputFile', props)
  return (
    <div className={`label-input ${props.hidden ? 'hidden' : ''}`}>
      <label htmlFor={props.id}>{props.title}</label>
      <label htmlFor={props.id}>
        <input
          type='file'
          id={props.id}
          className='file-component'
          name={props.field}
          required={props.required ? 'required' : ''}
          multiple={props.multiple ? 'multiple' : ''}
          readOnly={props.readonly}
          accept={props.accept}
        />
        Selecione o arquivo
      </label>
    </div>
  );
};

export default InputFile;
