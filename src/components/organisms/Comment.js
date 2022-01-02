import React from "react";
import styled from "styled-components";

const Comment = (props) => {
  return (
    <Container>
      <Item>
        <CommentWrite>
          <span
            style={{
              width: "97px",
              height: "24px",
              margin: "0px 0px 19px 24px",
            }}
          >
            <span
              style={{
                width: "36px",
                height: "24px",
                fontWeight: "bold",
                fontSize: "18px",
                lineHeight: "25px",
                color: "#333333",
              }}
            >
              댓글
            </span>
            <span
              style={{
                width: "36px",
                height: "24px",
                fontWeight: "bold",
                fontSize: "18px",
                lineHeight: "25px",
                color: "#20D7FF",
              }}
            >
              (3)
            </span>
          </span>
          <CommentInput>
            <input
              type="text"
              placeholder="댓글을 남겨주세요"
              style={{
                width: "1088px",
                marginLeft: "24px",
                minHeight: "24px",
                border: "none",
              }}
            />
            <CommentButton>
              <span
                style={{
                  width: "27px",
                  height: "24px",
                  color: "#FFFFFF",
                  fontSize : "14px",
                  fontWeight: "bold",
                  lineHeight: "25px",      
                }}
              >
                등록
              </span>
            </CommentButton>
          </CommentInput>
        </CommentWrite>
        <CommentList>
          <CommentOne>
            <CommentOneInfo>
              <Image />
              <div
                style={{
                  width: "100px",
                  minHeight: "24px",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    lineHeight: "25px",
                    width: "100px",
                    height: "24px",
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  내댓글
                </span>
              </div>

              <span
                style={{
                  fontSize: "14px",
                  lineHeight: "25px",
                  width: "850px",
                  minHeight: "25px",
                  display: "flex",
                  flexWrap: "wrap",
                  marginRight: "51px",
                }}
              >
                진짜 이제는 당첨됐으면 ㅠㅠㅠ~~!
              </span>
              <span>
                <span
                  style={{
                    fontSize: "14px",
                    lineHeight: "25px",
                    width: "60px",
                    height: "25px",
                    color: "#A5AAB6",
                    marginRight: "12px",
                  }}
                >
                  21.12.31
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    lineHeight: "25px",
                    width: "60px",
                    height: "25px",
                    color: "#20D7FF",
                  }}
                >
                  삭제
                </span>
              </span>
            </CommentOneInfo>
          </CommentOne>
          <CommentOne>
            <CommentOneInfo>
              <Image />
              <div
                style={{
                  width: "100px",
                  minHeight: "24px",
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    lineHeight: "25px",
                    width: "100px",
                    height: "24px",
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  닉네임 001
                </span>
              </div>

              <span
                style={{
                  fontSize: "14px",
                  lineHeight: "25px",
                  width: "850px",
                  minHeight: "25px",
                  display: "flex",
                  flexWrap: "wrap",
                  marginRight: "51px",
                }}
              >
                중소기업 근로자인데 파견직이라 강남구로 출근했다가 종로구로
                출근했다가 프로젝트마다 바뀌는데 1순위로 신청하면 안되겠죠?
                아시는 분 없나요?? 쨋든 공고 되게 좋아보이네요 일단
                신청해야겠어요~~~ 중소기업 근로자인데 파견직이라 강남구로
                출근했다가 종로구로 출근했다가 프로젝트마다 바뀌는데 1순위로
                신청하면 안되겠죠? 아시는 분 없나요?? 쨋든 공고 되게
                좋아보이네요 일단 신청해야겠어요~~~ 중소기업 근로자인데
                파견직이라 강남구로 출근했다가 종로구로 출근했다가 프로젝트마다
                바뀌는데 1순위로 신청하면 안되겠죠? 아시는 분 없나요?? 쨋든 공고
                되게 좋아보이네요 일단 신청해야겠어요~~~ 중소기업 근로자인데
                파견직이라 강남구로 출근했다가 종로구로 출근했다가 프로젝트마다
                바뀌는데 1순위로 신청하면 안되겠죠? 아시는 분 없나요?? 쨋든 공고
                되게 좋아보이네요 일단 신청해야겠어요~~~
              </span>

              <span>
                <span
                  style={{
                    fontSize: "14px",
                    lineHeight: "25px",
                    width: "60px",
                    height: "25px",
                    color: "#A5AAB6",
                    marginRight: "12px",
                  }}
                >
                  21.12.31
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    lineHeight: "25px",
                    width: "60px",
                    height: "25px",
                    color: "#A5AAB6",
                  }}
                >
                  신고
                </span>
              </span>
            </CommentOneInfo>
          </CommentOne>
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
`;

const CommentButton = styled.div`
  width: 78px;
  height: 35px;
  border-radius: 21.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #20d7ff;
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

const Image = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 25px;
  margin-right: 7px;
  background-image: url("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export default Comment;
