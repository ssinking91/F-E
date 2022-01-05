import styled from "styled-components";
import { Text} from "../atoms/index";

const Footer = (props) => {
  return (
    <>
      <Container >
        <hr />
        <Text footer color="#95A1BB" margin="0 0 0 360px">
          ⓒ.ZIP.All rights reserved.
        </Text>
      </Container>
    </>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex:
  align-items: center;
`;
