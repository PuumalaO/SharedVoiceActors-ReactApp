import React from "react";
import { Card } from "react-bootstrap";

import "../styles/titleCard.css";

export default function TitleCard(props) {
  if (props.title.title) {
    return (
      <div className={"cardContainer"}>
        <Card>
          <Card.Img
            className={"cardImage"}
            variant="top"
            src={props.title.image_url}
          />
          <Card.Title className={"cardTitle"}>{props.title.title}</Card.Title>
        </Card>
      </div>
    );
  }
  else{
      return(
      <div className={"cardContainer"}>
        <Card>
          <Card.Title id="noTitle" className={"cardTitle"}>No title selected</Card.Title>
        </Card>
      </div>
      )
  }
}
