import { Grid, Text } from "../atoms/index";
import { useSelector } from "react-redux";

export default function DetailType() {
  // const sido = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10"];
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
        <Grid
          is_flex
          width="800px"
          margin="auto"
          background_color="#eee"
          radius="36px"
        >
          {typeInfo &&
            typeInfo.map((item, index) => {
              console.log(item);
              return (
                <Grid
                  is_flex
                  key={index}
                  width="100%"
                  height="30px"
                  margin="auto"
                  radius="36px"
                  cursor="pointer"
                >
                  <Text h4 color="#000" margin="auto" padding="3px">
                    {item.type.split(".")[0].split("")[1]}
                    {item.type.split(".")[0].split("")[2]}
                    {item.type.split(".")[1].split("")[4]}
                  </Text>
                </Grid>
              );
            })}
        </Grid>
      </Grid>
    </>
  );
}
