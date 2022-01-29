import React from "react";
import styled from "styled-components";

export default function Youtube(props) {
  const { Y1, Y2, Y3, Y4, Y5 } = props;

  const youtubeItems = [
    <iframe
      width="595"
      height="337"
      src="https://www.youtube.com/embed/nEtiX7nN9qE"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>,
    <iframe
      width="595"
      height="337"
      src="https://www.youtube.com/embed/Ibz6iWmjYHo"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>,
    <iframe
      width="595"
      height="337"
      src="https://www.youtube.com/embed/zYyq5CFn86o"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>,
    <iframe
      width="595"
      height="337"
      src="https://www.youtube.com/embed/jmDbfVLdcgg"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>,
    <iframe
      width="595"
      height="337"
      src="https://www.youtube.com/embed/r9F_SVJmggA"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>,
    <iframe
      width="595"
      height="337"
      src="https://www.youtube.com/embed/XceqfIhzmQw"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>,
    <iframe
      width="595"
      height="337"
      src="https://www.youtube.com/embed/cqfrcltvBAo"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>,
    <iframe
      width="595"
      height="337"
      src="https://www.youtube.com/embed/winQLzfVnlI"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>,
    <iframe
      width="595"
      height="337"
      src="https://www.youtube.com/embed/-dCZqtmtP2c"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>,
    <iframe
      width="595"
      height="337"
      src="https://www.youtube.com/embed/8cVo1kdQ_1M"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>,
  ];

  // text type
  if (Y1) {
    return (
      <CardWraps>
        <Card>{youtubeItems[0]}</Card>
        <Card>{youtubeItems[1]}</Card>
      </CardWraps>
    );
  }
  if (Y2) {
    return (
      <CardWraps>
        <Card>{youtubeItems[2]}</Card>
        <Card>{youtubeItems[3]}</Card>
      </CardWraps>
    );
  }
  if (Y3) {
    return (
      <CardWraps>
        <Card>{youtubeItems[4]}</Card>
        <Card>{youtubeItems[5]}</Card>
      </CardWraps>
    );
  }
  if (Y4) {
    return (
      <CardWraps>
        <Card>{youtubeItems[6]}</Card>
        <Card>{youtubeItems[7]}</Card>
      </CardWraps>
    );
  }
  if (Y5) {
    return (
      <CardWraps>
        <Card>{youtubeItems[8]}</Card>
        <Card>{youtubeItems[9]}</Card>
      </CardWraps>
    );
  }
  return (
    <CardWraps>
      <Card>{youtubeItems[0]}</Card>
      <Card>{youtubeItems[1]}</Card>
    </CardWraps>
  );
}

const CardWraps = styled.div`
  width: 1200px;
  height: 377px;
  display: flex;
  justify-content: space-between;
  margin: 0px auto;
`;

const Card = styled.div`
  width: 595px;
  height: 337px;
`;
