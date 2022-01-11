import styled from "styled-components";

export default function AsideSection() {
  return (
    <>
      <Wrap>
        <ContentArea>컴포넌트 영역입니다.</ContentArea>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  width: 400px;
  height: 100vh;
  position: relative;
  right: 0;
  background-color: #f5f5f5;
`;

const ContentArea = styled.div`
  position: absolute;
  top: 162px;
`;
