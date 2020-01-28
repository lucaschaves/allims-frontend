import React from 'react';

import { Typography, FormHelperText } from '@material-ui/core';

const Fieldset = props => {
  return (
    <Typography
      variant="h6"
      gutterBottom
      key={props.id}
      style={{
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
      }}
    >
      {props.title}
      <FormHelperText>{props.children}</FormHelperText>
    </Typography>
  );
};

export default Fieldset;
