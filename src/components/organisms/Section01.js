import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Grid, Text, Button } from "../atoms/index";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as mainAction } from "../redux/modules/main";
import { ReactComponent as Scroll } from "../../images/scroll.svg";
import mainBackgroundImage from "../../images/mainBackgroundImage.jpg";
import NavBarAnchor from "./NavBarAnchor";

const Section01 = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mainAction.getTotalDB());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 청약 총 갯수
  const infoNum = useSelector((state) => state.main.total);
  const totalNum = infoNum.total;

  return (
    <>
      <div
        className="section num1"
        style={{
          backgroundImage: `url(${mainBackgroundImage})`,
          backgroundSize: "cover",
        }}
      >
        <NavBarAnchor />
        <Hr />

        <Background>
          <TitleSectionWrap>
            <Text h1 color="#fff">
              집을 모아놓다.zip
            </Text>
            <Text h2 color="#fff" margin="15px 0 60px 0">
              당신을 위한 청약 정보가{" "}
              <span style={{ color: "#fff", borderBottom: "3px solid #fff" }}>
                {totalNum}개
              </span>{" "}
              모여있어요
            </Text>
            <Button background_color="#20d7ff" padding="13px 21px">
              <Text h3 color="#fff">
                <Link to="/list">청약 리스트 보러가기</Link>
              </Text>
            </Button>
            <Grid width="236px" margin="280px auto 30px auto">
              <Text h4 color="#20d7ff">
                나만의 맞춤 청약을 확인하려면 아래로 스크롤 해주세요
              </Text>
            </Grid>
            <Scroll width="20px" height="10px" />
          </TitleSectionWrap>
        </Background>
      </div>
    </>
  );
};
const Hr = styled.div`
  border-top: 1px solid #e3e5eb;
`;
const TitleSectionWrap = styled.div`
  margin-top: 178px;
  width: 100%;
  text-align: center;
`;
const Background = styled.div``;

export default Section01;
