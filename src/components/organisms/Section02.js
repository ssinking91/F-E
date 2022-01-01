import styled from "styled-components";
import Main2Card from "./Main2Card";
import NavBar2 from "./NavBar2";
// import NavBar2 from "./NavBar2";

const Section02 = (props) => {
  return (
    <>
      <div className="section num2" style={{ width: "100%", height: "100" }}>
        <NavBar2 />
        <SectionWrap>
          <SectionItem>
            <span
              style={{
                height: "43px",
                lineHeight: "43px",
                fontSize: "36px",
                marginBottom: "18px",
              }}
            >
              <span
                style={{
                  fontWeight: "bold",
                  color: "#20D7FF",
                }}
              >
                인천광역시 강화군
              </span>
              <span
                style={{
                  fontWeight: "bold",
                  color: "#333333",
                }}
              >
                의 청약은?
              </span>
              <span>📌</span>
            </span>
            <span
              style={{
                fontSize: "16px",
                color: "#778899",
                height: "22px",
                lineHeight: "22px",
              }}
            >
              000님이 선택한 관심 지역의 실시간 청약 정보를 알 수 있어요
            </span>
          </SectionItem>

          <CardWrap>
            <PublicCards>
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "12px",
                  width: "167px",
                  height: "24px",
                  lineHeight: "25px",
                  color: "#778899",
                }}
              >
                공공 분양
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
                  width: "167px",
                  height: "24px",
                  lineHeight: "25px",
                  color: "#778899",
                }}
              >
                민간분양
              </span>
              <Main2Card />
              <Main2Card />
              <Main2Card />
            </PrivateCards>
          </CardWrap>
        </SectionWrap>
      </div>
    </>
  );
};
const SectionWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
`;

const SectionItem = styled.div`
  width: 600px;
  height: 86px;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 80px auto;
`;

const CardWrap = styled.div`
  width: 1200px;
  height: 606px;
  margin: 0px auto;
  display: flex;
  flex-wrap: wrap;
`;

const PublicCards = styled.div`
  width: 595px;
  height: 606px;
  margin-right: 5px;
  display: flex;
  flex-direction: column;
  & > :not(:last-child) {
    margin-bottom: 20px;
  }
`;
const PrivateCards = styled.div`
  width: 595px;
  height: 606px;
  margin-right: 5px;
  display: flex;
  flex-direction: column;
  & > :not(:last-child) {
    margin-bottom: 20px;
  }
`;
export default Section02;
