import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Search from "./Search";
import SearchResults from "./SearchResults";
import SelectedTitles from "./SelectedTitles";
import SharedVoiceActors from "./SharedVoiceActors";
import "../styles/home.css";
import Footer from "./Footer";

export default function Home() {
    const [searchResults, setSearchResults] = useState({});
    const [firstTitle, setFirstTitle] = useState({});
    const [secondTitle, setSecondTitle] = useState({});
    const [titlesSelected, setTitlesSelected] = useState(false);
    const searchCallback = (results) => {
        if (results) setSearchResults(results);
    };
    const searchResultClickCallback = (selected, index) => {
        const removeIndex = searchResults.findIndex(
            (result) => result.title === selected.title
        );
        const newSearchResults = searchResults;
        newSearchResults.splice(removeIndex, 1);
        setSearchResults(newSearchResults);
        if (firstTitle.title) setSecondTitle(selected);
        else {
            setFirstTitle(selected);
        }
    };

    const clearSelections = () => {
        setSearchResults({});
        setFirstTitle({});
        setSecondTitle({});
        setTitlesSelected(false);
    };

    if (firstTitle.title && secondTitle.title && titlesSelected !== true)
        setTitlesSelected(true);
    return (
        <div>
            <div className={"mainHeaderContainer"}>
                <a style={{ textDecoration: "none" }} href="/">
                    <h1>Same voice actors?</h1>
                </a>
                <b style={{ fontWeight: 300 }}>
                    Select two anime titles and see if they have any voice
                    actors in common!
                </b>
            </div>
            <Search callback={searchCallback} disable={titlesSelected} />
            {titlesSelected ? (
                <div className="clearButtonContainer">
                    <Button className="clearButton" onClick={clearSelections}>
                        Clear
                    </Button>
                </div>
            ) : null}
            <SelectedTitles firstTitle={firstTitle} secondTitle={secondTitle} />
            <SearchResults
                hide={titlesSelected}
                results={searchResults.length > 0 ? searchResults : []}
                callback={searchResultClickCallback}
            />
            <SharedVoiceActors
                titlesSelected={titlesSelected}
                firstTitle={firstTitle}
                secondTitle={secondTitle}
            />
            <Footer />
        </div>
    );
}
