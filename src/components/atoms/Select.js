import React from "react";
import styled from "styled-components";

const SelectBox = (props) => {
  // state 사용
  const [selected, setSelected] = React.useState("");
  // event handler
  const handleChange = (e) => {
    console.log(e.target.value);
    setSelected(e.target.value);
  };
  return (
    <Select onChange={handleChange}>
      {props.options.map((option) => (
        <Option
          key={option.value}
          value={option.value}
          defaultValue={props.defaultValue === option.value}
        >
          {option.name}
        </Option>
      ))}
    </Select>
  );
};

const Select = styled.select`
  margin: 0;
  min-width: 0;
  display: block;
  width: 121px;
  height: 35px;
  padding: 8px 12px;
  font-size: 14px;
  line-height: 25px;
  border: none;
  border-color: #20d7ff;
  border-radius: 4px 4px 4px 4px;
  color: #333333;
  font-weight: bold;
  background-color: transparent;
  border-bottom: 1px solid #e3e5eb;
  &:focus {
    border: 1px solid #20d7ff;
    border-radius: 4px 4px 4px 4px;
  }
`;

const Option = styled.option`
  color: #20d7ff;
  background-color: transparent;
  border-radius: 0px 0px 19px 19px;
  background-color: transparent;
  &:hover {
    color: #20d7ff;
    background-color: transparent;
  }
`;

function Selection(props) {
  // option을 SeletBox의 props로 내려주기
  console.log(props.options);
  return (
    <SelectBox options={props.options} defaultValue="서울특별시"></SelectBox>
  );
}

export default Selection;
