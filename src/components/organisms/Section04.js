import styled from "styled-components";
import NavBar2 from "./NavBar2";
import { ReactComponent as Top } from "../../images/top.svg";
const Section04 = (props) => {
  return (
    <>
      <div className="section num4">
        <NavBar2 />
        <SectionWrap>
          <span
            style={{
              margin: "0px auto 10px",
              height: "43px",
              lineHeight: "43px",
            }}
          >
            <span
              style={{ fontSize: "36px", fontWeight: "bold", color: "#333333" }}
            >
              영상으로 배우는 청약 노하우
            </span>
            <span style={{ fontSize: "36px" }}>✨</span>
          </span>
          <span
            style={{
              fontSize: "16px",
              color: "#778899",
              height: "22px",
              lineHeight: "22px",
            }}
          >
            청약 관련 정보를 담은 영상을 추천해드릴게요.
          </span>
        </SectionWrap>
        <CardWraps>
          <Card>
            <iframe
              width="489"
              height="275"
              src="https://www.youtube.com/embed/nEtiX7nN9qE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Card>
          <Card>
            <iframe
              width="489"
              height="275"
              src="https://www.youtube.com/embed/Ibz6iWmjYHo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Card>
        </CardWraps>

        <Atag
          href="/#page1"
          style={{ width: "36px", height: "31px", margin: "0px auto 50px" }}
        >
          <Top />
        </Atag>
        <hr style={{ marginBottom: "30px " }} />
        <span
          style={{
            width: "311px",
            height: "20px",
            marginLeft: "220px",
            lineHeight: "68px",
            fontSize: "12px",
            color: "#95A1BB",
          }}
        >
          ⓒ.ZIP.All rights reserved.
        </span>
      </div>
    </>
  );
};

export default Section04;
const Atag = styled.a`
  margin: auto;
  display: block;
`;

const SectionWrap = styled.div`
  width: 100%;
  height: 135px;
  background-color: #f9f9f9;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 80px auto 100px;
`;

const CardWraps = styled.div`
  width: 998px;
  height: 275px;
  display: flex;
  justify-content: space-between;
  margin: 0px auto 139px;
`;

const Card = styled.div`
  width: 489px;
  height: 275px;
`;
