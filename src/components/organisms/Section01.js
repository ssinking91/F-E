import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Grid, Text } from "../atoms/index";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as mainAction } from "../redux/modules/main";
import { ReactComponent as Scroll } from "../../images/scroll.svg";
import mainBackgroundImage from "../../images/mainBackgroundImage.jpg";
import home1 from "../../images/home1.jpg";
import home2 from "../../images/home2.jpg";
import home3 from "../../images/home3.jpg";
import home4 from "../../images/home4.jpg";

const Section01 = (props) => {
  const dispatch = useDispatch();
  //일정시간 간격으로 이미지 변환,전환 시키기 useRef(),setInterval() 사용
  const imageSection = React.useRef();
  let imageArray = [mainBackgroundImage, home1, home2, home3, home4];
  let imageCount = 0;

  useEffect(() => {
    dispatch(mainAction.getTotalDB());

    setInterval(imageChange, 3000); // 3초마다 imageChange 반복 실행
  }, []);

  const imageChange = () => {
    if(imageSection.current === null){
      return clearInterval(imageChange);//함수 종류
    };

    imageCount < 4 ? imageCount++ : (imageCount = 0);
    imageSection.current.style.backgroundImage = `url(${imageArray[imageCount]})`;
  };

  // 청약 총 갯수
  const infoNum = useSelector((state) => state.main.total);
  const totalNum = infoNum.total;

  return (
    <>
      <div
        className="section"
        ref={imageSection}
        style={{
          backgroundImage: `url(${imageArray[0]})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundposition: "center",
          paddingTop: "97px",
          backgroundColor: "#f9f9f9",
          transition: "all 1s",
        }}
      >
        {/* <NavBarAnchor />/ */}
        <Hr />

        <Background>
          <TitleSectionWrap>
            <Text h1 color="#fff">
              집을 모아놓다.zip
            </Text>
            {localStorage.getItem("userName") ? (
              <Text h2 color="#fff" margin="15px 0 60px 0">
                {localStorage.getItem("userName")}님을 위한 정보가{" "}
                <span style={{ color: "#fff", borderBottom: "3px solid #fff" }}>
                  {totalNum}개
                </span>{" "}
                모여있어요.
              </Text>
            ) : (
              <Text h2 color="#fff" margin="15px 0 60px 0">
                당신을 위한 청약 정보가 {totalNum}개 모여있어요.
              </Text>
            )}
            <Button >
              <Text h3 color="#fff">
                <Link to="/list">청약 리스트 보러가기</Link>
              </Text>
            </Button>
            <Grid width="236px" margin="280px auto 30px auto">
              <Text h4 color="#20d7ff">
                나만의 맞춤 청약을 확인하려면 아래로 스크롤 해주세요.
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
  margin-top: 278px;
  width: 100%;
  text-align: center;
`;
const Background = styled.div``;

const Button = styled.button`
  background-color: #20d7ff;
  width: 260px;
  height: 48px;
  border-radius: 23px;
  border: none;
`;
export default Section01;
