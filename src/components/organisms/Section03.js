import styled from "styled-components";
import Main3Card from "./Main3Card";
import NavBarAnchor from "./NavBarAnchor";
const Section03 = (props) => {
  return (
    <>
      <div className="section num3" style={{ width: "100%", height: "900px" }}>
        <NavBarAnchor />
        <SectionWrap>
          <SectionItem>
            <span
              style={{
                margin: "0px auto 18px",
                height: "43px",
                lineHeight: "43px",
                fontSize: "36px",
              }}
            >
              <span
                style={{
                  fontWeight: "bold",
                  color: "#333333",
                }}
              >
                요즘 뜨고 있는 청약은?
              </span>
              <span>👀</span>
            </span>
            <span
              style={{
                fontSize: "18px",
                color: "#A5AAB6",
                height: "25px",
                lineHeight: "25px",
              }}
            >
              사람들이 가장 눈여겨보는 청약순으로 조회/관심/매매 총 합으로
              나뉘어진 청약 정보예요.
            </span>
          </SectionItem>
          <CardWrap>
            <Main3Card />
            <Main3Card />
            <Main3Card />
          </CardWrap>
        </SectionWrap>
      </div>
    </>
  );
};

export default Section03;

const SectionWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
`;

const SectionItem = styled.div`
  width: 800px;
  height: 86px;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 70px auto;
`;

const CardWrap = styled.div`
  width: 1200px;
  height: 593px;
  display: flex;
  justify-content: space-between;
  margin: 0px auto;
`;
