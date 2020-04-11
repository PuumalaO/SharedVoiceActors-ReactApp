import React, { useState, useEffect } from "react";
import VoiceActorCard from "./VoiceActorCard";
import "../styles/SharedVoiceActors.css";
import BeatLoader from 'react-spinners/BeatLoader';

export default function SharedVoiceActors(props) {
  const [firstTitleCharacters, setFirstTitleCharacters] = useState({});
  const [secondTitleCharacters, setSecondTitleCharacters] = useState({});
  const [firstCharactersReady, setFirstCharactersReady] = useState(false);
  const [secondCharactersReady, setSecondCharactersReady] = useState(false);
  const [matchNotExecuted, setMatchNotExecuted] = useState(true);
  const [matchingActors, setMatchingActors] = useState([]);

  useEffect(() => {
    getCharacters(props.firstTitle, 1);
    return () => {
      setFirstTitleCharacters({});
      setFirstCharactersReady(false);
    };
  }, [props.firstTitle]);

  useEffect(() => {
    getCharacters(props.secondTitle, 2);
    return () => {
      setSecondTitleCharacters({});
      setSecondCharactersReady(false);
    };
  }, [props.secondTitle]);

  useEffect(() => {
    return () => {
      setMatchNotExecuted(true);
      setMatchingActors([]);
    };
  }, [props.titlesSelected]);

  const getCharacters = (title, index) => {
    if (title.mal_id) {
      fetch(
        "https://api.jikan.moe/v3/anime/" + title.mal_id + "/characters_staff"
      )
        .then((res) => res.json())
        .then((result) => {
          if (index === 1) {
            setFirstTitleCharacters(result.characters);
            setFirstCharactersReady(true);
          } else {
            setSecondTitleCharacters(result.characters);
            setSecondCharactersReady(true);
          }
        });
    }
  };

  const matchActors = (firstTitleCharacters, secondTitleCharacters) => {
    setMatchNotExecuted(false);

    const matches = [];
    secondTitleCharacters.forEach((secondCharacter) => {
      firstTitleCharacters.forEach((firstCharacter) => {
        if (
          firstCharacter.voice_actors.length > 0 &&
          secondCharacter.voice_actors.length > 0
        ) {
          firstCharacter.voice_actors.forEach((firstVoiceActor) => {
            secondCharacter.voice_actors.forEach((secondVoiceActor) => {
              if (firstVoiceActor.name === secondVoiceActor.name)
                matches.push({
                  firstCharacter: firstCharacter,
                  secondCharacter: secondCharacter,
                  voiceActor: firstVoiceActor,
                });
            });
          });
        }
      });
    });
    setMatchingActors(matches);
  };

  if (secondCharactersReady && firstCharactersReady && matchNotExecuted) {
    matchActors(firstTitleCharacters, secondTitleCharacters);
  }

  if (props.titlesSelected && firstCharactersReady && secondCharactersReady) {
    const matches =
      matchingActors.length > 0 ? (
        matchingActors.map((match) => <VoiceActorCard match={match} />)
      ) : (
        <h1>No matching voice actors!</h1>
      );
    return (
      <div className={"voiceActorsContainer"}>
        {matchingActors.length > 0 ? (<div className="headerContainer">
            <h3>Character</h3>
            <h3>Voice actor</h3>
            <h3>Character</h3>
          </div>
        ): null}
          {matches}

      </div>
    );
  } else if(props.titlesSelected) {
    return (
      <div>
        <h3>Processing..</h3>
        <BeatLoader />
      </div>
    );
  }
  else return null
}
