import React from "react";
import styled from "styled-components";

const Dropdown = (props) => {
  const [isActive, setIsActive] = React.useState(false);
  const [item, setItem] = React.useState(null);

  const onActiveToggle = () => {
    setIsActive(!isActive);
  };

  const onSelectItem = (e) => {
    setItem(e);
    props.sidoChange(e);
    setIsActive(!isActive);
  };
  
    console.log(item);

  return (
    <DropdownContainer props={props}>
      <DropdownBody onClick={onActiveToggle} isActive={isActive}>
        {item ? (
          <>
            <DropdownSelect isActive={isActive}>{item}</DropdownSelect>
          </>
        ) : (
          <>
            <DropdownSelect isActive={isActive}>관심지역</DropdownSelect>
            {/* <AiOutlineDown /> */}
          </>
        )}
      </DropdownBody>
      <DropdownMenu isActive={isActive}>
        {props.options.map((item) => (
          <DropdownItemContainer
            id={item.value}
            key={item.value}
            onClick={() => {
              onSelectItem(item.value);
            }}
          >
            <ItemName
              id={item.value}
              onClick={() => {
                onSelectItem(item.value);
              }}
            >
              {item.name}
            </ItemName>
          </DropdownItemContainer>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  width: 121px;
  position:relative;
 
  &:hover {
    cursor: pointer;
  }
`;

const DropdownBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border-bottom:${(props) => (props.isActive ? `` : `1px solid #E3E5EB`)}; */
  border: ${(props) => (props.isActive ? `1px solid #E3E5EB` : ``)};
  border-radius: ${(props) => (props.isActive ? `19px 19px 0 0;` : ``)};
`;

const DropdownSelect = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 25px;
  width: 97px;
  height: 35px;
  padding: 8px 12px;
  border-bottom: ${(props) => (props.isActive ? `` : `1px solid #E3E5EB`)};
`;

const DropdownMenu = styled.ul`
  display: ${(props) => (props.isActive ? `block` : `none`)};
  width: 121px;
  background-color: white;
  position: absolute;
  border: 1px solid #e3e5eb;
  border-radius: 0 0 19px 19px;
  border-top: none;
`;

const DropdownItemContainer = styled.li`
  display: flex;
  align-items: center;

  padding: 8px 12px;
  border-top: none;

  &:last-child {
    border-bottom: none;
  }
  &:hover {
    color: #20d7ff;
  }
`;

const ItemName = styled.p`
  font-weight: bold;
  font-size: 14px;
`;

export default Dropdown;
