import React, { useState } from "react";
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks';
import { useSelector, useDispatch } from "react-redux";
import {
  Select,
  InputLabel,
  FormControl,
  MenuItem,
  Grid
} from "@material-ui/core";
 import {GET_CUSTOM} from 'data/graphql'

const SelectDrop = props => {
  const [dados, setDados] = useState([])
  // const dispatch = useDispatch();
  console.log('props', props.queryApi)
  const { data, loading } = useQuery(GET_CUSTOM( {dados: props.queryApi}));

  if (props.options !== null && dados.length === 0) {
    setDados(JSON.parse([props.options]));
  } else {
    if (data !== undefined && data !== null && dados.length === 0){
      let obj = Object.keys(data).map(_ => data[_]);
      setDados(obj[0].nodes);
    }
  }

  return (
    <Grid item md={props.widthMd}>
      <FormControl fullWidth style={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">{props.title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          // onChange={handleChange}
        >
          {dados !== null &&
            dados.length > 0 &&
            dados.map((v, i) => {
              let obj = Object.keys(v).map(_ => v[_]);
              return (
                <MenuItem value={obj[0]} key={i}>
                  {obj[1]}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default SelectDrop;
