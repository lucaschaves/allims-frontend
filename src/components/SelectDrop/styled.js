import styled from "styled-components";

const Select = styled.select`
  color: black;
  font-size: 1.3em;
  border: 1px solid #DCDCDC;
  border-radius: 3px;
  /* margin: ${props => props.size}; */
  margin: 10px 0px 5px 10px;
  padding: 10px 5px 5px 15px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export default Select