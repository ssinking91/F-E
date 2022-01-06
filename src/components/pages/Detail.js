// import KakaoMap from "../utilities/KakaoMap";
import NavBarLink from "../organisms/NavBarLink";
import DetailInfo from "../organisms/DetailInfo";
import DetailType from "../organisms/DetailType";
import Comment from "../organisms/Comment";
import Footer from "../organisms/Footer";
import { Grid } from "../atoms/index";

export default function Detail(props) {
  console.log(props);

  return (
    <>
      <Grid margin="auto">
        <NavBarLink />
        <DetailInfo
          pageNum={
            props.location.state.operation
              ? props.location.state.pblancNo
              : props.location.state.panId
          }
          operation={
            props.location.state.operation
              ? props.location.state.operation
              : false
          }
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
