import styled from "styled-components";
import NavBar2 from "./NavBar2";
import Footer from "./Footer";
import { ReactComponent as Top } from "../../images/top.svg";
const Section04 = (props) => {
  return (
    <>
      <div className="section num4">
        <NavBar2 />
        <SectionWrap>
          <span
            style={{
              marginBottom: "18px",
              height: "43px",
              lineHeight: "43px",
              fontSize: "36px"
            }}
          >
            <span
              style={{ fontWeight: "bold", color: "#333333" }}
            >
              영상으로 배우는 청약 노하우
            </span>
            <span>✨</span>
          </span>
          <span
            style={{
              fontSize: "18px",
              color: "#A5AAB6",
              height: "25px",
              lineHeight: "25px",
            }}
          >
            청약 관련 정보를 담은 영상을 추천해드릴게요.
          </span>
        </SectionWrap>
        <CardWraps>
          <Card>
            <iframe
              width="595"
              height="337"
              src="https://www.youtube.com/embed/nEtiX7nN9qE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Card>
          <Card>
            <iframe
              width="595"
              height="337"
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
        </div>
        <Footer />
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
  height: 86px;
  background-color: #f9f9f9;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 80px auto 80px;
`;

const CardWraps = styled.div`
  width: 1200px;
  height: 337px;
  display: flex;
  justify-content: space-between;
  margin: 0px auto 171px;
`;

const Card = styled.div`
  width: 595px;
  height: 337px;
`;
