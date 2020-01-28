import React, { useState } from "react";
import { Grid, TextField } from "@material-ui/core";

const GenericInput = props => {
  const [data, setData] = useState(props.default ? props.default : "");

  const handleChange = e => {
    setData(e.value);
  };

  return (
    <Grid item md={props.widthMd}>
      <TextField
        id={props.id}
        name={props.name}
        label={props.title}
        fullWidth
        autoComplete="none"
      />
    </Grid>
  );
};

export default GenericInput;
