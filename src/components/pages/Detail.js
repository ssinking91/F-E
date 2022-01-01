// import KakaoMap from "../utilities/KakaoMap";
import NavBar2 from "../organisms/NavBar2";
import DetailInfo from "../organisms/DetailInfo";
import DetailType from "../organisms/DetailType";
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
    </>
  );
}
