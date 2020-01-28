import React from 'react';

import imageNotFound from 'assets/images/image_not_found.svg';

const ImageBox = props => {
  console.log('ImageBox', props)
  const style = {
    width: props.width ? props.width + 'rem' : 'auto',
    height: props.height ? props.height + 'rem' : 'auto'
  };
  return (
    <div className={`label-input ${props.hidden ? 'hidden' : ''}`}>
      {/* <label htmlFor={props.id}>{props.title}</label> */}
      <label htmlFor=''>{props.title}</label>
      <input
        type='image'
        src={props.urlList ? props.urlList : imageNotFound}
        id={props.id}
        alt={props.title}
        name={props.field}
        readOnly={props.readonly}
        style={style}
      />
    </div>
  );
};

export default ImageBox;
