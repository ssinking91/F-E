import styled from "styled-components";
import { Grid, Button, Text } from "../atoms/index";
import BundleText from "../molecules/BundleText";
import defaultImage from "../../images/defaultImage.png";

export default function DetailInfo() {
  return (
    <>
      <Grid is_flex margin="80px auto">
        <Image />
        <DetailText>
          <Grid margin="10px 0 0 0" is_flex>
            <Text boldText color="#20D7FF">
              공고중
            </Text>
            <Text boldText margin="0px 10px" color="#20D7FF">
              |
            </Text>
            <Text boldText>공공분양</Text>
          </Grid>
          <Text h2>신림 파라곤 더밀리안</Text>
          <BundleText
            title={"주소"}
            content={"강원도 고성군 토성면 봉포리 258-9 외 8필지"}
            margin="50px 0 0 0"
          />
          <BundleText title={"세대 수"} content={"219 세대"} />
          <BundleText
            title={"전용 면적"}
            content={"84㎡ ~ 116㎡ / 60㎡ ~ 85㎡"}
          />
          <BundleText title={"분양 가격"} content={"54,470 ~ 72,670 만원"} />
          <BundleText
            title={"모집 공고일"}
            content={"2021.12.10"}
            margin="35px 0 0 0"
          />
          <BundleText title={"청약 기간"} content={"2021.12.12 ~ 2021.12.15"} />
          <BundleText title={"특별 접수"} content={"2021.12.15"} />
          <BundleText title={"1순위 접수일"} content={"2021.12.16"} />
          <BundleText title={"2순위 접수일"} content={"2021.12.17"} />
          <BundleText title={"당첨자 발표일"} content={"2022.01.21"} />
          <BundleText title={"당첨자 계약일"} content={"2022.02.12"} />
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
              <Text h4 color="#fff">
                홈페이지로 이동하기
              </Text>
            </Button>
          </Grid>
        </DetailText>
      </Grid>
      <Line />
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
