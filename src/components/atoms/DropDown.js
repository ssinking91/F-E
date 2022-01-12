import React, { useState, useRef } from "react";
import styled from "styled-components";

const Dropdown = (props) => {
    const [isActive, setIsActive] = React.useState(false);
    const [item, setItem] = React.useState(null);
   let itemRef = useRef();
   let itemNameRef = useRef();

    const onActiveToggle = React.useCallback(() => {
      setIsActive((prev) => !prev);
    }, []);

    const onSelectItem = React.useCallback((e) => {
      const targetId = e.target.id;
        console.log(e.target.value);
      if (targetId === "itemName") {
        console.log(itemNameRef);
        console.log(itemNameRef.current.value);
        // console.log(e.target);
        // console.log(e.target.value);
        // console.log(e.target.parentElement.innertText);
        setItem(e.target.parentElement.innertText);
        setItem(targetId);
      } 
      else if (targetId === "item") {
        console.log(itemRef);
        console.log(itemRef.current.value);
        // console.log(e.target);
        // console.log(e.target.value);
        // console.log(e.target.innertText);
        setItem(e.target.innertText);
      }
  
      setIsActive((prev) => !prev);
    }, []);
    //console.log(item);

    window.setTimeout(() => { // 1초 뒤에는?!
      console.log(item);
    }, 1000);

    return (
      <DropdownContainer>
        <DropdownBody onClick={onActiveToggle} isActive={isActive}>
          {item ? (
            <>
              <DropdownSelect>{item}</DropdownSelect>
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
            <DropdownItemContainer id={item.value} key={item.value} value={item.value} onClick={onSelectItem} ref={itemRef}>
              <ItemName id={item.value} value={item.value} ref={itemNameRef}>{item.name}</ItemName >
            </DropdownItemContainer>
          ))}
        </DropdownMenu>
      </DropdownContainer>
    );
  };
  
  const DropdownContainer = styled.div`
  width: 121px;

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
  border-bottom:${(props) => (props.isActive ? `` : `1px solid #E3E5EB`)};
`;

const DropdownMenu = styled.ul`
  display: ${(props) => (props.isActive ? `block` : `none`)};
  width: 121px;
  background-color: white;
  position: absolute;
  border: 1px solid #E3E5EB;
  border-radius: 0 0 19px 19px;
  border-top: none;
`;

const DropdownItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 8px 12px;
  border-top: none;

  &:last-child {
    border-bottom: none; 
  }
  &:hover {
    color: #20D7FF; 
  }
`;

const ItemName = styled.p`
  font-weight: bold;
  font-size: 14px;
`;

  export default Dropdown;