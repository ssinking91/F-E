// import KakaoMap from "../utilities/KakaoMap";
import NavBar from "../organisms/NavBar";
import DetailInfo from "../organisms/DetailInfo";
import DetailType from "../organisms/DetailType";
import { Grid } from "../atoms/index";

export default function Detail() {
  return (
    <>
      <Grid width="1200px" margin="auto">
        <NavBar />
        <DetailInfo />
        <DetailType />
        {/* <KakaoMap /> */}
      </Grid>
    </>
  );
}
