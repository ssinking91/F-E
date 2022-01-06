// import KakaoMap from "../utilities/KakaoMap";
import NavBarLink from "../organisms/NavBarLink";
import DetailInfo from "../organisms/DetailInfo";
import DetailType from "../organisms/DetailType";
import Comment from "../organisms/Comment";
import Footer from "../organisms/Footer";
import { Grid } from "../atoms/index";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDetailInfoDB } from "../redux/modules/detail";

export default function Detail(props) {
  const dispatch = useDispatch();

  const pageNum = props.pageNum;
  const operation = props.operation === "민영" ? "private" : "public";

  useEffect(() => {
    dispatch(getDetailInfoDB(pageNum, operation));
  });

  const history = useHistory();
  console.log(props);
  if (!props.location.state.operation) {
    history.push("/");
  }
  // console.log(props.location.state.operation);

  return (
    <>
      <Grid margin="auto">
        <NavBarLink />
        <DetailInfo
        // pageNum={
        //   props.location.state.operation
        //     ? props.location.state.pblancNo
        //     : props.location.state.panId
        // }
        // operation={
        //   props.location.state.operation
        //     ? props.location.state.operation
        //     : false
        // }
        />
        <DetailType />
        {/* <KakaoMap /> */}
      </Grid>
      <div
        style={{
          backgroundColor: "#f9f9f9",
          borderRadius: "40px 40px 0px 0px",
        }}
      >
        <Comment />
        <Footer />
      </div>
    </>
  );
}
