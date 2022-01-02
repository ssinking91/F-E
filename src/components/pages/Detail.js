// import KakaoMap from "../utilities/KakaoMap";
import NavBar2 from "../organisms/NavBar2";
import DetailInfo from "../organisms/DetailInfo";
import DetailType from "../organisms/DetailType";
import Comment from "../organisms/Comment";
import Footer from "../organisms/Footer";
import { Grid } from "../atoms/index";

export default function Detail() {
  return (
    <>
      <Grid width="1200px" margin="auto">
        <NavBar2 />
        <DetailInfo />
        <DetailType />
        {/* <KakaoMap /> */}
      </Grid>
      <div style={{backgroundColor : "#f9f9f9",  borderRadius: "40px 40px 0px 0px"}}>
      <Comment />
      <Footer />
      </div>
    </>
  );
}
