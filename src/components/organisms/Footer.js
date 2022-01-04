// import styled from "styled-components";
import { Text, Grid } from "../atoms/index";

const Footer = (props) => {
  return (
    <>
      <Grid>
        <hr />
        <Text footer color="#95A1BB" margin="8px 0 0 360px">
          ⓒ.ZIP.All rights reserved.
        </Text>
      </Grid>
    </>
  );
};

export default Footer;
