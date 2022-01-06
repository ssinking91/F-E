import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configStore";

import NavBarLink from "../organisms/NavBarLink";
import Main2Card from "../organisms/Main2Card";
import Footer from "../organisms/Footer";
import { Text } from "../atoms/index";
import { mypagetActions } from "../redux/modules/mypage";

const MyPage = (props) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!localStorage.getItem("userKey")) {
      window.alert("로그인 먼저 해주세요😎");
      return history.push("/login");
    }

    const userKey = localStorage.getItem("userKey");
    dispatch(mypagetActions.getUserInfosFB(userKey));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userImage = localStorage.getItem("userImage");

  const existuser = useSelector((state) => state.mypage.list.existuser);

  const publicInfo = useSelector((state) => state.mypage.list.public);
  console.log(publicInfo);

  const privateInfo = useSelector((state) => state.mypage.list.private);
  console.log(privateInfo);

  return (
    <>
      <NavBarLink />
      <Container>
        <MyCard>
          <MyCardImage src={userImage} />
          <MyCardList>
            <Text h2 margin="0 0 10px 0">
              {localStorage.getItem("userName")} 님
            </Text>
            <Text h4 boldText>
              {existuser.sido}
            </Text>
          </MyCardList>
        </MyCard>
        <MyPost>
          <Text h3 margin="0 0 15px 0">
            저장한 청약 정보
          </Text>
          <MyPostCardList>
            <Text h4 color="#778899" width="1195px" margin="30px 0 30px 0">
              공공 분양
            </Text>
            {publicInfo.length !== 0  ? (
              publicInfo.map((item, idx) => {
                const houseName = item.panName;
                const receptStartDate = item.startDate;
                const receptEndDate = item.closeDate;
                const imgUrl = item.ImgUrl;
                return (
                  <Main2Card
                    key={idx}
                    image={imgUrl}
                    name={houseName}
                    startDate={receptStartDate}
                    endDate={receptEndDate}
                    // 데이터 받아야 함.
                    size={"84m² ~ 116m²/60m²~85m²"}
                    price={"54,470 ~ 72,670만원"}
                    _onClick={() => {
                      history.push(`/public/${publicInfo.panId}}`);
                    }}
                  />
                );
              })
            ) : ( 
              <Text h4 width="1195px" margin="30px 0 30px 0">
                😎 공공 분양저장된 청약정보가 없습니다
              </Text>
            )}

          </MyPostCardList>
          <MyPostCardList>
            <Text h4 color="#778899" width="1195px" margin="30px 0 30px 0">
              민간 분양
            </Text>

            {privateInfo.length !== 0  ? (
              privateInfo.map((item, idx) => {
                const houseName = item.houseName;
                const receptStartDate = item.receptStartDate;
                const receptEndDate = item.receptEndDate;
                const imgUrl = item.ImgUrl;
                // const size = item.size;
                return (
                  <Main2Card
                    key={idx}
                    image={imgUrl}
                    name={houseName}
                    startDate={receptStartDate}
                    endDate={receptEndDate}
                    // 데이터 받아야 함.
                    size={"84m² ~ 116m²/60m²~85m²"}
                    price={"54,470 ~ 72,670만원"}
                    _onClick={() => {
                      history.push(`/private/${privateInfo.pblancNo}`);
                    }}
                  />
                );
              })
            ) : ( 
              <Text h4 width="1195px" margin="30px 0 30px 0">
                😎 민간 분양 저장된 청약정보가 없습니다
              </Text>
            )}
            
          </MyPostCardList>
        </MyPost>
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  width: 100%;
  padding-top: 100px;
`;

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
  background-image: url(${(props) =>
    props.src ||
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"});
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
  margin: 0px auto 80px;
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
