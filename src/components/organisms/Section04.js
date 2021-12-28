import { Text } from "../atoms/index";
import styled from "styled-components";

const Section04 = (props) => {
  return (
    <>
      <div className="section num4">
        <SectionWrap>
          <Text size="36px" color="#333333" margin="30px auto 10px auto" bold>
            영상으로 배우는 청약 노하우✨
          </Text>
          <Text size="16px" color="#778899" margin="0px auto 20px auto">
            청약 관련 정보를 담은 영상을 추천해드릴게요.
          </Text>
        </SectionWrap>
      </div>
    </>
  );
};

export default Section04;

const SectionWrap = styled.div`
  margin-top: 118px;
  width: 100%;
  background-color: #f9f9f9;
  text-align: center;
  position: absolute;
`;
