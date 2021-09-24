import React from "react";
import { Card } from "react-bootstrap";

import "../styles/voiceActorCard.css";

export default function VoiceActorCard({
    firstCharacter,
    secondCharacter,
    voiceActor,
}) {
    return (
        <div className={"voiceActorCardContainer"}>
            <div id={"characterOne"} className={"cardContainer"}>
                <Card>
                    <Card.Img src={firstCharacter.image_url} />
                    <Card.Title>{firstCharacter.name}</Card.Title>
                </Card>
            </div>
            <div className={"cardContainer"}>
                <Card>
                    <Card.Img src={voiceActor.image_url} />
                    <Card.Text>{voiceActor.language}</Card.Text>
                    <Card.Title>{voiceActor.name}</Card.Title>
                </Card>
            </div>
            <div id={"characterTwo"} className={"cardContainer"}>
                <Card>
                    <Card.Img src={secondCharacter.image_url} />
                    <Card.Title>{secondCharacter.name}</Card.Title>
                </Card>
            </div>
        </div>
    );
}
