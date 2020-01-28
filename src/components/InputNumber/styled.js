import styled from 'styled-components';

const Input = styled.input.attrs((props, data) => ({
  id: props.id,
  name: props.field,
  placeholder: props.name,
  type: props.sysTypeByIdTypeOption.name
    ? props.sysTypeByIdTypeOption.name
    : 'text',
  size: props.max || '1em',
  placeholder: props.placeholder ? props.placeholder : props.title,
  value: data,
}))`
  color: black;
  font-size: 1.3em;
  border: 1px solid #DCDCDC;
  border-radius: 3px;
  margin: ${props => props.size};
  padding-top: 10px; /*${props => props.size};*/
  padding-left: 0px;
  padding-right: 5px;
  padding-bottom: 5px;
`;

export default Input;
