import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Grid } from "../atoms/index";
import NavBarLink from "../organisms/NavBarLink";
import DetailInfo from "../organisms/DetailInfo";
import DetailType from "../organisms/DetailType";
import DetailImg from "../organisms/DetailImg";
import Comment from "../organisms/Comment";
import Footer from "../organisms/Footer";
import KakaoMiniMap from "../utilities/KakaoMiniMap";
import { getDetailInfoDB, getDetailImgDB } from "../redux/modules/detail";

export default function DetailTemp(props) {
  const dispatch = useDispatch();
  const location = useLocation();

  const locate = location.pathname;

  useEffect(() => {
    dispatch(getDetailInfoDB(locate));
    dispatch(getDetailImgDB(locate));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locate]);

  return (
    <>
      <NavBarLink />
      <Grid padding="50px 0 0 0">
        <DetailInfo />
        <KakaoMiniMap />
        <DetailType />
        <DetailImg />
        <Container>
          <Comment />
          <Footer />
        </Container>
      </Grid>
    </>
  );
}

const Container = styled.div`
  background-color: #f9f9f9;
  border-radius: 40px 40px 0px 0px;
`;
