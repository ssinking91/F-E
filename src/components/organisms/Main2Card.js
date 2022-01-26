import React from "react";
import styled from "styled-components";
import { mypagetActions } from "../redux/modules/mypage";
import { useDispatch } from "react-redux";

import Label from "../molecules/Label";
import { Text } from "../atoms/index";
import BmarkFill from "../../images/bmark_fill.svg";
import BmarkNone from "../../images/bmark_none.svg";

import defaultLogoImage from "../../images/defaultLogoImage.svg";
import defaultCardImage from "../../images/defaultCardImage.png";
import rightArrow from "../../images/rightArrow.png";
import { visibleModal } from "../redux/modules/map";
import { getDetailImgDB, getDetailInfoDB } from "../redux/modules/detail";

const Main2Card = (props) => {
  const { _onClick } = props;
  const dispatch = useDispatch();

  const islike = JSON.parse(props.islike);
  // console.log(props.islike);

  const [save2, setSave2] = React.useState(islike);

  const saveCard = () => {
    const userKey = localStorage.getItem("userKey");
    const Page = props.Page; // 페이지 구분
    const status = props.status; //공공 민영 구분 구분
    const aptNo = props.aptNo;
    // console.log(Page, status, aptNo, save2);

    if (userKey === null) {
      window.alert("로그인 후 사용이 가능합니다😎");
      return;
    }

    if (Page === "myPage") {
      return (
        // console.log("mypage main2Card"),
        dispatch(mypagetActions.savedFB(aptNo, status))
      );
    } else if (Page === "section2") {
      return (
        // console.log("section2 main2Card"),
        setSave2(!save2), dispatch(mypagetActions.savedFB(aptNo, status))
      );
    } else if (Page === "AllList") {
      return (
        // console.log("AllList main2Card"),
        setSave2(!save2), dispatch(mypagetActions.savedFB(aptNo, status))
      );
    }
  };
  // 접수 날짜
  const startDate = props.startDate.replace(/-/gi, ".");
  const endDate = props.endDate.replace(/-/gi, ".");
  // 최소, 최대 분양면적
  if (props.size === null) {
    return "";
  }

  let minSize = Math.ceil(props.size.split("~")[0]);
  let maxSize = Math.ceil(props.size.split("~")[1]);
  // 분양면적 => 평, 변환
  let pyeongMinSize = Math.ceil(0.3025 * minSize);
  let pyeongMaxSize = Math.ceil(0.3025 * maxSize);

  // 최소, 최대 가격
  let minPrice = props.publicSales
    ? props.price
    : props.price.split("~")[0].replace(",", "");
  let maxPrice = props.publicSales
    ? props.price
    : props.price.split("~")[1].replace(",", "");
  // console.log(minSize, maxSize, props.size);
  // 4, 5, 6 자릿수
  const minPrice4 = `${minPrice.split("")[0]}${minPrice.split("")[1]}${
    minPrice.split("")[2]
  }${minPrice.split("")[3]}`;
  const minPrice5 = `${minPrice.split("")[0]}억 ${minPrice.split("")[1]}${
    minPrice.split("")[2]
  }${minPrice.split("")[3]}${minPrice.split("")[4]}`;
  const minPrice6 = `${minPrice.split("")[0]}${minPrice.split("")[1]}억 ${
    minPrice.split("")[2]
  }${minPrice.split("")[3]}${minPrice.split("")[4]}${minPrice.split("")[5]}`;
  const maxPrice4 = `${maxPrice.split("")[0]}${maxPrice.split("")[1]}${
    maxPrice.split("")[2]
  }${maxPrice.split("")[3]}`;
  const maxPrice5 = `${maxPrice.split("")[0]}억 ${maxPrice.split("")[1]}${
    maxPrice.split("")[2]
  }${maxPrice.split("")[3]}${maxPrice.split("")[4]}`;
  const maxPrice6 = `${maxPrice.split("")[0]}${maxPrice.split("")[1]}억 ${
    maxPrice.split("")[2]
  }${maxPrice.split("")[3]}${maxPrice.split("")[4]}${maxPrice.split("")[5]}`;
  // console.log(maxPrice4, maxPrice5, maxPrice6);
  // 평당 단가
  let pyeongMaxPrice = Math.ceil(maxPrice / pyeongMaxSize);

  // 자릿수 별 조건문
  function minResultPrice() {
    let price = "";
    switch (minPrice.length) {
      case 4:
        price = minPrice4;
        break;
      case 6:
        price = minPrice6;
        break;
      default:
        price = minPrice5;
        break;
    }
    return price;
  }
  function maxResultPrice() {
    let price = "";
    switch (maxPrice.length) {
      case 4:
        price = maxPrice4;
        break;
      case 6:
        price = maxPrice6;
        break;
      default:
        price = maxPrice5;
        break;
    }
    return price;
  }

  return (
    <Container>
      <Imageitem>
        <Image
          shape="card"
          src={props.image === null ? defaultCardImage : props.image}
        />
        <ImageDiv
          onClick={() => {
            saveCard();
          }}
        >
          {/* asideSection에서는 찜하기 버튼 비활성화 */}
          {props.asideSectionView ? (
            ""
          ) : save2 ? (
            <>
              <img src={BmarkFill} alt="이미지" />
            </>
          ) : (
            <>
              <img src={BmarkNone} alt="이미지" />
            </>
          )}
        </ImageDiv>
      </Imageitem>
      <Item>
        <Info1 onClick={_onClick}>
          <LabelDiv>
            <Label LabelPanState={props.CardPanState}></Label>
          </LabelDiv>
          <Text
            h4
            margin="0 0 0 15px"
            width="250px"
            block="block"
            hidden="hidden"
            ellipsis="ellipsis"
            nowrap="nowrap"
          >
            {props.name.length > 17 ? `${props.name}` : props.name}
          </Text>
        </Info1>

        <Info2>
          <Info2Item1>
            <Text boldText>접수 기간</Text>
            <Text regularText color="#A5AAB6">
              분양 면적
            </Text>
            <Text regularText color="#A5AAB6">
              {props.publicSales ? "모집 유형" : "분양 가격"}
            </Text>
          </Info2Item1>
          <Info2Item2>
            <Text boldText>
              {startDate} ~ {endDate}
            </Text>
            <Text regularText color="#A5AAB6">
              {`${minSize} ~ ${maxSize} m² / ${pyeongMinSize} ~ ${pyeongMaxSize} 평`}
            </Text>
            <Text regularText color="#A5AAB6">
              {props.publicSales
                ? props.price
                : `${minResultPrice(minPrice)} ~ ${maxResultPrice(maxPrice)} ${
                    props.publicSales ? "" : `/ 평당 ${pyeongMaxPrice}만원`
                  }`}
            </Text>
          </Info2Item2>
          {/* history.push(`/${props.division}/${props.aptNo}`) */}
          {props.asideSectionView ? (
            <Info2Item3
              onClick={() => {
                dispatch(visibleModal(true));
                dispatch(getDetailInfoDB(`/${props.division}/${props.aptNo}`));
                dispatch(getDetailImgDB(`/${props.division}/${props.aptNo}`));
              }}
            >
              <RightArrow src={rightArrow} />
            </Info2Item3>
          ) : (
            ""
          )}
        </Info2>
      </Item>
    </Container>
  );
};

const Container = styled.div`
  width: 570px;
  height: 164px;
  display: flex;
  flex-wrap: wrap;
`;

const Imageitem = styled.div`
  width: 160px;
  height: 162.65px;
  position: relative;
  margin-right: 40px;
`;

const Image = styled.div`
  width: 160px;
  height: 160px;
  margin-top: 4px;
  border-radius: 20px;
  background-image: url("${(props) => props.src || defaultLogoImage}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const ImageDiv = styled.div`
  position: absolute;
  width: 27.27px;
  height: 38.29px;
  left: 111.36px;
  bottom: 123.35px;
  /* background-image: url("${(props) => props.src || defaultLogoImage}"); */
  cursor: pointer;
`;

// const ImageDiv2 = styled.div`
//   position: absolute;
//   width: 27.27px;
//   height: 38.29px;
//   left: 111.36px;
//   bottom: 123.35px;
//   background-image: url("${(props) => props.src || defaultLogoImage}");
//   cursor: pointer;
// `;

const LabelDiv = styled.div`
  width: 64px;
  height: 29px;
`;

const Item = styled.div`
  width: 320px;
  height: 120px;
  display: flex;
  flex-direction: column;
  margin: 14px 0px 30px;
`;

const Info1 = styled.div`
  width: 395px;
  min-height: 29px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
  align-items: center;
  :hover {
    cursor: pointer;
  }
  & > p:hover {
    color: #20d7ff;
  }
`;

const Info2 = styled.div`
  width: 395px;
  height: 76px;
  display: flex;
`;

const Info2Item1 = styled.div`
  width: 57px;
  height: 76px;
  display: flex;
  flex-direction: column;
  margin-right: 22px;
`;

const Info2Item2 = styled.div`
  width: 316px;
  height: 76px;
  display: flex;
  flex-direction: column;
`;
const Info2Item3 = styled.div`
  width: 316px;
  height: 76px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const RightArrow = styled.img`
  width: 8px;
  height: 20px;
  margin: auto;
`;
export default Main2Card;
