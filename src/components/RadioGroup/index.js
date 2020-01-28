import React, { useState } from "react";
import { RadioButtonChecked, RadioButtonUnchecked } from "@material-ui/icons";

import "./style.css";

const RadioGroup = props => {
  const [data] = useState(props.options ? props.options : []);
  const [status, setStatus] = useState();

  return (
    <div className={`label-input ${props.hidden ? "hidden" : ""}`}>
      <label>{props.title}</label>
      {data.length > 0 &&
        data.map((option, index) => (
          <div className="form-group" key={index}>
            <label>
              <input
                type="radio"
                name={props.field}
                value={option.id}
                onChange={e => setStatus(option.id)}
              />
              {status === option.id ? (
                <RadioButtonChecked />
              ) : (
                <RadioButtonUnchecked />
              )}
              {option.name}
            </label>
          </div>
        ))}
    </div>
  );
};

export default RadioGroup;
