import { Text, Button } from "../atoms/index";
import styled from "styled-components";
import Main3Card from "./Main3Card"
const Section03 = (props) => {
  return (
    <>
      <div className="section num3">
        <SectionWrap>
          <Text size="36px" color="#333333" margin="30px auto 10px auto" bold>
            요즘 뜨고 있는 청약은?👀
          </Text>
          <Text size="16px" color="#778899" margin="0px auto 20px auto">
            사람들이 가장 눈여겨보는 청약순으로 조회/관심/매매 총 합으로
            나뉘어진 청약 정보예요.
          </Text>
          <Button
            margin="0 auto 30px auto"
            padding="8px 15px"
            background_color="#20D7FF"
            color="#FFFFFF"
          >
            전체리스트 보기
          </Button>
        </SectionWrap>
        <Main3Card/>
      </div>
    </>
  );
};

export default Section03;

const SectionWrap = styled.div`
  margin-top: 118px;
  width: 100%;
  background-color: #f9f9f9;
  text-align: center;
  
`;
