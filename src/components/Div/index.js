import React from "react";

const Div = props => {
  const style = {
    width: props.width ? props.width + "rem" : "auto",
    height: props.height ? props.height + "rem" : "auto",
    display: "block"
  };
  return <div style={style}>{props.children}</div>;
};

export default Div;
