import { useSelector } from "react-redux";
import { Grid } from "../atoms/index";

export default function DetailImg() {
  const typeImg = useSelector((store) => store.detail.img);
  return (
    <>
      {typeImg && (
        <Grid width="50%" margin="0 auto">
          <Grid margin="auto">
            <img src={`${typeImg.url1}`} alt="url1" />
          </Grid>
          <Grid>
            <img src={`${typeImg.url2}`} alt="url2" style={{ width: "100%" }} />
          </Grid>
          <Grid>
            <img src={`${typeImg.url3}`} alt="url3" style={{ width: "100%" }} />
          </Grid>
          {typeImg.url4 && (
            <Grid>
              <img
                src={`${typeImg.url4}`}
                alt="url4"
                style={{ width: "100%" }}
              />
            </Grid>
          )}
          {typeImg.url5 && (
            <Grid>
              <img
                src={`${typeImg.url5}`}
                alt="url5"
                style={{ width: "100%" }}
              />
            </Grid>
          )}
        </Grid>
      )}
    </>
  );
}
