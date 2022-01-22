import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as mainAction } from "../redux/modules/main";
import Main3Card from "./Main3Card";
import { history } from "../redux/configStore";

export default function SlideItems(props) {
  const { I1, I2 } = props;

  const dispatch = useDispatch();

  React.useEffect(() => {
    // console.log("@@@@@  page3  @@@@@");
    dispatch(mainAction.getPublicHotFB());
    dispatch(mainAction.getPrivateHotFB());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 공공 Hot
  const publicHotList = useSelector((state) => state.main.publicHotList);
  // console.log(publicHotList);
  const publicHotListSlice = publicHotList.slice(0, 3);
  // console.log(publicHotListSlice);

  // 민영 Hot
  const privateHotList1 = useSelector((state) => state.main.privateHotList);
  const privateHOTList2 = privateHotList1.privateHotList[0];
  // const statusArr = useSelector((state) => state.main.privateHotList.statusArr);
  // console.log(privateHOTList2);

  let privateHotListSlice;

  if (privateHOTList2) {
    privateHotListSlice = privateHOTList2.slice(0, 3);
  } // 동기 끝날때 까지 -> 비동기는 안됨! 값이 할당이 되면 slice 함수를 실행해라

  // console.log(privateHotListSlice);
  // console.log(statusArr);

  const Page = "section3";

  if (I1) {
    return (
      <CardWraps>
        {publicHotListSlice &&
          publicHotListSlice.map((item, index) => {
            const publicSales = "publicSales";
            const status = "public";

            return (
              <Main3Card
                key={index}
                number={index}
                image={item.ImgUrl}
                name={item.panName}
                startDate={item.startDate}
                endDate={item.closeDate}
                size={item.size}
                price={item.aisTypeName}
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
          })}
      </CardWraps>
    );
  }
  if (I2) {
    return (
      <CardWraps>
        {privateHotListSlice &&
          privateHotListSlice.map((item, index) => {
            //값이 할당 되기전에 map이 실행이되서 오류남
            const status = "private";

            return (
              <Main3Card
                key={index}
                number={index}
                image={item.ImgUrl}
                name={item.houseName}
                startDate={item.receptStartDate}
                endDate={item.receptEndDate}
                size={item.size}
                price={item.supplyAmount}
                aptNo={item.pblancNo}
                //CardPanState={private_statusInfo[index].status}
                islike={item.islike}
                Page={Page}
                status={status}
                //민간 청약정보 ID 값
                _onClick={() => {
                  history.push(`/private/${item.pblancNo}`);
                }}
              />
            );
          })}
      </CardWraps>
    );
  }
}

const CardWraps = styled.div`
  width: 1200px;
  height: 593px;
  display: flex;
  justify-content: space-between;
  margin: 0px auto 20px;
`;
