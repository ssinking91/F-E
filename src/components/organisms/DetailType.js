import React, { useState } from "react";
import { Grid, Text } from "../atoms/index";
import { useSelector } from "react-redux";

export default function DetailType() {
  const typeInfo = useSelector((store) => store.detail.info.detail2);
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
              background_color="#F9F9F9"
              // cursor="pointer"
              radius="36px"
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
                        radius="36px"
                        background_color={
                          item.modelNo === type ? "#20D7FF" : ""
                        }
                        _onClick={() => {
                          setType(item.modelNo);
                        }}
                      >
                        <Grid is_flex cursor="pointer">
                          <Text
                            h4
                            color={
                              item.modelNo === type ? `#F9F9F9` : `#A5AAB6`
                            }
                            margin="auto"
                            padding="3px"
                          >
                            {item.type.split(".")[0].split("")[1]}
                            {item.type.split(".")[0].split("")[2]}
                            {item.type.split(".")[1].split("")[4]}
                          </Text>
                        </Grid>
                      </Grid>
                    </React.Fragment>
                  );
                })}
            </Grid>
            <Grid width="370px" margin="30px auto">
              {typeInfo &&
                typeInfo.map((item, key) => {
                  let supplyAreaSize = Math.ceil(item.supplyAreaSize);
                  let supplyAmount = item.supplyAmount.replace(",", "");
                  let supplyAmount1 = `${
                    supplyAmount.split("")[supplyAmount.length - 5]
                  }억 ${supplyAmount.split("")[1]}${supplyAmount.split("")[2]}${
                    supplyAmount.split("")[3]
                  }${supplyAmount.split("")[4]}`;
                  const modelType = `${item.type.split(".")[0].split("")[1]}${
                    item.type.split(".")[0].split("")[2]
                  }${item.type.split(".")[1].split("")[4]}`;
                  let pyeongSize = Math.ceil(0.3025 * supplyAreaSize);
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
                                  일반 {item.geSupplySize}세대 <br /> 특별{" "}
                                  {item.spSupplySize}세대
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
                                <Text regularText>{modelType}</Text>
                              </Grid>
                            </Grid>
                            <Grid>
                              <Grid is_flex>
                                <Text boldText margin="0 15px 0 0">
                                  전용 면적
                                </Text>
                                <Text regularText>
                                  {supplyAreaSize} m² / {pyeongSize} 평
                                </Text>
                              </Grid>
                              <Grid is_flex>
                                <Text boldText margin="0 15px 0 0">
                                  공급 금액
                                </Text>
                                <Text
                                  regularText
                                >{`${supplyAmount1} 만원`}</Text>
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
