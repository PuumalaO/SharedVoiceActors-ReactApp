import React, { useState, useEffect} from "react";
import { Card } from "react-bootstrap";

import "../styles/voiceActorCard.css";

export default function VoiceActorCard(props) {
  const [voiceActorUrl, setVoiceActorUrl] = useState(
    props.match.voiceActor.image_url
  );
  useEffect(() => {
    fetch(
      "https://api.jikan.moe/v3/person/" +
        props.match.voiceActor.mal_id +
        "/pictures"
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.pictures.length > 0) {
          setVoiceActorUrl(result.pictures[0].large);
        }
      });
    return () => {
    };
  }, [props.match.voiceActor]);

  return (
    <div className={"voiceActorCardContainer"}>
      <div id={"characterOne"} className={"cardContainer"}>
        <Card>
          <Card.Img src={props.match.firstCharacter.image_url} />
          <Card.Title>{props.match.firstCharacter.name}</Card.Title>
        </Card>
      </div>
      <div className={"cardContainer"}>
        <Card>
          <Card.Img src={voiceActorUrl} />
          <Card.Text>{props.match.voiceActor.language}</Card.Text>
          <Card.Title>{props.match.voiceActor.name}</Card.Title>
        </Card>
      </div>
      <div id={"characterTwo"} className={"cardContainer"}>
        <Card>
          <Card.Img src={props.match.secondCharacter.image_url} />
          <Card.Title>{props.match.secondCharacter.name}</Card.Title>
        </Card>
      </div>
    </div>
  );
}
