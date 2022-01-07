import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { commentActions } from "../redux/modules/comment";

import { Text } from "../atoms/index";

const Comment = (props) => {
  const dispatch = useDispatch();
  const useParam = useParams();
  const aptNo = useParam.aptNo;
  console.log(aptNo);

  React.useEffect(() => {
    dispatch(commentActions.getCommentsFB(aptNo));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userKey = localStorage.getItem("userKey");

  const list = useSelector((state) => state.comment.list);
  console.log(list);
  console.log(list.length);

  return (
    <Container>
      <Item>
        <CommentWrite>
          <CommentWriteDiv>
            <Text h4>댓글</Text>
            <Text h4 color="#20D7FF">
              ({list.length || 0})
            </Text>
          </CommentWriteDiv>
          <CommentInput>
            <input type="text" placeholder="댓글을 남겨주세요" />
            <CommentButton>
              <Text boldText color="#FFFFFF">
                등록
              </Text>
            </CommentButton>
          </CommentInput>
        </CommentWrite>
        <CommentList>
          {list.map((item, idx) => {
            const createdAt = item.createdAt;
            const theDay = createdAt.split(" ");
            console.log(theDay[0].split("-").join(".").substring(2));
            return (
              <CommentOne key={idx}>
                <CommentOneInfo>
                  <Image />
                  <Text boldText padding="3px 0 0 0" width="100px">
                    {userKey === list[idx].fk_userKey
                      ? "내댓글"
                      : list[idx].nickname}
                  </Text>
                  <CommentOneInfoP>{list[idx].content}</CommentOneInfoP>
                  <Text
                    regularText
                    width="56px"
                    margin="0 12px 0 0"
                    color="#A5AAB6"
                  >
                    {theDay[0].split("-").join(".").substring(2)}
                  </Text>
                  {userKey === list[idx].fk_userKey ? (
                    <Text regularText width="27px" color="#20D7FF">
                      삭제
                    </Text>
                  ) : (
                    <Text regularText width="27px" color="#20D7FF"></Text>
                  )}
                </CommentOneInfo>
              </CommentOne>
            );
          })}
        </CommentList>
      </Item>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: #f9f9f9;
  border-radius: 40px 40px 0px 0px;
`;

const Item = styled.div`
  width: 1200px;
  margin: 0px auto;
`;

const CommentWrite = styled.div`
  width: 100%;
  height: 186px;
  padding-top: 100px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
`;
const CommentWriteDiv = styled.div`
  width: 100%;
  height: 24px;
  margin: 0px 0px 19px 24px;
  display: flex;
`;

const CommentInput = styled.div`
  width: 100%;
  height: 43px;
  border-radius: 54px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  & > ::placeholder {
    color: #778899;
  }
  & > input:focus {
    outline: none;
  }
  & > input {
    width: 1088px;
    margin-left: 24px;
    min-height: 24px;
    border: none;
  }
`;

const CommentButton = styled.div`
  width: 78px;
  height: 35px;
  border-radius: 21.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #20d7ff;
  cursor: pointer;
`;

const CommentList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
  & > :not(:last-child) {
    margin-bottom: 20px;
  }
`;

const CommentOne = styled.div`
  width: 100%;
  min-height: 60px;
  border-radius: 30px;
  padding: 15px 0px;
  background-color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const CommentOneInfo = styled.div`
  width: 1138px;
  min-height: 30px;
  display: flex;
`;

const CommentOneInfoP = styled.span`
  font-size: 14px;
  line-height: 25px;
  width: 850px;
  min-height: 25px;
  display: flex;
  flex-wrap: wrap;
  margin-right: 51px;
`;

const Image = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 25px;
  margin-right: 7px;
  /* background-image: url("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"); */
  background-image: url(${(props) =>
    props.src ||
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export default Comment;
