import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  getPublicListMapDB,
  getPrivateListMapDB,
  saveState,
} from "../redux/modules/map";
import arrowUp from "../../images/arrow_up.svg";
import arrowDown from "../../images/arrow_down.svg";

const Dropdown = (props) => {
  const dispatch = useDispatch();
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
  const getClickOne = (item) => {
    dispatch(saveState(item));
  };
  const getDB = (item) => {
    console.log(item);
    dispatch(getPublicListMapDB(item));
    dispatch(getPrivateListMapDB(item));
  };
  return (
    <DropdownContainer props={props}>
      <DropdownBody onClick={onActiveToggle} isActive={isActive}>
        {item ? (
          <>
            <DropdownSelect isActive={isActive}>{item}</DropdownSelect>
            <Image isActive={isActive} />
          </>
        ) : (
          <>
            <DropdownSelect isActive={isActive}>{props.name}</DropdownSelect>
            <Image isActive={isActive} />
          </>
        )}
      </DropdownBody>
      <DropdownMenu isActive={isActive}>
        {props.options.map((item) => (
          <DropdownItemContainer
            id={item.value}
            key={item.value}
            onClick={() => {
              console.log(item);
              onSelectItem(item.value);
              getClickOne(item);
              getDB(item.value);
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
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

const DropdownBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-bottom:${(props) => (props.isActive ? `` : `1px solid #E3E5EB`)}; */
  border: ${(props) => (props.isActive ? `1px solid #E3E5EB` : ``)};
  border-radius: ${(props) => (props.isActive ? `19px 19px 0 0;` : ``)};
`;

const DropdownSelect = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 25px;
  width: 80px;
  height: 35px;
  padding: 8px 0px 8px 0px;
  margin-left: 18px;
  border-bottom: ${(props) => (props.isActive ? `` : `1px solid #E3E5EB`)};
  text-align: ${(props) => (props.isActive ? `` : `center`)};
`;

const Image = styled.div`
  width: 13px;
  height: 13px;
  background-image: url("${(props) => (props.isActive ? arrowUp : arrowDown)}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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

  padding: 8px 12px 8px 25px;
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
