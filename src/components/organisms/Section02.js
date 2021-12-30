import styled from "styled-components";
import { Text, Button } from "../atoms/index";
import Main2Card from "./Main2Card";
import NavBar from "./NavBar";
import NavBar2 from "./NavBar2";
const Section02 = (props) => {
  return (
    <>
      <NavBar />
      <div
        className="section num2"
        style={{ width: "100%", height: "1000px", paddingTop: "80px" }}
      >
        <SectionWrap>
          <span
            style={{
              margin: "30px auto 10px",
              height: "43px",
              lineHeight: "43px",
            }}
          >
            <span
              style={{ fontSize: "36px", fontWeight: "bold", color: "#333333" }}
            >
              000님의 관심 지역 청약은?
            </span>
            <span style={{ fontSize: "36px" }}>📌</span>
          </span>
          <span
            style={{
              fontSize: "16px",
              color: "#778899",
              height: "22px",
              lineHeight: "22px",
              marginBottom: "20px",
            }}
          >
            000님이 선택한 관심 지역의 실시간 청약 정보를 알 수 있어요 :)
          </span>
          <Text size="16px" color="#778899"></Text>
          <Button
            margin="0 auto 30px auto"
            padding="8px 15px"
            background_color="#20D7FF"
            color="#FFFFFF"
          >
            관심지역
          </Button>
        </SectionWrap>
        <CardWrap>
          <PublicCards>
            <span
              style={{
                fontWeight: "bold",
                fontSize: "12px",
                height: "20px",
                lineHeight: "22px",
                color: "#20D7FF",
              }}
            >
              공공분양
            </span>
            <Main2Card />
            <Main2Card />
            <Main2Card />
          </PublicCards>

          <PrivateCards>
            <span
              style={{
                fontWeight: "bold",
                fontSize: "12px",
                height: "20px",
                lineHeight: "22px",
                color: "#20D7FF",
              }}
            >
              민간분양
            </span>
            <Main2Card />
            <Main2Card />
            <Main2Card />
          </PrivateCards>
        </CardWrap>
      </div>
    </>
  );
};
const SectionWrap = styled.div`
  width: 100%;
  height: 185px;
  background-color: #f9f9f9;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const CardWrap = styled.div`
  width: 1000px;
  height: 500px;
  margin: 0px auto;
  display: flex;
  flex-wrap: wrap;
`;

const PublicCards = styled.div`
  width: 460px;
  height: 500px;
  margin-right: 80px;
  display: flex;
  flex-direction: column;
  & :not(:last-child) {
    margin-bottom: 20px;
  }
`;
const PrivateCards = styled.div`
  width: 460px;
  height: 500px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  & :not(:last-child) {
    margin-bottom: 20px;
  }
`;
export default Section02;
