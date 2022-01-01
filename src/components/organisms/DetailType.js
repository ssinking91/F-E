import { Div, Text } from "../atoms/index";

export default function DetailType() {
  const sido = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10"];
  return (
    <>
      <Div>
        <Text h3 margin="80px auto 22px auto">
          타입 유형별 상세정보
        </Text>
      </Div>
      <Div width="800px" margin="auto" background_color="#fafafa">
        {sido.map((item, index) => (
          <Div
            key={index}
            width="100%"
            height="30px"
            margin="auto"
            background_color="#20D7FF"
          >
            <Text h4 color="#fff" margin="auto" padding="3px">
              {item}
            </Text>
          </Div>
        ))}
      </Div>
    </>
  );
}
