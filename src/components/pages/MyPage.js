import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configStore";
import { mypagetActions } from "../redux/modules/mypage";

import NavBarLink from "../organisms/NavBarLink";
import Main2Card from "../organisms/Main2Card";
import NoneMain2Card from "../organisms/NoneMain2Card";
import Footer from "../organisms/Footer";
import { Text, DropDown } from "../atoms/index";

const MyPage = (props) => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = React.useState(false);
  const [sido, setSido] = React.useState();

  React.useEffect(() => {
    if (!localStorage.getItem("userKey")) {
      window.alert("로그인 먼저 해주세요😎");
      return history.push("/login");
    }
    const userKey = localStorage.getItem("userKey");
    dispatch(mypagetActions.getUserInfosFB(userKey));
  }, []);

  // sido 변경
  const sidoChange = (e) => {
    setSido(e);
  };

  // sido 변경 api
  const sidoChangeApi = () => {
    console.log(sido);
    if (sido === undefined) {
      window.alert("관심 지역 설정해 주세요😎");
      return;
    }
    const userName = localStorage.getItem("userName");
    dispatch(mypagetActions.editUserInfosFB(userName, sido));
    setIsActive(!isActive);
  };

  // const [selection, setSelection] = React.useState(false);

  const userImage = localStorage.getItem("userImage");

  const existuser = useSelector((state) => state.mypage.list.existuser);
  console.log(existuser);

  const publicInfo = useSelector((state) => state.mypage.list.public);
  console.log(publicInfo);

  const privateInfo = useSelector((state) => state.mypage.list.private);
  console.log(privateInfo);

  const Page = "myPage";

  const OPTIONS = [
    { value: "서울", name: "서울" },
    { value: "인천", name: "인천" },
    { value: "부산", name: "부산" },
    { value: "대구", name: "대구" },
    { value: "대전", name: "대전" },
    { value: "광주", name: "광주" },
    { value: "울산", name: "울산" },
    { value: "세종", name: "세종" },
    { value: "경기도", name: "경기도" },
    { value: "강원도", name: "강원도" },
    { value: "충청도", name: "충청도" },
    { value: "경상도", name: "경상도" },
    { value: "전라도", name: "전라도" },
    { value: "제주도", name: "제주도" },
  ];

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
            {isActive ? (
              <TextDiv>
                <DropDown options={OPTIONS} sidoChange={sidoChange} />
                <MypageButton
                  onClick={() => {
                    sidoChangeApi();
                  }}
                >
                  <Text boldText color="#FFFFFF">
                    완료
                  </Text>
                </MypageButton>
              </TextDiv>
            ) : (
              <TextDiv>
                <Text h4 boldText width="121px">
                  {existuser.sido}
                </Text>
                <MypageButton
                  onClick={() => {
                    setIsActive(!isActive);
                  }}
                >
                  <Text boldText color="#FFFFFF">
                    수정
                  </Text>
                </MypageButton>
              </TextDiv>
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
                const publicSales = "publicSales";
                const status = "public";

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
                    aptNo={item.panId}
                    islike={item.islike}
                    Page={Page}
                    CardPanState={item.panState}
                    publicSales={publicSales}
                    status={status}
                    //공공 청약정보 ID 값
                    _onClick={() => {
                      history.push(`/public/${item.panId}`);
                    }}
                  />
                );
              })
            ) : (
              <>
                <NoneMain2Card />
              </>
            )}
          </MyPostCardList>
          <MyPostCardList>
            <Text h4 color="#778899" width="1195px" margin="30px 0 30px 0">
              민간 분양
            </Text>

            {privateInfo.length !== 0 ? (
              privateInfo.map((item, idx) => {
                const status = "private";
                return (
                  <Main2Card
                    key={idx}
                    image={item.ImgUrl}
                    name={item.houseName}
                    startDate={item.receptStartDate}
                    endDate={item.receptEndDate}
                    size={`${item.size} m²`}
                    price={`${item.supplyAmount} 만원`}
                    aptNo={item.pblancNo}
                    islike={item.islike}
                    Page={Page}
                    status={status}
                    //민간 청약정보 ID 값
                    _onClick={() => {
                      history.push(`/private/${item.pblancNo}`);
                    }}
                  />
                );
              })
            ) : (
              <>
                <NoneMain2Card />
              </>
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
  width: 888px;
  height: 207px;
  display: flex;
  flex-direction: column;
`;

const TextDiv = styled.div`
  width: 988px;
  display: flex;
  align-items: center;
`;

// const TextSpan = styled.span`
//   font-size: 18px;
//   line-height: 25px;
// `;

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

const MypageButton = styled.button`
  width: 78px;
  height: 35px;
  border-radius: 21.5px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.active ? "aliceblue" : "#20d7ff")};
  margin-left: 30px;
  cursor: pointer;
`;

export default MyPage;
