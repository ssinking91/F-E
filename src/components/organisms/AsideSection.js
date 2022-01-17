import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import AsideCard from "../organisms/AsideCard";
import { Grid } from "../atoms/index";

export default function AsideSection() {
  const publicList = useSelector((store) => store.allList.publicList);
  console.log(publicList);
  return (
    <>
      <Wrap>
        <ContentArea>
          <AsideCard></AsideCard>
          {/* {publicList &&
            publicList.map((item, index) => {
              const panName = `[${item.aisTypeName}] ${
                item.address.split(" ")[1]
              } ${item.address.split(" ")[2]}`;
              const publicSales = "publicSales";
              return (
                <>
                  <Grid margin="20px 0 20px 30px">
                    <Main2Card
                      key={index}
                      image={item.ImgUrl}
                      name={panName}
                      startDate={item.startDate}
                      endDate={item.closeDate}
                      size={`${item.size} m²`}
                      price={item.aisTypeName}
                      aptNo={item.panId}
                      islike={item.islike}
                      CardPanState={item.panState}
                      publicSales={publicSales}
                    />
                  </Grid>
                </>
              );
            })} */}
        </ContentArea>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  width: 355px;
  height: 100vh;
  position: relative;
  right: 0;
  background-color: #f5f5f5;
`;

const ContentArea = styled.div`
  position: absolute;
  top: 148px;
`;
