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
import { globalSido } from "../utilities/constants.js";

const MyPage = (props) => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = React.useState(false);
  const [isActive2, setIsActive2] = React.useState(false);
  const [sido, setSido] = React.useState();
  const [email, setEmail] = React.useState(); // 이메일 내용 작성
  const [active, setActive] = React.useState(true); // 버튼 활성화 유무

  React.useEffect(() => {
    if (!localStorage.getItem("userKey")) {
      window.alert("로그인 먼저 해주세요😎");
      return history.push("/login");
    }
    const userKey = localStorage.getItem("userKey");
    dispatch(mypagetActions.getUserInfosFB(userKey));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  // 글 내용
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  // 버튼 활성화 / 비활성화 유무 확인
  const checkActive = () => {
    if (email === "") {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  //이메일 유효성 검사
  const isEmail = (asValue) => { 
    let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i; 
    return regExp.test(asValue); // 형식에 맞는 경우 true 리턴 
  }

  // email 변경 api
  const emailChangeApi = () => {
    console.log(email);
    const userName = localStorage.getItem("userName");
    if(isEmail(email)){
      dispatch(mypagetActions.editEmailFB(userName, email));
      setIsActive2(!isActive2);
      setEmail("");
    }else{
    window.alert("이메일 형식에 맞지 않습니다😀")
    setEmail("");
  }
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

  // >> constants 에서 관리하는게 어떨까요?
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
  console.log(globalSido);

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
              <TextDiv margin="10px 0 0 0">
                <TextDiv width="340px">
                  <DropDown
                    options={OPTIONS}
                    sidoChange={sidoChange}
                    name={"관심지역"}
                  />
                </TextDiv>
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
              <TextDiv margin="10px 0 0 0">
                <Text h4 width="340px">
                  {existuser.sido ? existuser.sido : "관심지역이 없습니다😀"}
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

            <TextDiv margin="50px 0 0 0">
              <Text boldText color="#A5AAB6">
                *이메일을 입력해 주시면 저장한 청약정보에 대한 알림을
                보내드립니다
              </Text>
              <TextSpan margin="0 0 0 10px">🏡</TextSpan>
            </TextDiv>

            {isActive2 ? (
              <TextDiv margin="2px 0 0 0">
                <TextInputDiv>
                  <TextInput
                    type="text"
                    placeholder="이메일을 입력해 주세요🔥"
                    value={email}
                    onChange={changeEmail}
                    onKeyUp={checkActive}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        emailChangeApi();
                      }
                    }}
                    active={active}
                  />
                </TextInputDiv>
                <MypageButton
                  onClick={() => {
                    emailChangeApi();
                  }}
                >
                  <Text boldText color="#FFFFFF">
                    완료
                  </Text>
                </MypageButton>
              </TextDiv>
            ) : (
              <TextDiv margin="2px 0 0 0">
                <Text h4 width="340px">
                  {existuser.email ? existuser.email : "이메일이 없습니다😀"}
                </Text>
                <MypageButton
                  onClick={() => {
                    setIsActive2(!isActive2);
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
                    size={item.size}
                    price={item.aisTypeName}
                    _public={publics}
                    aptNo={item.panId}
                    CardPanState={item.panState}
                    publicSales={publicSales}
                    islike={item.islike}
                    Page={Page}
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

                let minPrize = item.supplyAmount.split("~")[0].replace(",", "");

                let minPrize5 = `${minPrize.split("")[minPrize.length - 5]}억 ${
                  minPrize.split("")[1]
                }${minPrize.split("")[2]}${minPrize.split("")[3]}${
                  minPrize.split("")[4]
                }`;
                //console.log(minPrize5);
                let minPrize4 = `${minPrize.split("")[minPrize.length - 4]}${
                  minPrize.split("")[1]
                }${minPrize.split("")[2]}${minPrize.split("")[3]}`;
                //console.log(minPrize4);

                const maxPrize = item.supplyAmount
                  .split("~")[1]
                  .replace(",", "");
                // 5자리 기준
                let maxPrize1 = `${maxPrize.split("")[maxPrize.length - 5]}억 ${
                  maxPrize.split("")[1]
                }${maxPrize.split("")[2]}${maxPrize.split("")[3]}${
                  maxPrize.split("")[4]
                }`;

                let minSize = Math.ceil(item.size.split("~")[0]);
                let pyeongMinSize = Math.ceil(0.3025 * minSize);
                let maxSize = Math.ceil(item.size.split("~")[1]);
                let pyeongMaxSize = Math.ceil(0.3025 * maxSize);
                //console.log(maxPrize);

                let pyeongMaxPrize = Math.ceil(maxPrize / pyeongMaxSize);
                return (
                  <Main2Card
                    key={idx}
                    image={item.ImgUrl}
                    name={item.houseName}
                    startDate={item.receptStartDate}
                    endDate={item.receptEndDate}
                    size={`${minSize} ~ ${maxSize} m² / ${pyeongMinSize} ~ ${pyeongMaxSize} 평`}
                    price={`${
                      minPrize.length === 5 ? minPrize5 : minPrize4
                    } ~ ${maxPrize1} / 평당 ${pyeongMaxPrize}만원`}
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
  width:  ${(props) => (props.width ? props.width : `988px`)};
  display: flex;
  align-items: center;
  margin: ${(props) => (props.margin ? props.margin : ``)};
`;

const TextSpan = styled.span`
  width: ${(props) => (props.width ? props.width : ``)};
  height: ${(props) => (props.height ? props.height : ``)};
  margin: ${(props) => (props.margin ? props.margin : ``)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : ``)};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : ``)};
  color: ${(props) => (props.color ? props.color : ``)};
`;

const TextInputDiv = styled.div`
  width: 340px;
  height: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border-bottom: 1px solid #e3e5eb; */
  :after {
    content: "";
    width: 170px;
    border-bottom: 1px solid #e3e5eb;
  }
`;


const TextInput = styled.input`
  width: 340px;
  height: 34px;
  border: none;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #a5aab6;
    padding-left: 10px;
  }
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
