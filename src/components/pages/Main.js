import ReactFullpage from "@fullpage/react-fullpage";

// import Main2Card from "../organisms/Main2Card";
// import Main3Card from "../organisms/Main3Card";
import Section01 from "../organisms/Section01";
import Section02 from "../organisms/Section02";
import Section03 from "../organisms/Section03";
import Section04 from "../organisms/Section04";

export default function Main() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Fullpage />
    </div>
  );
}

const anchors = ["page1", "page2", "page3", "page4"];

const Fullpage = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    // navigationTooltips={anchors}
    verticalCentered={false}
    sectionsColor={["#fff", "#fff", "#fff", "#F9F9F9"]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      return (
        <>
          <div>
            <Section01 />
            <Section02 />
            <Section03 />
            <Section04 />
          </div>
        </>
      );
    }}
  />
);