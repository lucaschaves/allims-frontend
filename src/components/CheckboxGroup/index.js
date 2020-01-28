import React, { useState } from "react";

import { InputCheckbox } from "components";

const CheckboxGroup = props => {
  const [data] = useState(props.options ? props.options : []);
  return (
    <div className={`label-input ${props.hidden ? "hidden" : ""}`}>
      <label>{props.title}</label>
      {data.length > 0 &&
        data.map((option, index) => (
          <InputCheckbox
            {...option}
            key={index}
            field={props.field}
            group={true}
          />
        ))}
    </div>
  );
};

export default CheckboxGroup;
