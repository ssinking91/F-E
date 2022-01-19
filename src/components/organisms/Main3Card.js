import React from "react";
import styled from "styled-components";
import { mypagetActions } from "../redux/modules/mypage";
import { useDispatch } from "react-redux";
import Label from "../molecules/Label";
import { Text } from "../atoms/index";
import { ReactComponent as BmarkFill } from "../../images/bmark_fill.svg";
import { ReactComponent as BmarkNone } from "../../images/bmark_none.svg";
import defaultLogoImage from "../../images/defaultLogoImage.svg";

const Main3Card = (props) => {
  const { _onClick } = props;
  const dispatch = useDispatch();

  const islike = JSON.parse(props.islike);

  const [save3, setSave3] = React.useState(islike);

  // 카드 저장
  const saveCard = () => {
    const userKey = localStorage.getItem("userKey");
    const Page = props.Page; // 페이지 구분
    const status = props.status; //공공 민영 구분 구분
    const aptNo = props.aptNo;
    console.log(Page, status, aptNo, save3);

    if (userKey === null) {
      window.alert("로그인 후 사용이 가능합니다😎");
      return;
    }

    if (Page === "section3") {
      return (
        console.log("mypage section3"),
        setSave3(!save3),
        dispatch(mypagetActions.savedFB(aptNo, status))
      );
    }
  };

  // 접수 날짜
  const startDate = props.startDate.replace(/-/gi, ".");
  const endDate = props.endDate.replace(/-/gi, ".");
  // 최소, 최대 분양면적
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
      <Text h4 color="#778899" margin="0 0 20px 0">
        {props.number + 1 + " )" + (props.publicSales ? " 공공 분양" : " 민간 분양")}
      </Text>
      <Imageitem>
        <Image src={props.image} />
        <ImageDiv
          onClick={() => {
            saveCard();
          }}
        >
          {save3 ? <BmarkFill /> : <BmarkNone />}
        </ImageDiv>
      </Imageitem>
      <Item>
        <Info1 onClick={_onClick}>
          <LabelDiv>
            <Label registration></Label>
          </LabelDiv>
          <Text h4 margin="0 0 0 15px">
            {props.name.length > 17
              ? `${props.name.slice(0, 17)}...`
              : props.name}
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
        </Info2>
      </Item>
    </Container>
  );
};

const Container = styled.div`
  width: 370px;
  height: 593px;
  display: flex;
  flex-direction: column;
`;

const Imageitem = styled.div`
  width: 370px;
  height: 370px;
  position: relative;
  margin-bottom: 40px;
`;

const Image = styled.div`
  width: 370px;
  height: 370px;
  border-radius: 20px;
  background-image: url("${(props) => props.src || defaultLogoImage}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const ImageDiv = styled.div`
  position: absolute;
  width: 41px;
  height: 59px;
  right: 32px;
  top: 32px;
`;

const LabelDiv = styled.div`
  width: 64px;
  height: 29px;
`;

const Item = styled.div`
  width: 370px;
  height: 120px;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
`;

const Info1 = styled.div`
  width: 370px;
  height: 225px;
  display: flex;
  flex: wrap;
  align-items: center;
  margin-bottom: 15px;
  :hover {
    cursor: pointer;
  }
  & > p:hover {
    color: #20d7ff;
  }
`;

const Info2 = styled.div`
  width: 370px;
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
  width: 282px;
  height: 76px;
  display: flex;
  flex-direction: column;
`;

export default Main3Card;
