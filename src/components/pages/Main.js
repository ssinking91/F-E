import ReactFullpage from "@fullpage/react-fullpage";

import Section01 from "../organisms/Section01";
import Section02 from "../organisms/Section02";
import Section03 from "../organisms/Section03";
import Section04 from "../organisms/Section04";
import NavBarAnchor from "../organisms/NavBarAnchor";

export default function Main() {
  console.log('111');
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <NavBarAnchor />

      <Fullpage />
    </div>
  );
}

const anchors = ["page1", "page2", "page3", "page4"];
const userName = localStorage.getItem("userName");

const Fullpage = (props) => (
  <ReactFullpage
    anchors={anchors}
    verticalCentered={false}
    sectionsColor={["", "", "", "#F9F9F9"]}
    onLeave={(origin, destination, direction) => {}}
    render={({ state, fullpageApi }) => {
      return (
        <>
          <div>
            <Section01 userName={userName} />
            <Section02 userName={userName} />
            <Section03 />
            <Section04 />
          </div>
        </>
      );
    }}
  />
);
