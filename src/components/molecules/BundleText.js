import styled from "styled-components";
import { Grid, Text } from "../atoms/index";

export default function BundleText(props) {
  const { margin } = props;
  const styles = {
    margin: margin,
  };
  return (
    <BundleTextWrap {...styles}>
      <Grid is_flex>
        <Grid width="140px">
          <Text boldText>{props.title}</Text>
        </Grid>
        <Grid>
          <Text regularText>{props.content}</Text>
        </Grid>
      </Grid>
    </BundleTextWrap>
  );
}

BundleText.defaultProps = {};

const BundleTextWrap = styled.div`
  margin: ${(props) => props.margin};
  height: 25px;
`;
