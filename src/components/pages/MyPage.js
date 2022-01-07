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

  // console.log(existuser);

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
            {existuser ? (
              <Text h4 boldText>
                {existuser.sido}
              </Text>
            ) : (
              <>
                <Text h4 boldText>
                  선택한 지역이 없습니다
                </Text>
                <span>🤯</span>
              </>
            )}
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
            {publicInfo.length !== 0 ? (
              publicInfo.map((item, idx) => {
                const publics = "public";
                const panName = `[${item.aisTypeName}] ${
                  item.address.split(" ")[0]
                } ${item.address.split(" ")[1]}`;
                return (
                  <Main2Card
                    key={idx}
                    image={item.ImgUrl}
                    name={panName}
                    startDate={item.startDate}
                    endDate={item.closeDate}
                    size={`${item.size} m²`}
                    price={item.aisTypeName}
                    _public={publics}
                    //공공 청약정보 ID 값
                    _onClick={() => {
                      history.push(`/public/${item.panId}`);
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

            {privateInfo.length !== 0 ? (
              privateInfo.map((item, idx) => {
                return (
                  <Main2Card
                    key={idx}
                    image={item.ImgUrl}
                    name={item.houseName}
                    startDate={item.receptStartDate}
                    endDate={item.receptEndDate}
                    size={`${item.size} m²`}
                    price={`${item.supplyAmount} 만원`}
                    //민간 청약정보 ID 값
                    _onClick={() => {
                      history.push(`/private/${item.pblancNo}`);
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
