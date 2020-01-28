import React from "react";
import { Grid, Button, IconButton } from "@material-ui/core";
import { Delete, Save, Cancel } from "@material-ui/icons";

import {
  SelectDrop,
  CheckboxGroup,
  Textarea,
  RadioGroup,
  InputCheckbox,
  ImageBox,
  InputFile,
  InputNumber,
  GenericInput
} from "components";

const RenderChildForm = props => {

  let elements = [];

  Object.entries(props).forEach(([key, value]) => {
    if (key > 0) {
      if (value.sysTypeByIdType.name === "input") {
        switch (value.sysTypeByIdTypeOption.name) {
          case "number":
            elements.push(<InputNumber {...value} key={value.id} />);
            break;
          case "checkbox":
            elements.push(<InputCheckbox {...value} key={value.id} />);
            break;
          case "file":
            elements.push(<InputFile {...value} key={value.id} />);
            break;
          case "image":
            elements.push(<ImageBox {...value} key={value.id} />);
            break;
          default:
            elements.push(<GenericInput {...value} key={value.id} />);
        }
      }
      if (value.sysTypeByIdType.name === "radiogroup") {
        elements.push(<RadioGroup {...value} key={value.id} />);
      }
      if (value.sysTypeByIdType.name === "checkgroup") {
        elements.push(<CheckboxGroup {...value} key={value.id} />);
      }
      if (value.sysTypeByIdType.name === "textarea") {
        elements.push(<Textarea {...value} key={value.id} />);
      }
      if (value.sysTypeByIdType.name === "select") {
        elements.push(<SelectDrop {...value} key={value.id} />);
      }
    }
  });
  return elements;
};

export default RenderChildForm;
