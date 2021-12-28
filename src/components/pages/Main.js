import ReactFullpage from "@fullpage/react-fullpage";

import NavBar from "../organisms/NavBar";
// import Main2Card from "../organisms/Main2Card";
// import Main3Card from "../organisms/Main3Card";
import Section01 from "../organisms/Section01";
import Section02 from "../organisms/Section02";
import Section03 from "../organisms/Section03";
import Section04 from "../organisms/Section04";

export default function Main() {
  return (
    <>
      <NavBar />
      <Fullpage></Fullpage>
      {/* <Main2Card /> <br /> <br /> <br />
      <Main3Card /> <br /> <br /> <br />
      <iframe
        width="490"
        height="277"
        src="https://www.youtube.com/embed/nEtiX7nN9qE"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe> */}
    </>
  );
}

const anchors = ["page1", "page2", "page3", "page4"];

const Fullpage = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
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
