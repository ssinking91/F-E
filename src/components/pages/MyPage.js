import styled from "styled-components";
import NavBarLink from "../organisms/NavBarLink";
import Main2Card from "../organisms/Main2Card";
import Footer from "../organisms/Footer";
import { Text } from "../atoms/index";
const MyPage = (props) => {
  return (
    <>
      <NavBarLink />
      <MyCard>
        <MyCardImage />
        <MyCardList>
          <Text h2 margin="0 0 10px 0">
            스파르탄 님
          </Text>
          <Text boldText>서울특별시</Text>
        </MyCardList>
      </MyCard>
      <MyPost>
        <Text h3 margin="0 0 30px 0">
          저장한 청약 정보
        </Text>
        <MyPostCardList>
          <Main2Card />
          <Main2Card />
          <Main2Card />
          <Main2Card />
          <Main2Card />
          <Main2Card />
          <Main2Card />
          <Main2Card />
          <Main2Card />
          <Main2Card />
        </MyPostCardList>
      </MyPost>
      <Footer />
    </>
  );
};
const MyCard = styled.div`
  width: 1195px;
  height: 207px;
  display: flex;
  margin: 80px auto 100px;
`;

const MyCardImage = styled.div`
  width: 207px;
  height: 207px;
  border-radius: 20px;
  background-image: url("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 60px;
`;

const MyCardList = styled.div`
  width: 988px;
  height: 207px;
  display: flex;
  flex-direction: column;
`;

const MyPost = styled.div`
  width: 1195px;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
`;

const MyPostCardList = styled.div`
  width: 1195px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & > div {
    margin-bottom: 26px;
  }
`;

export default MyPage;
