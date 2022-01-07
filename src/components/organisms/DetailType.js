import React, { useState } from "react";
import { Grid, Text } from "../atoms/index";
import { useSelector } from "react-redux";
import BundleText from "../molecules/BundleText";

export default function DetailType() {
  // const sido = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10"];
  const typeInfo = useSelector((store) => store.detail.info.detail2);
  //console.log(typeInfo);
  const [type, setType] = useState(1);

  return (
    <>
      {typeInfo && (
        <>
          <Grid width="1200px" margin="0 auto 50px">
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
              // cursor="pointer"
              // radius="36px"
            >
              {typeInfo &&
                typeInfo.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <Grid
                        is_flex
                        key={index}
                        width="100%"
                        height="30px"
                        margin="auto"
                        // radius="36px"
                        cursor="pointer"
                        background_color={
                          item.modelNo === type ? "#20D7FF" : ""
                        }
                        _onClick={() => {
                          setType(item.modelNo);
                        }}
                      >
                        <Text h4 color="#000" margin="auto" padding="3px">
                          {item.type.split(".")[0].split("")[1]}
                          {item.type.split(".")[0].split("")[2]}
                          {item.type.split(".")[1].split("")[4]}
                        </Text>
                      </Grid>
                    </React.Fragment>
                  );
                })}
            </Grid>
            <Grid width="370px" margin="30px auto">
              {typeInfo &&
                typeInfo.map((item, key) => {
                  return (
                    <React.Fragment key={key}>
                      {item.modelNo === type && (
                        <>
                          <Grid
                            is_flex
                            justify_content="center"
                            align_items="center"
                          >
                            <Grid>
                              <Grid is_flex>
                                <Text boldText margin="0 15px 0 0">
                                  공급 규모
                                </Text>
                                <Text regularText>
                                  일반 공급 {item.geSupplySize} <br /> 특별 공급{" "}
                                  {item.spSupplySize}
                                </Text>
                              </Grid>
                              <Grid is_flex>
                                <Text boldText margin="0 15px 0 0">
                                  모델 번호
                                </Text>
                                <Text regularText>{item.modelNo}</Text>
                              </Grid>
                              <Grid is_flex>
                                <Text boldText margin="0 15px 0 0">
                                  모델 타입
                                </Text>
                                <Text regularText>{item.type}</Text>
                              </Grid>
                            </Grid>
                            <Grid>
                              <Grid is_flex>
                                <Text boldText margin="0 15px 0 0">
                                  전용 면적
                                </Text>
                                <Text regularText>{item.supplyAreaSize}</Text>
                              </Grid>
                              <Grid is_flex>
                                <Text boldText margin="0 15px 0 0">
                                  공급 금액
                                </Text>
                                <Text regularText>{item.supplyAmount}</Text>
                              </Grid>
                            </Grid>
                          </Grid>
                        </>
                      )}
                    </React.Fragment>
                  );
                })}
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}
