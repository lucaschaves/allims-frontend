import React, { useState } from "react";
import { CheckBox, CheckBoxOutlineBlank } from "@material-ui/icons";

import "./style.css";

const InputCheckbox = props => {
  const [status, setStatus] = useState(props.default ? props.default : false);

  return (
    <div className="form-group">
      <label>
        <input
          type="checkbox"
          id={props.id}
          name={props.group ? props.field + "[]" : props.field}
          required={props.required ? "required" : ""}
          value={props.id}
          onChange={e => setStatus(e.target.checked)}
        />
        {status ? <CheckBox /> : <CheckBoxOutlineBlank />}
        {props.name}
      </label>
    </div>
  );
};

export default InputCheckbox;
