// import KakaoMap from "../utilities/KakaoMap";
import styled from "styled-components";
import NavBar2 from "../organisms/NavBar2";
// import { Text, Button } from "../atoms/index";
import defaultImage from "../../images/defaultImage.png";

export default function Detail() {
  return (
    <>
      <NavBar2 />
      <Grid>
        <Image
          shape="default"
          width="600px"
          height="600px"
          margin="0 25px 0 0 "
        ></Image>
        <DetailInfo>
          <div style={{ margin: "10px 0px" }}>
            <MainBoldText style={{ color: "#20D7FF", display: "inline" }}>
              공고중
            </MainBoldText>
            <MainBoldText
              style={{
                color: "#20D7FF",
                display: "inline",
                margin: "0px 10px",
              }}
            >
              |
            </MainBoldText>
            <MainBoldText style={{ display: "inline" }}>공공분양</MainBoldText>
          </div>
          <Title>신림 파라곤 더밀리안</Title>
          <DetailInfoDiv>
            <MainBoldText>주소</MainBoldText>
            <MainText>강원도 고성군 토성면 봉포리 258-9 외 8필지</MainText>
          </DetailInfoDiv>
          <DetailInfoDiv>
            <MainBoldText>세대 수</MainBoldText>
            <MainText>219 세대</MainText>
          </DetailInfoDiv>
          <DetailInfoDiv>
            <MainBoldText>전용 면적</MainBoldText>
            <MainText>84㎡ ~ 116㎡ / 60㎡ ~ 85㎡</MainText>
          </DetailInfoDiv>
          <DetailInfoDiv>
            <MainBoldText>분양 가격</MainBoldText>
            <MainText>54,470 ~ 72,670 만원</MainText>
          </DetailInfoDiv>
          {/* 한번 나누기 */}
          <DetailInfoDiv style={{ margin: "35px 0 0 0" }}>
            <MainBoldText>모집 공고일</MainBoldText>
            <MainText>2021.12.10</MainText>
          </DetailInfoDiv>
          <DetailInfoDiv>
            <MainBoldText>청약 기간</MainBoldText>
            <MainText>2021.12.12 ~ 2021.12.15</MainText>
          </DetailInfoDiv>
          <DetailInfoDiv>
            <MainBoldText>특별 접수</MainBoldText>
            <MainText>2021.12.15</MainText>
          </DetailInfoDiv>
          <DetailInfoDiv>
            <MainBoldText>1순위 접수일</MainBoldText>
            <MainText>2021.12.16</MainText>
          </DetailInfoDiv>
          <DetailInfoDiv>
            <MainBoldText>2순위 접수일</MainBoldText>
            <MainText>2021.12.17</MainText>
          </DetailInfoDiv>
          <DetailInfoDiv>
            <MainBoldText>당첨자 발표일</MainBoldText>
            <MainText>2022.01.21</MainText>
          </DetailInfoDiv>
          <DetailInfoDiv>
            <MainBoldText>당첨자 계약일</MainBoldText>
            <MainText>2022.02.12</MainText>
          </DetailInfoDiv>
          <DetailInfoDiv>
            <MainBoldText>분양 문의</MainBoldText>
            <MainText>02) 000 - 0000</MainText>
          </DetailInfoDiv>
        </DetailInfo>
      </Grid>
      {/* <KakaoMap /> */}
    </>
  );
}
const Image = styled.div`
  width: 600px;
  height: 600px;
  background-image: url("${defaultImage}");
  background-size: cover;
  margin: 0 50px 0 0;
`;
const Grid = styled.div`
  width: 1200px;
  display: flex;
  margin: 80px auto 0 auto;
`;

const DetailInfo = styled.div`
  width: 550px;
`;
const Title = styled.p`
  font-size: 36px;
  font-weight: 800;
  height: 43px;
  margin: 0 0 50px 0;
`;
const MainBoldText = styled.span`
  font-size: 14px;
  font-weight: bold;
  width: 140px;
  height: 25px;
  display: inline-block;
`;
const MainText = styled.span`
  font-size: 14px;
  width: 100%;
  height: 25px;
`;
const DetailInfoDiv = styled.div`
  margin: 5px 0;
`;
