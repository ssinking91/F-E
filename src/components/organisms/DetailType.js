import { Grid, Text } from "../atoms/index";
import { useSelector } from "react-redux";

export default function DetailType() {
  const sido = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10"];
  const typeInfo = useSelector((store) => store.detail.info.detail2);
  console.log(typeInfo);
  return (
    <>
      <Grid width="1200px" margin="auto">
        <Grid is_flex>
          <Text h3 margin="80px auto 22px auto">
            타입 유형별 상세정보
          </Text>
        </Grid>
        <Grid is_flex width="800px" margin="auto" background_color="#fafafa">
          {sido.map((item, index) => (
            <Grid
              is_flex
              key={index}
              width="100%"
              height="30px"
              margin="auto"
              background_color="#20D7FF"
              radius="36px"
            >
              <Text h4 color="#fff" margin="auto" padding="3px">
                {item}
              </Text>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
