import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { Div, Fieldset, RenderChildForm } from "components";

const RenderForm = (props, form) => {
  let element = form;
  let continua = true;
  let objP = [];
  Object.entries(props).forEach(([key, value]) => {
    if (value.path === "") {
      objP.push(key);
    }
  });

  props.map(v => {
    let obj = [];
    if (v.path === "") {
      obj.push(v);
      continua = true;
      props.map((e, s) => {
        if (s == objP[1]) {
          continua = false;
        }
        if (s > objP[0] && continua) {
          obj.push(e);
        }
      });
      objP.splice(0, 1);
    }

    if (obj.length > 0) {
      if (obj[0].sysTypeByIdType.name === "fieldset") {
        element.push(
          <Paper elevation={3} style={{ marginTop: 20, marginBottom: 10 }}>
            <Fieldset title={obj[0].title} key={obj[0].name}>
              <Grid container spacing={2}>
                {RenderChildForm(obj)}
              </Grid>
            </Fieldset>
          </Paper>
        );
      } else if (obj[0].sysTypeByIdType.name === "div") {
        element.push(
          <Paper elevation={3} style={{ marginTop: 20, marginBottom: 10 }}>
            <Div key={obj[0].sysTypeByIdType.name}>
              <Grid container spacing={2}>
                {RenderChildForm(obj)}
              </Grid>
            </Div>
          </Paper>
        );
      }
    }
  });

  return element;
};

export default RenderForm;
