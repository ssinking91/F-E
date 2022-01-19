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
    console.log("@@@@@  page3  @@@@@");
    dispatch(mainAction.getPublicHotFB());
    dispatch(mainAction.getPrivateHotFB());
  }, []);

  // 공공 Hot
  const publicHotList = useSelector((state) => state.main.publicHotList);
  console.log(publicHotList);
  const publicHotListSlice = publicHotList.slice(0, 3);
  console.log(publicHotListSlice);

  // 민영 Hot
  const privateHotList1 = useSelector(
    (state) => state.main.privateHotList.privateHotList[0]
  );
  const statusArr = useSelector((state) => state.main.privateHotList.statusArr);
  console.log(privateHotList1);
  console.log(statusArr);
//   const privateHotListSlice = privateHotList1.slice(0, 3);
//   console.log(privateHotListSlice);

  const Page = "section3";

  if (I1) {
    return (
      <CardWraps>
        {publicHotListSlice.map((item, index) => {
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
          {publicHotList.map((item, index) => {
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
