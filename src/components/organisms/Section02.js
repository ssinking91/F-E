import styled from "styled-components";
import { Text, Button } from "../atoms/index";
import Main2Card from "./Main2Card"
const Section02 = (props) => {
  return (
    <>
      <div className="section num2">
        <SectionWrap>
          <Text size="36px" color="#333333" margin="30px auto 10px auto" bold>
            000님의 관심 지역 청약은?📌
          </Text>
          <Text size="16px" color="#778899" margin="0px auto 20px auto">
            000님이 선택한 관심 지역의 실시간 청약 정보를 알 수 있어요 :)
          </Text>
          <Button
            margin="0 auto 30px auto"
            padding="8px 15px"
            background_color="#20D7FF"
            color="#FFFFFF"
          >
            관심지역
          </Button>
        </SectionWrap>
        <Main2Card/>
      </div>
    </>
  );
};
const SectionWrap = styled.div`
  margin-top: 118px;
  width: 100%;
  background-color: #f9f9f9;
  text-align: center;
`;

export default Section02;
