import { useSelector } from "react-redux";
import styled from "styled-components";
import { Grid, Button, Text } from "../atoms/index";
import BundleText from "../molecules/BundleText";
import defaultImage from "../../images/defaultImage.png";

// import DetailType from "./DetailType";

export default function DetailInfo() {
  const detailInfo = useSelector((store) => store.detail.info);
  const topInfo = detailInfo.detail1;
  console.log(topInfo);
  // console.log(topInfo.executor);

  return (
    <>
      {topInfo && (
        <>
          {" "}
          <Grid is_flex width="1200px" margin="80px auto">
            <Image />
            <DetailText>
              <Grid margin="10px 0 0 0" is_flex>
                <Text boldText color="#20D7FF">
                  공고중
                </Text>
                <Text boldText margin="0px 10px" color="#20D7FF">
                  |
                </Text>
                <Text boldText>
                  {(topInfo.operation && "민영분양") || "공공분양"}
                </Text>
              </Grid>
              <Text h2>{topInfo.houseName}</Text>
              <BundleText
                title={"주소"}
                content={`${topInfo.applyAddress}`}
                margin="50px 0 0 0"
              />
              <BundleText
                title={"세대 수"}
                content={`${topInfo.supplySize} 세대`}
              />
              <BundleText
                title={"전용 면적"}
                content={`${topInfo.supplyAreaSize}`}
              />
              <BundleText
                title={"분양 가격"}
                content={"54,470 ~ 72,670 만원"}
              />
              <BundleText
                title={"모집 공고일"}
                content={`${topInfo.recruitDate}`}
                margin="35px 0 0 0"
              />
              <BundleText
                title={"청약 기간"}
                content={`${topInfo.receptStartDate} ~ ${topInfo.receptEndDate}`}
              />
              <BundleText
                title={"특별 접수"}
                content={`${topInfo.plusSupplyStartDate} ~ ${topInfo.plusSupplyEndDate}`}
              />
              <BundleText
                title={"1순위 접수일"}
                content={`${topInfo.etcArea1Date}`}
              />
              <BundleText
                title={"2순위 접수일"}
                content={`${topInfo.etcArea2Date}`}
              />
              <BundleText
                title={"당첨자 발표일"}
                content={`${topInfo.winDate}`}
              />
              <BundleText
                title={"당첨자 계약일"}
                content={`${topInfo.contractStartDate} ~ ${topInfo.contractEndDate}`}
              />
              <BundleText title={"분양 문의"} content={"02) 000 - 0000"} />
              <Grid margin="40px 0 0 0">
                <Button
                  width="240px"
                  height="55px"
                  margin="0 10px 0 0"
                  padding="13px"
                  background_color="#fff"
                  border="2px solid #20D7FF"
                >
                  <Text h4 color="#20D7FF">
                    해당 공고 즐겨찾기
                  </Text>
                </Button>
                <Button
                  width="240px"
                  height="55px"
                  padding="13px"
                  background_color="#20D7FF"
                  border="2px solid #fff"
                >
                  <a
                    href={`${topInfo.homePage}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text h4 color="#fff">
                      홈페이지로 이동하기
                    </Text>
                  </a>
                </Button>
              </Grid>
            </DetailText>
          </Grid>
          <Line />
        </>
      )}
    </>
  );
}

const Line = styled.div`
  border-top: 1px solid #e3e5eb;
  width: 1200px;
  margin: 0 auto;
`;
const Image = styled.div`
  width: 600px;
  height: 600px;
  background-image: url("${defaultImage}");
  background-size: cover;
  margin: 0 50px 0 0;
`;

const DetailText = styled.div`
  width: 550px;
`;
