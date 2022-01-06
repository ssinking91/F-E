// import KakaoMap from "../utilities/KakaoMap";
import NavBarLink from "../organisms/NavBarLink";
import DetailInfo from "../organisms/DetailInfo";
import DetailType from "../organisms/DetailType";
import DetailImg from "../organisms/DetailImg";
import Comment from "../organisms/Comment";
import Footer from "../organisms/Footer";
import { Grid } from "../atoms/index";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDetailInfoDB, getDetailImgDB } from "../redux/modules/detail";

export default function DetailTemp(props) {
  const dispatch = useDispatch();
  const location = useLocation();

  console.log(location);
  const locate = location.pathname;

  useEffect(() => {
    dispatch(getDetailInfoDB(locate));
    dispatch(getDetailImgDB(locate));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NavBarLink />
      <Grid padding="50px 0 0 0">
        <DetailInfo />
        <DetailType />
        <DetailImg />
        {/* <KakaoMap /> */}
        <div
          style={{
            backgroundColor: "#f9f9f9",
            borderRadius: "40px 40px 0px 0px",
          }}
        >
          <Comment />
          <Footer />
        </div>
      </Grid>
    </>
  );
}
