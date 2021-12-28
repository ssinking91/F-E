import styled from "styled-components";
import Main3Card from "./Main3Card";
import NavBar2 from "./NavBar2";
const Section03 = (props) => {
  return (
    <>
      <div className="section num3" style={{ width: "100%", height: "900px" }}>
        <NavBar2 />
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
              요즘 뜨고 있는 청약은?
            </span>
            <span style={{ fontSize: "36px" }}>👀</span>
          </span>
          <span
            style={{
              fontSize: "16px",
              color: "#677385",
              height: "22px",
              lineHeight: "22px",
              marginBottom: "30px",
            }}
          >
            사람들이 가장 눈여겨보는 청약순으로 조회/관심/매매 총 합으로
            나뉘어진 청약 정보예요.
          </span>
        </SectionWrap>
        <CardWrap>
          <Main3Card />
          <Main3Card />
          <Main3Card />
          <Main3Card />
        </CardWrap>
      </div>
    </>
  );
};

export default Section03;

const SectionWrap = styled.div`
  width: 100%;
  height: 135px;
  background-color: #f9f9f9;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const CardWrap = styled.div`
  width: 1000px;
  height: 420px;
  display: flex;
  justify-content: space-between;
  margin: 0px auto;
`;
