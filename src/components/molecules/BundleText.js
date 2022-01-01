import styled from "styled-components";
import { Grid, Text, Div } from "../atoms/index";

export default function BundleText(props) {
  const { margin } = props;
  const styles = {
    margin: margin,
  };
  return (
    <BundleTextWrap {...styles}>
      <Grid is_flex>
        <Div width="140px">
          <Text boldText>{props.title}</Text>
        </Div>
        <Div>
          <Text regularText>{props.content}</Text>
        </Div>
      </Grid>
    </BundleTextWrap>
  );
}

BundleText.defaultProps = {
  margin: false,
};

const BundleTextWrap = styled.div`
  margin: ${(props) => props.margin};
  height: 25px;
`;
