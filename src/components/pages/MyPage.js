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
    if(!localStorage.getItem('userKey')){
      window.alert("로그인 먼저 해주세요😎");
     return history.push("/login");
    }

   const userKey = localStorage.getItem('userKey') 
    dispatch(mypagetActions.getUserInfosFB(userKey));
  }, []);

  const userImage = localStorage.getItem('userImage'); 
  
  const sido = useSelector(state => state.mypage.list.sido);
  const publicInfo = useSelector(state => state.mypage.list.likes[0].공공);
  console.log(publicInfo);
  const privateInfo = useSelector(state => state.mypage.list.likes[0].민영);
  console.log(privateInfo);

  

  return (
    <>
      <NavBarLink />
      <MyCard >
        <MyCardImage src={userImage} />
        <MyCardList>
          <Text h2 margin="0 0 10px 0">
            {localStorage.getItem('userName')} 님
          </Text>
          <Text h4 boldText>{sido}</Text>
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
          {}
          <Main2Card />
          <Main2Card />
          <Main2Card />
          <Main2Card />
          <Main2Card />
          <Main2Card />
          <Main2Card />
          <Main2Card />
        </MyPostCardList>
        <MyPostCardList>
          <Text h4 color="#778899" width="1195px" margin="30px 0 30px 0">
            민간 분양
          </Text>
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
  /* background-image: url("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"); */
  background-image: url(${(props) => props.src || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"});
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
