import React from "react";
import TitleCard from "./TitleCard";

import "../styles/selectedTitles.css";

export default function SelectedTitles(props) {
  return (
    <div className={"container"}>
      <div className={"selectedTitlesContainer"}>
        
      {props.firstTitle.title ? (<h1 id="leftHeader">Anime 1</h1>) : null}
        <div id="filler" />
        {props.secondTitle.title ? (<h1 id="rightHeader">Anime 2</h1>) : null}
        </div>
        <div className={"selectedImagesContainer"}>
        <div id={"selectedLeft"} className={"selectedContainer"}>
          {props.firstTitle.title ? (
            <TitleCard title={props.firstTitle} />
          ) : null}
        </div>
        <div id="filler" className={"selectedContainer"} />
        <div id={"selectedRight"} className={"selectedContainer"}>
          {props.secondTitle.title ? (
            <TitleCard title={props.secondTitle} />
          ) : null}
          </div>
        </div>
      
    </div>
  );
}
